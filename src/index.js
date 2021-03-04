'use strict';
import './styles/scss.scss';

function tarifList() {
    
    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');
    const tarifCards = document.querySelectorAll('.tarif__list--card');

    tarifSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            tarifSelectors.forEach(elem => {
                if (elem.classList.contains('checked-member')) {
                    elem.classList.remove('checked-member');
                }
            });
            selector.classList.add('checked-member');
            tarifCards.forEach(card => {
                if (selector.dataset.category.indexOf(card.dataset.category) != -1
                    && card.classList.contains('hide')) {
                        card.classList.remove('hide')
                } else if (!card.classList.contains('hide')) {
                    card.classList.add('hide');
                }
            });
        });
    });
}

tarifList();