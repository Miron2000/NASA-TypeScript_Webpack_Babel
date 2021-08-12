const puppeteer = require('puppeteer');

// проверка или в App.ts содержит в клссе .title -> h1 'NASA-developmentDev'
describe('on page load', () => {
  test('h1 loads correctly', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();

    await page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });
    await page.goto('http://localhost:8080/');
    const html = await page.$eval('.title', (e: { innerHTML: string; }) => e.innerHTML);
    expect(html).toBe('NASA-developmentDev');
    await browser.close();
  }, 16000);
});

// проверка или в Header в .header__section есть 4 элемента
test('Header section loads correctly', async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');

  const navbar = await page.$eval('.header__section', (el: boolean) => (el ? true : false));
  const listItems = await page.$$('.header__test');

  expect(navbar).toBe(true);
  expect(listItems.length).toBe(4);
  await browser.close();
});
