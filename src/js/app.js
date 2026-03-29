import RenderHTML from './render.js';

const container = document.querySelector('.container');

const cardClasses = [['Visa', 'card-visa'], 
      ['Мир', 'card-mir'], ['American Express', 'card-amex'], 
      ['Mastercard', 'card-master-card'], ['Discover Card', 'card-discover'], 
      ['JCB', 'card-jcb'], ['Maestro Card', 'card-maestro'], 
      ['UnionPay', 'card-union-pay'], ['Universal Air Travel Plan', 'card-uatp']];

const render = new RenderHTML(container);
render.renderForm(cardClasses);
