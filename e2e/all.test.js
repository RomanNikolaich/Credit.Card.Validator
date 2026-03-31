import puppeteer from 'puppeteer';

describe('Page 1', () => {
    let browser;
    let page;
    let form;
    let input;
    let cards;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 100,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage'
            ]
        });

        page = await browser.newPage();
        await page.goto('http://localhost:7080/');
        form = await page.$('.cards');
        input = await form.$('.input');
        cards = await form.$$('.card');
    });

    afterAll(async () => {
        await browser.close();
    });

    test('testing selector .cards', async () => {
        await page.waitForSelector('.cards');
        expect(!!page).toBe(true);
    }, 10000);

    test('testing form visa', async () => {
        for (let card of [...cards]) {
            await card.waitForSelector('.card-dark');
        }
        await input.type('4561261212345678');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value');
        const visa = await form.$('.card-visa');
        expect(!!visa).toBe(true);
        await visa.waitForSelector('.card-dark', { hidden: true });
    }, 50000);

    test('testing form master', async () => {
        await input.click({ clickCount: 3 });
        await page.keyboard.press('Backspace');
        for (let card of [...cards]) {
            await card.waitForSelector('.card-dark');
        }
        await input.type('588663669978982217');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value', { hidden: true });
        await form.waitForSelector('.correct-number');
        const master = await form.$('.card-master-card');
        expect(!!master).toBe(true);
        await master.waitForSelector('.card-dark', { hidden: true });
    }, 50000);

    test('testing form mir', async () => {
        await input.click({ clickCount: 3 });
        await page.keyboard.press('Backspace');
        for (let card of [...cards]) {
            await card.waitForSelector('.card-dark');
        }
        await input.type('92458896552211331');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value', { hidden: true });
        await form.waitForSelector('.correct-number');
        const mir = await form.$('.card-mir');
        expect(!!mir).toBe(true);
        await mir.waitForSelector('.card-dark', { hidden: true });
    }, 50000);

    test('testing form am-ex and jsb', async () => {
        await input.click({ clickCount: 3 });
        await page.keyboard.press('Backspace');
        for (let card of [...cards]) {
            await card.waitForSelector('.card-dark');
        }
        await input.type('32458896552211331');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value');
        await form.waitForSelector('.correct-number', { hidden: true });
        const jsb = await form.$('.card-jcb');
        expect(!!jsb).toBe(true);
        await jsb.waitForSelector('.card-dark', { hidden: true });
        const amEx = await form.$('.card-amex');
        expect(!!amEx).toBe(true);
        await amEx.waitForSelector('.card-dark', { hidden: true });
    }, 50000);

    test('testing form uatp', async () => {
        await input.click({ clickCount: 3 });
        await page.keyboard.press('Backspace');
        for (let card of [...cards]) {
            await card.waitForSelector('.card-dark');
        }
        await input.type('13866366997244');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value', { hidden: true });
        await form.waitForSelector('.correct-number');
        const uatp = await form.$('.card-uatp');
        expect(!!uatp).toBe(true);
        await uatp.waitForSelector('.card-dark', { hidden: true });
    }, 50000);

    test('testing form card-discover, card-union-pay and card-maestro', async () => {
        await input.click({ clickCount: 3 });
        await page.keyboard.press('Backspace');
        await input.type('63866');
        await form.waitForSelector('.error-no-value');
        await input.type('3669972452');
        await form.waitForSelector('.correct-pay');
        await form.waitForSelector('.error-no-value', { hidden: true });
        await form.waitForSelector('.correct-number');
        const discover = await form.$('.card-discover');
        expect(!!discover).toBe(true);
        await discover.waitForSelector('.card-dark', { hidden: true });
        const unionPay = await form.$('.card-union-pay');
        expect(!!unionPay).toBe(true);
        await unionPay.waitForSelector('.card-dark', { hidden: true });
        const maestro = await form.$('.card-maestro');
        expect(!!maestro).toBe(true);
        await maestro.waitForSelector('.card-dark', { hidden: true });

    }, 50000);
});
