const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless Chromium browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();



await page.goto(`file://D:/CODE/DOM/index.html`);

  // Generate the PDF file
  await page.pdf({
    path: 'output1.pdf', // Output file path
    format: 'A4', // Page format
  });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully.');
})();
