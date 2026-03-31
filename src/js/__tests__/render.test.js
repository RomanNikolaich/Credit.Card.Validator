import RenderHTML from "../render.js";
import { formValidity } from "../formValidity";

describe("render component", () => {
  let render;
  let form;

  const cardClasses = [['Visa', 'card-visa'], 
      ['Мир', 'card-mir'], ['American Express', 'card-amex'], 
      ['Mastercard', 'card-master-card'], ['Discover Card', 'card-discover'], 
      ['JCB', 'card-jcb'], ['Maestro Card', 'card-maestro'], 
      ['UnionPay', 'card-union-pay'], ['Universal Air Travel Plan', 'card-uatp']];

  beforeAll(() => {
    document.body.innerHTML = '<div class="container"></div>';
    const container = document.querySelector(".container");
    render = new RenderHTML(container);
    form = document.querySelector(".cards");
  });

  afterAll(() => {
    document.body.innerHTML = "";
  });

  test("of constructor", () => {
    expect(form).toBeTruthy();
    expect(form.noValidate).toBe(true);

  }, 5000);

  test('testing renderForm', () => {
    render.renderForm(cardClasses);
    render.renderCardBox(cardClasses);

    const header = document.querySelector(".header");
    expect(header).toBeTruthy();
    expect(header.textContent).toBe('Enter the card number');

    const input = document.querySelector(".input");
    expect(input).toBeTruthy();
    expect(input.pattern).toBe("\\d+?");


    const btn = document.querySelector(".btn");
    expect(btn).toBeTruthy();
    expect(btn.textContent).toBe('Click to Validate');

    const formChildren = form.children;

    expect(formChildren.length).toBe(4);

    expect(formChildren[0].classList.contains("header")).toBe(true);
    expect(formChildren[1].classList.contains("card-box")).toBe(true);
    expect(formChildren[2].classList.contains("input")).toBe(true);
    expect(formChildren[3].classList.contains("btn")).toBe(true);
  }, 8000);

  test('testing renderCardBox', () => {

    render.renderCardBox(cardClasses);

    const cardBox = document.querySelector(".card-box");
    expect(cardBox).toBeTruthy();

    const card = document.querySelectorAll(".card");
    expect(card.length).toBe(9);

    for (let c of card) {
      expect(c.children.length).toBe(1);
    }

    const cardDark = document.querySelectorAll(".card-dark");
    expect(cardDark.length).toBe(9);

    const cardVisa = document.querySelector(".card-visa");
    expect(cardVisa.classList.contains("card", "card-visa")).toBeTruthy();

    const cardMir = document.querySelector(".card-mir");
    expect(cardVisa.classList.contains("card", "card-mir")).toBeTruthy();

    const cardAmex = document.querySelector(".card-amex");
    expect(cardVisa.classList.contains("card", "card-amex")).toBeTruthy();

    const cardMasterCard = document.querySelector(".card-master-card");
    expect(cardVisa.classList.contains("card", "card-master-card")).toBeTruthy();

    const cardDiscover = document.querySelector(".card-discover");
    expect(cardVisa.classList.contains("card", "card-discover")).toBeTruthy();

    const cardJcb = document.querySelector(".card-jcb");
    expect(cardVisa.classList.contains("card", "card-jcb")).toBeTruthy();

    const cardMaestro = document.querySelector(".card-maestro");
    expect(cardVisa.classList.contains("card", "card-maestro")).toBeTruthy();

    const cardUnionPay = document.querySelector(".card-union-pay");
    expect(cardVisa.classList.contains("card", "card-union-pay")).toBeTruthy();

    const cardUatp = document.querySelector(".card-uatp");
    expect(cardVisa.classList.contains("card", "card-uatp")).toBeTruthy();

    
  }, 10000);

  test("of renderNotification", () => {
    render.renderNotification('correct-pay', `Платежная система Visa`);
    const correctPay = form.querySelector('.correct-pay');
    expect(correctPay).toBeTruthy();

    render.renderNotification('error-no-value', 'Не найдена платежная система');
    const error = form.querySelector('.error-no-value');
    expect(error).toBeTruthy();

  }, 5000);

});
