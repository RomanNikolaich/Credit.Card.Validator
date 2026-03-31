import RenderHTML from "../render.js";
import { algorithmLuhn } from "../algorithmLuhn.js";

describe('test of algorithmLuhn', () => {
    let render;
    let form;
    let input;
    let cards;
    const cardClasses = [['Visa', 'card-visa'], 
      ['Мир', 'card-mir'], ['American Express', 'card-amex'], 
      ['Mastercard', 'card-master-card'], ['Discover Card', 'card-discover'], 
      ['JCB', 'card-jcb'], ['Maestro Card', 'card-maestro'], 
      ['UnionPay', 'card-union-pay'], ['Universal Air Travel Plan', 'card-uatp']];

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

    test('of algorithmLuhn', () => {
        render.renderCardBox(cardClasses);

        input.value = '4561261212345678';
        expect(algorithmLuhn(input.value)).toBe(false);
        const error = form.querySelector('.error-no-value');

        input.value = '588663669978982217';
        expect(algorithmLuhn(input.value)).toBe(true);
        const rigth = form.querySelector(".correct-number");
        
    })
});
