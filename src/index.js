'use strict';
import './styles/scss.scss';

function tarifHashLoading() {
    let loc = window.location.hash;
    if(loc) {
        loc = loc.replace(/#/g, '');
        changeTarifList(document.querySelector(`a[data-category="${loc}"]`));
    }
}

function changeTarifList(selector) {

    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');
    const tarifCards = document.querySelectorAll('.tarif__list--card');

    console.log('change');

    tarifSelectors.forEach(elem => {
        if (elem.classList.contains('checked-member')) {
            elem.classList.remove('checked-member');
            elem.firstElementChild.classList.remove('checked--after');
        }
    });
    selector.classList.add('checked-member');
    selector.firstElementChild.classList.add('checked--after');
    tarifCards.forEach(card => {
        if (card.dataset.category.indexOf(selector.dataset.category) != -1
            && card.classList.contains('hide')) {
                card.classList.remove('hide')
        } else if (card.dataset.category.indexOf(selector.dataset.category) == -1 && !card.classList.contains('hide')) {
            card.classList.add('hide');
        }
    });
}

function tarifList() {
    
    const tarifSelectors = document.querySelectorAll('.tarif__selectors--member');
    

    tarifSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            changeTarifList(selector);
        });
    });
}

function modal() {
    const btns = document.querySelectorAll('.card__button');
    const modal = document.querySelector('.modal');
    const modalWindow = document.querySelector('#modal__window');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modal.style.height = window.getComputedStyle(document.body).height;
            modal.classList.remove('hide');
            modalWindow.style.top = `${e.pageY - e.clientY + 100}px`
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal){
            close();
        }
    });

    function close() {
        modal.classList.add('hide');
    }
}

tarifList();
modal();
tarifHashLoading();