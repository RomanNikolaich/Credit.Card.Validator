import RenderHTML from "../render.js";
import { formValidity } from "../formValidity";

describe('test of formValidity', () => {
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

    test('test of formValidity', () => {
        render.renderCardBox(cardClasses);

        expect(input).toBeTruthy();
        expect(input.pattern).toBe("\\d+?");
        input.value = '4561261212345678';
        expect(formValidity(form)).toBe(true);
        input.value = '45sfffffvv45678';
        expect(formValidity(form)).toBe(false);
        expect(form.querySelector(".error-no-value")).toBeTruthy();

    })
});
