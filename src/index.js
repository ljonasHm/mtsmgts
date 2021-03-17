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

function modal(btnSelector, modalSelector, windowSelector) {
    const btns = document.querySelectorAll(btnSelector);
    const modal = document.querySelector(modalSelector);
    const modalWindow = document.querySelector(windowSelector);

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

function showChannels(category, basic) {
    const channels = document.querySelectorAll('.channels__list--member');
    
    channels.forEach(channel => {
        if (!channel.classList.contains('hide')) {
            channel.classList.add('hide');
        }
        if (basic) {
            if (channel.dataset.category === category) {
                channel.classList.remove('hide');
            }
        } else {
            if (channel.dataset.category === category && channel.dataset.pack != 'basic') {
                channel.classList.remove('hide');
            } 
        }
    })
}

function channelsList () {
    const select = document.querySelector('.channels__select');
    const packButton = document.querySelectorAll('.channels__packs--member');
    let basic = false;

    select.addEventListener('change', () => {
        showChannels(select.value, basic);
    });

    packButton.forEach(pack => {
        pack.addEventListener('click', () => {
            packButton.forEach(elem => {
                elem.classList.remove('checked-member');
                elem.firstElementChild.classList.remove('checked--after');
            });
            pack.classList.add('checked-member');
            pack.firstElementChild.classList.add('checked--after');
            if (pack.dataset.pack === 'basic') {
                basic = true;
                showChannels(select.value, basic);
            } else {
                basic = false;
                showChannels(select.value, basic);
            }
        });
    });
}

function form() {
    const formButtons = document.querySelectorAll('.form__button');
    formButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const dataForSend = Object.fromEntries((new FormData(button.parentElement)).entries());
            if (dataForSend.name != '' && dataForSend.telephone != '') {
                $.ajax({
                    url: "send.php",
                    type: "POST",
                    data: ({
                        name: dataForSend.name,
                        tel: dataForSend.telephone,
                        street: dataForSend.street,
                        house: dataForSend.house,
                        housing: dataForSend.housing
                    }),
                    dataType: "html",
                    success: function() {
                        button.parentElement.reset();
                        button.parentElement.lastElementChild.classList.remove('hide');
                        button.parentElement.lastElementChild.classList.remove('failure');
                        button.parentElement.lastElementChild.classList.add('success');
                        button.parentElement.lastElementChild.innerHTML = 'Заявка успешно отправлена';
                    },
                    error: function() {
                        button.parentElement.reset();
                        button.parentElement.lastElementChild.classList.remove('hide');
                        button.parentElement.lastElementChild.classList.remove('success');
                        button.parentElement.lastElementChild.classList.add('failure');
                        button.parentElement.lastElementChild.innerHTML = 'Произошла ошибка';
                    },
                })
            } else {
                button.parentElement.lastElementChild.classList.remove('hide');
                button.parentElement.lastElementChild.classList.remove('success');
                button.parentElement.lastElementChild.classList.add('failure');
                button.parentElement.lastElementChild.innerHTML = 'Заполните поля "Имя" и "Телефон"';
            }
        })
    });
}

tarifList();
modal('.card__button', '#form', '#modal__window');
modal('.channels-tag', '#channels', '#modal__channels');
tarifHashLoading();
channelsList();
form();