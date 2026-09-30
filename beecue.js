// Keep the demos quiet and looping, and avoid decoding off-screen videos.
const beeCueVideos = document.querySelectorAll('.bee-cue-demo-video');
const beeCueMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const beeCueObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target: video, isIntersecting }) => {
    if (isIntersecting && !beeCueMotion.matches && !document.hidden) {
      video.play().catch(() => { /* Keep the poster visible if autoplay is blocked. */ });
    } else {
      video.pause();
    }
  });
}, { threshold: 0.15 });
beeCueVideos.forEach((video) => {
  const playbackRate = Number(video.dataset.playbackRate || 1.5);
  video.defaultPlaybackRate = playbackRate;
  video.playbackRate = playbackRate;
  video.muted = true;
  video.autoplay = !beeCueMotion.matches;
  beeCueObserver.observe(video);
});
function refreshBeeCuePlayback() {
  beeCueVideos.forEach((video) => {
    video.autoplay = !beeCueMotion.matches;
    if (beeCueMotion.matches || document.hidden) video.pause();
    beeCueObserver.unobserve(video);
    beeCueObserver.observe(video);
  });
}
beeCueMotion.addEventListener('change', refreshBeeCuePlayback);
document.addEventListener('visibilitychange', refreshBeeCuePlayback);

// Reveal each research card once, including individually on narrow screens.
const beeCueCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target: card, isIntersecting }) => {
    if (!isIntersecting) return;
    if (!beeCueMotion.matches) {
      card.classList.add('is-arriving');
      card.addEventListener('animationend', () => card.classList.remove('is-arriving'), { once: true });
    }
    beeCueCardObserver.unobserve(card);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.bee-cue-research-cards article').forEach((card) => {
  beeCueCardObserver.observe(card);
});

const beeCueSiteNav = document.querySelector('.bee-cue-site-nav');
if (beeCueSiteNav) {
  const syncBeeCueNavHeight = () => {
    document.body.style.setProperty('--bee-nav-height', `${beeCueSiteNav.getBoundingClientRect().height}px`);
  };
  syncBeeCueNavHeight();
  new ResizeObserver(syncBeeCueNavHeight).observe(beeCueSiteNav);
}
