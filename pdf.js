const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless Chromium browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  await page.addStyleTag({ path: 'index.css' });

  await page.goto(`C:/Users/JAYA DURGA PRASAD/Desktop/certificateTemplate/index.html`);

  // Generate the PDF file
  await page.pdf({
    path: 'output.pdf', // Output file path
    format: 'A4', // Page format
    printBackground: true,
  });

  // Close the browser
  await browser.close();

  console.log('PDF generated successfully.');
})();



