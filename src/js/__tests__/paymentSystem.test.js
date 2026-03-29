import RenderHTML from "../render.js";
import { paymentSystem } from "../paymentSystem.js";

describe('test of paymentSystem', () => {
    let render;
    let form;
    let input;
    const cardClasses = [
        ['Visa', 'card-visa'],
        ['Мир', 'card-mir'],
        ['American Express', 'card-amex'],
        ['Mastercard', 'card-master-card'],
        ['Discover Card', 'card-discover'],
        ['JCB', 'card-jcb'],
        ['Maestro Card', 'card-maestro'],
        ['UnionPay', 'card-union-pay'],
        ['Universal Air Travel Plan', 'card-uatp']
    ];

    beforeAll(() => {
        document.body.innerHTML = '<div class="container"></div>';
        const container = document.querySelector(".container");
        render = new RenderHTML(container);
        form = render.renderForm(cardClasses);
        input = form.querySelector('.input');
    });

    afterAll(() => {
        document.body.innerHTML = "";
    });

    test('test of visa', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '4561261212345678';
        expect(paymentSystem(input.value)).toStrictEqual(['card-visa']);
    });

    test('test of master', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '588663669978982217';
        expect(paymentSystem(input.value)).toStrictEqual(['card-master-card']);
    });

    test('test of mir', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '92458896552211331';
        expect(paymentSystem(input.value)).toStrictEqual(['card-mir']);
    });

    test('test of am-ex and jcb', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '32458896552211331';
        expect(paymentSystem(input.value)).toStrictEqual(['card-amex', 'card-jcb']);
    });

    test('test of uatp', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '13866366997244';
        expect(paymentSystem(input.value)).toStrictEqual(['card-uatp']);
    });

    test('test of card-discover, card-union-pay and card-maestro', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '638663669972452';
        expect(paymentSystem(input.value)).toStrictEqual(['card-discover', 'card-union-pay', 'card-maestro']);
    });

    test('test of empty', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '';
        expect(paymentSystem(input.value)).toStrictEqual([]);
    });

    test('test of other', () => {
        render.renderCardBox(cardClasses);
        expect(input).toBeTruthy();
        input.value = '838663669972452';
        expect(paymentSystem(input.value)).toStrictEqual(['Не найдена платежная система']);
    });
});
