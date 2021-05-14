// playwright -> end to end testing
import { chromium } from 'playwright';
let total = 0;
let totalPercobaan = 10;

(async () => {
  for (let i = 0; i < totalPercobaan; i++){
    console.log(`--- Attempt ${i + 1} --- `);
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')

    const performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing))
    const performanceTiming = JSON.parse(performanceTimingJson)

    // console.log(performanceTiming)

    const startToInteractive = performanceTiming.domInteractive - performanceTiming.navigationStart
    console.log(`Navigation start to DOM interactive: ${startToInteractive} ms`)
    total += startToInteractive;

    await browser.close()
  }
  console.log('rata-ratanya adalah: ', total / totalPercobaan, ' ms');
})()