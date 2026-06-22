const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const progressBar = document.querySelector(".progress-bar");
const siteNav = document.querySelector("[data-site-nav]");

if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

if (siteNav) {
  const updateSiteNav = () => {
    siteNav.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateSiteNav();
  window.addEventListener("scroll", updateSiteNav, { passive: true });
}

const worksTimeline = document.querySelector("[data-works-timeline]");

if (worksTimeline) {
  const workRows = Array.from(worksTimeline.querySelectorAll("[data-work-row]"));
  const timelineItems = Array.from(worksTimeline.querySelectorAll("[data-timeline-item]"));

  const rowObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          const index = entry.target.dataset.workIndex;
          timelineItems
            .find((item) => item.dataset.workIndex === index)
            ?.classList.add("is-visible");
        }
      });
    },
    { rootMargin: "0px 0px -14% 0px", threshold: 0.22 }
  );

  workRows.forEach((row) => rowObserver.observe(row));

  timelineItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const targetSelector = item.getAttribute("href");
      const target = targetSelector ? document.querySelector(targetSelector) : null;

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  const updateWorksTimeline = () => {
    const viewportFocus = window.innerHeight * 0.48;
    let activeRow = null;
    let activeDistance = Number.POSITIVE_INFINITY;

    workRows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      const rowFocus = rect.top + rect.height * 0.36;
      const distance = Math.abs(rowFocus - viewportFocus);

      if (rect.bottom > 0 && rect.top < window.innerHeight && distance < activeDistance) {
        activeDistance = distance;
        activeRow = row;
      }
    });

    const activeIndex = activeRow?.dataset.workIndex;

    workRows.forEach((row) => row.classList.toggle("is-active", row === activeRow));
    timelineItems.forEach((item) => item.classList.toggle("is-active", item.dataset.workIndex === activeIndex));
    worksTimeline.closest(".works-derek")?.classList.toggle("has-active", Boolean(activeRow));
  };

  updateWorksTimeline();
  window.addEventListener("scroll", updateWorksTimeline, { passive: true });
  window.addEventListener("resize", updateWorksTimeline);
}

const curtain = document.querySelector(".hero-curtain");

if (curtain) {
  const strands = Array.from(curtain.querySelectorAll(".curtain-item"));
  const states = strands.map((strand) => ({
    strand,
    angle: 0,
    velocity: 0,
    length: Number.parseFloat(getComputedStyle(strand).height) || 320,
    centerX: 0,
    topY: 0,
  }));
  const pointer = {
    active: false,
    x: 0,
    y: 0,
    previousX: 0,
    velocityX: 0,
  };
  let lastTime = performance.now();
  let frameId = 0;

  const measureCurtain = () => {
    states.forEach((state) => {
      const rect = state.strand.getBoundingClientRect();
      state.length = rect.height || state.length;
      state.centerX = rect.left + rect.width / 2;
      state.topY = rect.top;
    });
  };

  const animateCurtain = (time) => {
    const elapsed = Math.min(32, time - lastTime) / 16.67;
    lastTime = time;

    states.forEach((state) => {
      const bobY = state.topY + state.length;
      const horizontalDistance = pointer.x - state.centerX;
      const verticalDistance = pointer.y - bobY;
      const reachX = 112;
      const reachY = Math.max(130, state.length * 0.58);

      if (pointer.active && Math.abs(horizontalDistance) < reachX && Math.abs(verticalDistance) < reachY) {
        const proximityX = 1 - Math.abs(horizontalDistance) / reachX;
        const proximityY = 1 - Math.abs(verticalDistance) / reachY;
        const proximity = proximityX * proximityY;
        const direction = pointer.velocityX >= 0 ? 1 : -1;
        const brush = direction * proximity * Math.min(0.0075, Math.abs(pointer.velocityX) * 0.00042);
        const parting = (horizontalDistance < 0 ? -1 : 1) * proximity * 0.0012;

        state.velocity += brush + parting;
      }

      const gravity = -Math.sin(state.angle) * 0.0042;
      state.velocity += gravity * elapsed;
      state.velocity *= Math.pow(0.986, elapsed);
      state.angle += state.velocity * elapsed;
      state.angle = Math.max(-0.28, Math.min(0.28, state.angle));

      if (Math.abs(state.angle) < 0.0003 && Math.abs(state.velocity) < 0.0003) {
        state.angle = 0;
        state.velocity = 0;
      }

      state.strand.style.setProperty("--angle", `${(state.angle * 180 / Math.PI).toFixed(3)}deg`);
    });

    frameId = requestAnimationFrame(animateCurtain);
  };

  measureCurtain();
  frameId = requestAnimationFrame(animateCurtain);

  curtain.addEventListener("pointermove", (event) => {
    pointer.active = true;
    pointer.velocityX = event.clientX - pointer.previousX;
    pointer.previousX = event.clientX;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  curtain.addEventListener("pointerenter", (event) => {
    pointer.active = true;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.previousX = event.clientX;
    pointer.velocityX = 0;
    measureCurtain();
  });

  curtain.addEventListener("pointerleave", () => {
    pointer.active = false;
    pointer.velocityX = 0;
  });

  window.addEventListener("resize", measureCurtain);
  window.addEventListener("scroll", measureCurtain, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frameId);
    } else {
      lastTime = performance.now();
      measureCurtain();
      frameId = requestAnimationFrame(animateCurtain);
    }
  });
}
