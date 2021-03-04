'use strict';
import './styles/scss.scss';

function tarifList() {
    
    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');

    tarifSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            tarifSelectors.forEach(elem => {
                if (elem.classList.contains('checked-member')) {
                    elem.classList.remove('checked-member');
                }
            });
            selector.classList.add('checked-member');
        });
    });
}

tarifList();