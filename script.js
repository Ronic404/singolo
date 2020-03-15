window.onload = function() {
    addHeaderNavigationClickHandler();
    addPhoneButtonClickHandler();
    addPortfolioTagsClickHandler();
    addPortfolioImagesClickHandler();
    addContactsFormSendHandler();
    addSliderClickHandler();
}

const addHeaderNavigationClickHandler = () => {
    document.querySelector('.header .navigation').addEventListener('click', (item) => {
        if(item.target.classList.contains('navigation__item')) {
            document.querySelectorAll('.header .navigation__item').forEach(item => {
                item.classList.remove('navigation__item_active');
            });
            item.target.classList.add('navigation__item_active');
        }
    })
}

const addPhoneButtonClickHandler = () => {
    document.querySelector('.button-verphone').addEventListener('click', () => {
        document.querySelector('.black-screen__verphone').classList.toggle('hidden');
    });

    document.querySelector('.button-gorphone').addEventListener('click', () => {
        document.querySelector('.black-screen__gorphone').classList.toggle('hidden');
    });
}

const addPortfolioTagsClickHandler = () => {
    document.querySelector('.portfolio__list').addEventListener('click', (item) => {
        if(item.target.classList.contains('portfolio__item')) {
            document.querySelectorAll('.portfolio__item').forEach(item => {
                item.classList.remove('portfolio__item_active');
            });
            item.target.classList.add('portfolio__item_active');
            document.querySelector('.portfolio__images').appendChild(document.querySelector('.portfolio__image'))
        }
    })
}

const addPortfolioImagesClickHandler = () => {
    document.querySelector('.portfolio__images').addEventListener('click', (image) => {
        if(image.target.classList.contains('portfolio__image')) {
            document.querySelectorAll('.portfolio__image').forEach(image => {
                if(image.classList.contains('portfolio__image_active')) image.classList.remove('portfolio__image_active');
            });
            image.target.classList.toggle('portfolio__image_active');
        }
    })
}

const addContactsFormSendHandler = () => {
    document.querySelector('.form button').addEventListener('click', (event) => {
        if(document.querySelector('#name').value !== '' && document.querySelector('#email').value !== '') {
            event.preventDefault();

            const subject = document.querySelector('#subject').value.toString();
            const describe = document.querySelector('#describe').value.toString();
            let text_1 = document.querySelector('.text-1');
            let text_2 = document.querySelector('.text-2');
            let text_3 = document.querySelector('.text-3');

            document.querySelector('.message-block').classList.remove('message-block-hidden');
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "15px";
            text_1.innerText = 'Письмо отправлено';
            (subject) ? text_2.innerText = `Тема: ${subject}` : text_2.innerText = 'Без темы';
            (describe) ? text_3.innerText = `Описание: ${describe}` : text_3.innerText = 'Без описания';
        }   
    });

    document.querySelector('#close-button').addEventListener('click', () => {
        document.querySelector('.message-block').classList.add('message-block-hidden');
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    })
}

const addSliderClickHandler = () => {
    let items = document.querySelectorAll('.slider-block__item');
    let currentItem = 0;
    let isEnabled = true;

    const changeCurrentItem = (n) => {
        currentItem = (n + items.length) % items.length; 
    }

    const hideItem = function(direction) {
        isEnabled = false;
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('slider-active', direction);
        });
    }

    const showItem = function(direction) {
        items[currentItem].classList.add('next', direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('next', direction);
            this.classList.add('slider-active');
            isEnabled = true;
        });
    }

    const previousItem = (n) => {
        hideItem('to-right');
        changeCurrentItem(n - 1);
        showItem('from-left');
    }

    const nextItem = (n) => {
        hideItem('to-left');
        changeCurrentItem(n + 1);
        showItem('from-right');
    }

    document.querySelector('.control-left').addEventListener('click', () => {
        if(isEnabled) {
            previousItem(currentItem);
        }
    });

    document.querySelector('.control-right').addEventListener('click', () => {
        if(isEnabled) {
            nextItem(currentItem);
        }
    });
}