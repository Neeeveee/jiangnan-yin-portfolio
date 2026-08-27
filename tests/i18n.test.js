const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const pages = fs.readdirSync(root).filter((name) => name.endsWith(".html"));

test("every page loads the translation layer before the shared script", () => {
  for (const page of pages) {
    const html = fs.readFileSync(path.join(root, page), "utf8");
    const translationsIndex = html.indexOf('src="translations.js"');
    const sharedScriptIndex = html.indexOf('src="script.js"');

    assert.notEqual(translationsIndex, -1, `${page} is missing translations.js`);
    assert.ok(translationsIndex < sharedScriptIndex, `${page} loads translations too late`);
  }
});

test("language helpers normalize stored values and expose core Chinese copy", () => {
  const i18n = require(path.join(root, "translations.js"));

  assert.equal(i18n.normalizeLanguage("zh-CN"), "zh");
  assert.equal(i18n.normalizeLanguage("en-US"), "en");
  assert.equal(i18n.normalizeLanguage("unexpected"), "en");
  assert.equal(i18n.translate("Works", "zh"), "作品");
  assert.equal(i18n.translate("Bee Cue", "zh"), "Bee Cue");
});

test("all portfolio pages provide a navigation target for the language control", () => {
  for (const page of pages) {
    const html = fs.readFileSync(path.join(root, page), "utf8");
    assert.match(html, /<(header|nav)[^>]+(?:data-site-nav|detail-floating-nav)/, page);
  }
});
