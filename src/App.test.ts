import puppeteer from 'puppeteer';

let page: puppeteer.Page;
let browser: puppeteer.Browser;
const width = 1920;
const height = 1080;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.goto('http://localhost:8080/');
  await page.setViewport({ width, height });
});

describe('on page load', () => {
  // проверка или в App.ts содержит в клссе .title -> h1 'NASA-developmentDev'
  test('h1 loads correctly', async () => {
    const html = await page.$eval('.title', (e: { innerHTML: string; }) => e.innerHTML);
    expect(html).toBe('NASA-developmentDev');
  }, 16000);

  // проверка или в Header в .header__section есть 4 элемента
  test('Header section loads correctly', async () => {
    const navbar = await page.$eval('.header__section', (el) => (!!el));
    const listItems = await page.$$('.header__test');

    expect(navbar).toBe(true);
    expect(listItems.length).toBe(4);
  });

  test('Verifying that the Mars Rover Photos page works correctly', async () => {
    const selectMarsRover = '.select__marsRover';
    const selectCamera = '.select__camera';
    const btn = '.btn__section';
    const blockImg = '.result__block-img';
    await page.click(selectMarsRover);
    await page.type(selectMarsRover, 'opportunity');
    await page.click(selectCamera);
    await page.type(selectCamera, 'NAVCAM');
    await page.click(btn);

    setTimeout(() => {
      const imageEl = document.getElementsByClassName('photo__marsRover')[0].getAttribute('src');
      expect(blockImg).toBe(imageEl);
    }, 1000);
  }, 16000);
});

afterAll(() => {
  browser.close();
});
