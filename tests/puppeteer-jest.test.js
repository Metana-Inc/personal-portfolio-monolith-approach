const puppeteer = require('puppeteer');

describe('Login Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/login');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the login form', async () => {
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });

  it('should login with valid credentials', async () => {
    await page.type('#email', 'lanz1@example.com');
    await page.type('#password', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    const currentUrl = page.url();
    expect(currentUrl).toEqual('http://localhost:3000/');
  });
});

describe('Registration Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/register');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the registration form', async () => {
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });

  it('should register a new user', async () => {
    await page.type('#name', 'Test User');
    await page.type('#email', 'tesdtuser@example.com');
    await page.type('#password', 'testpassword');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    const currentUrl = page.url();
    expect(currentUrl).toEqual('http://localhost:3000/');
  });
});

describe('Home Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the home page content', async () => {
    const pageTitle = await page.title();
    expect(pageTitle).toEqual('Portfolio'); 
    const aboutSection = await page.$('#about');
    expect(aboutSection).toBeTruthy();
    const aboutText = await page.$eval('#about p', (el) => el.textContent);
    expect(aboutText).toContain('I enjoy creating things');
  });
});
