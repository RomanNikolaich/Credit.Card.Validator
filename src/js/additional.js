export function renderOneCard(cardClass, cardData){
    const card = document.createElement('div');
    card.classList.add('card', cardClass);
    card.dataset.name = cardData;
    const dark = document.createElement('div');
    dark.classList.add('card-dark');
    card.append(dark);

    return card;
};

export function renderCardBox(cardClasses){
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    for (let [cardClass, cardData] of cardClasses) {
      let card = renderOneCard(cardClass, cardData);
      cardBox.append(card);
    }

    return cardBox;
};
