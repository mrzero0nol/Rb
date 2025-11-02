
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/webview.html');
  await page.waitForTimeout(3500); // Wait for splash screen to disappear
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
  console.log('Screenshot taken and saved as screenshot.png');
})();
