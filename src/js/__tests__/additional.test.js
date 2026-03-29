import { renderOneCard, renderCardBox } from "../additional";

describe("test of renderOneCard", () => {
    const clases = [['card-visa', 'Visa'], 
      ['card-mir', 'Мир'], ['card-amex', 'American Express'], 
      ['card-master-card', 'Mastercard'], ['card-discover', 'Discover Card'], 
      ['card-jcb', 'JCB'], ['card-maestro', 'Maestro Card'], 
      ['card-union-pay', 'UnionPay'], ['card-uatp', 'Universal Air Travel Plan']]
    test.each(
        clases
    )('Создание cardBox для разных платежных систем"', 
      (cardClass, cardData) => {
        const card = renderOneCard(cardClass, cardData);

        expect(card).toBeTruthy();
        expect(card.classList.contains("card", cardClass)).toBeTruthy();
        expect(card.children[0].classList.contains('card-dark')).toBeTruthy();
        expect(card.dataset.name).toBe(cardData);
        expect(card.children.length).toBe(1);

        const dark = card.children[0];
        expect(dark.classList.contains('card-dark')).toBe(true);

    }, 10000);

    test('test of renderCardBox', () => {
        const cardBox = renderCardBox(clases);
        expect(cardBox).toBeTruthy();
        expect(cardBox.children.length).toBe(9);

        for (let card of cardBox.children) {
            expect(card).toBeTruthy();
            expect(card.classList.contains("card")).toBeTruthy();
            expect(card.children[0].classList.contains('card-dark')).toBeTruthy();
            expect(card.children.length).toBe(1);
        }
    }, 10000);

});
