import { paymentSystem } from "./paymentSystem";
import { formValidity } from "./formValidity";
import { algorithmLuhn } from "./algorithmLuhn";


export default class RenderHTML {
  constructor(element) {
    this.element = element;
    this.form = document.createElement('form');
    this.form.classList.add('cards');
    this.form.noValidate = true;
    this.element.append(this.form);
    this.form = this.element.querySelector('.cards')
  };

  renderForm(cardClasses) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Enter the card number';
    const input = document.createElement('input');
    input.classList.add('input');
    input.name = 'card';
    input.pattern = "\\d+?";
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Click to Validate';
    this.form.append(header, this.renderCardBox(cardClasses), input, btn);
    this.validate();
    return this.form;
  };

  renderCardBox(cardClasses){
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    for (let i of cardClasses) {
      let card = document.createElement('div');
      card.classList.add('card', i[1]);
      card.dataset.name = i[0];
      const dark = document.createElement('div');
      dark.classList.add('card-dark');
      card.append(dark);
      cardBox.append(card);
    }

    return cardBox;
  };

  validate() {
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    input.addEventListener('input', () => {
      //console.log('input');
      const valid = formValidity(this.form);
      //console.log(valid);
      const correctPay = document.querySelectorAll('.correct-pay');
      if (!input.value) {
        for (let el of [...document.querySelectorAll('.card')]) {
          [...el.children].forEach(e => e.classList.add('card-dark'))
        }
        if (correctPay) {
          [...correctPay].forEach(el => el.remove());
        }
      }
      if (valid) {
        let ter = paymentSystem(input.value);
        const cardDark = document.querySelector('.card-dark');
        for (let i of ter) {
          let card = document.querySelector(`.${i}`);
          const errorNoValue = document.querySelector('.error-no-value');
          if (correctPay) {
            [...correctPay].forEach(el => el.remove());
          }
          if (errorNoValue) {
            errorNoValue.remove();
          }
          if (card) {
            //console.log(card.children);
            [...card.children].forEach(i => i.classList.remove('card-dark'));
            this.renderNotification('correct-pay', `Платежная система ${card.dataset.name}`);
          } else {
            this.renderNotification('error-no-value', i);
          }
          const isRigthCard = algorithmLuhn(input.value);
          const correctNumber = document.querySelector('.correct-number');
          if (correctNumber) {
            correctNumber.remove();
          }
          if (errorNoValue) {
            errorNoValue.remove();
          }
          if (isRigthCard) {
            this.renderNotification('correct-number', 'Номер карты может быть верным');
          } else {
            this.renderNotification('error-no-value', 'Номер карты неверный');
          }
        }
        
        console.log(ter);
      }
    })
  };

  renderNotification(classN, text) {
    const correctCard = document.createElement('div');
    correctCard.classList.add(classN);
    correctCard.textContent = text;
    this.form.append(correctCard);
  };

};
