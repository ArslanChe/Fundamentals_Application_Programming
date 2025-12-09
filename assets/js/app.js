const siteData = {
    title: 'Marvel Hub',
    logo: '../imgs/films/marvel_logo.png',
    pages: [
        { id: 'index', name: 'Главная', href: 'index.html' },
        { id: 'characters', name: 'Персонажи', href: 'index.html?page=characters' },
        { id: 'films', name: 'Хронология', href: 'index.html?page=films' },
        { id: 'phase1', name: '1 фаза', href: 'index.html?page=films#phase1' },
        { id: 'forms', name: 'Формы', href: 'index.html?page=forms' }
    ],
    externalLink: { name: 'Marvel', href: 'https://www.marvel.com/movies' },
    characters: [
        { name: 'Железный человек', image: '../imgs/character/tony.jpg', realName: 'Тони Старк', profile: 'https://www.marvel.com/characters/iron-man-tony-stark' },
        { name: 'Капитан Америка', image: '../imgs/character/steve.jpg', realName: 'Стив Роджерс', profile: 'https://www.marvel.com/characters/captain-america-steve-rogers' },
        { name: 'Чёрная Вдова', image: '../imgs/character/Natasha.jpg', realName: 'Наташа Романофф', profile: 'https://www.marvel.com/characters/black-widow-natasha-romanoff' },
        { name: 'Тор', image: '../imgs/character/Тор.jpg', realName: 'Тор Одинсон', profile: 'https://www.marvel.com/characters/thor-thor-odinson' },
        { name: 'Человек-паук', image: '../imgs/character/Peter.jpeg', realName: 'Питер Паркер', profile: 'https://www.marvel.com/characters/spider-man-peter-parker' },
        { name: 'Халк', image: '../imgs/character/Hulk.jpg', realName: 'Брюс Бэннер', profile: 'https://www.marvel.com/characters/hulk-bruce-banner' },
        { name: 'Соколиный Глаз', image: '../imgs/character/Eye.webp', realName: 'Клинт Бартон', profile: 'https://www.marvel.com/characters/hawkeye-clint-barton' },
        { name: 'Чёрная Пантера', image: '../imgs/character/Тчала.jpg', realName: 'Т\'Чалла', profile: 'https://www.marvel.com/characters/black-panther-t-challa' },
        { name: 'Доктор Стрэндж', image: '../imgs/character/Steven.jpeg', realName: 'Стивен Стрэндж', profile: 'https://www.marvel.com/characters/doctor-strange-stephen-strange' },
        { name: 'Капитан Марвел', image: '../imgs/character/Marvel.webp', realName: 'Кэрол Дэнверс', profile: 'https://www.marvel.com/characters/captain-marvel-carol-danvers' },
        { name: 'Алая Ведьма', image: '../imgs/character/Ванда.jpg', realName: 'Ванда Максимофф', profile: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff' },
        { name: 'Вижн', image: '../imgs/character/Вижн.jpg', realName: 'Вижн', profile: 'https://www.marvel.com/characters/vision' }
    ],
    phases: [
        {
            id: 'phase1',
            name: '1 фаза',
            films: [
                { title: 'Железный человек', image: '../imgs/films/iron_man_1.webp', link: 'https://www.kinopoisk.ru/film/61237/' },
                { title: 'Невероятный Халк', image: '../imgs/films/hulk.webp', link: 'https://www.kinopoisk.ru/film/255380/' },
                { title: 'Тор', image: '../imgs/films/Thor_1.webp', link: 'https://www.kinopoisk.ru/film/258941/' },
                { title: 'Первый мститель', image: '../imgs/films/Cap_America_1.webp', link: 'https://www.kinopoisk.ru/film/160946/' },
                { title: 'Мстители', image: '../imgs/films/Avengers_1.webp', link: 'https://www.kinopoisk.ru/film/263531/' }
            ]
        },
        {
            id: 'phase2',
            name: '2 фаза',
            films: [
                { title: 'Железный человек 2', image: '../imgs/films/iron_man_2.webp', link: 'https://www.kinopoisk.ru/film/411924/' },
                { title: 'Тор 2: Царство тьмы', image: '../imgs/films/Thor_2.webp', link: 'https://www.kinopoisk.ru/film/595938/' },
                { title: 'Первый мститель: Другая война', image: '../imgs/films/Cap_America_2.webp', link: 'https://www.kinopoisk.ru/film/676266/' },
                { title: 'Стражи Галактики', image: '../imgs/films/Guardians_1.webp', link: 'https://www.kinopoisk.ru/film/689066/' },
                { title: 'Мстители: Эра Альтрона', image: '../imgs/films/Avengers_2.webp', link: 'https://www.kinopoisk.ru/film/679830/' },
                { title: 'Человек-муравей', image: '../imgs/films/ant_man_1.webp', link: 'https://www.kinopoisk.ru/film/195496/' }
            ]
        },
        {
            id: 'phase3',
            name: '3 фаза',
            films: [
                { title: 'Первый мститель: Противостояние', image: '../imgs/films/Cap_America_3.webp', link: 'https://www.kinopoisk.ru/film/822708/' },
                { title: 'Доктор Стрэндж', image: '../imgs/films/Strange_1.webp', link: 'https://www.kinopoisk.ru/film/409600/' },
                { title: 'Стражи Галактики. Часть 2', image: '../imgs/films/Guardians_2.webp', link: 'https://www.kinopoisk.ru/film/841263/' },
                { title: 'Человек-паук: Возвращение домой', image: '../imgs/films/Spider-Man_1.webp', link: 'https://www.kinopoisk.ru/film/690593/' },
                { title: 'Тор: Рагнарёк', image: '../imgs/films/Thor_3.webp', link: 'https://www.kinopoisk.ru/film/822709/' },
                { title: 'Чёрная Пантера', image: '../imgs/films/Panter.webp', link: 'https://www.kinopoisk.ru/film/623250/' },
                { title: 'Мстители: Война бесконечности', image: '../imgs/films/Avengers_3.webp', link: 'https://www.kinopoisk.ru/film/843649/' },
                { title: 'Человек-муравей и Оса', image: '../imgs/films/Ant_man_Wasp.webp', link: 'https://www.kinopoisk.ru/film/935940/' },
                { title: 'Капитан Марвел', image: '../imgs/films/Cap_Marvel.webp', link: 'https://www.kinopoisk.ru/film/843859/' },
                { title: 'Мстители: Финал', image: '../imgs/films/Avengers_4.webp', link: 'https://www.kinopoisk.ru/film/843650/' },
                { title: 'Человек-паук: Вдали от дома', image: '../imgs/films/Spider-Man_2.webp', link: 'https://www.kinopoisk.ru/film/1008445/' }
            ]
        },
        {
            id: 'phase4',
            name: '4 фаза',
            films: [
                { title: 'Чёрная Вдова', image: '../imgs/films/Widow.webp', link: 'https://www.kinopoisk.ru/film/823956/' },
                { title: 'Шан-Чи и легенда десяти колец', image: '../imgs/films/Shan_Chi.webp', link: 'https://www.kinopoisk.ru/film/1219149/' },
                { title: 'Вечные', image: '../imgs/films/Eternals.webp', link: 'https://www.kinopoisk.ru/film/1198811/' },
                { title: 'Человек-паук: Нет пути домой', image: '../imgs/films/Spider-Man_3.webp', link: 'https://www.kinopoisk.ru/film/1309570/' },
                { title: 'Доктор Стрэндж: В мультивселенной безумия', image: '../imgs/films/Strange_2.webp', link: 'https://www.kinopoisk.ru/film/1219909/' },
                { title: 'Тор: Любовь и гром', image: '../imgs/films/Thor_4.jpg', link: 'https://www.kinopoisk.ru/film/1282688/' },
                { title: 'Чёрная Пантера: Ваканда навеки', image: '../imgs/films/Panter_2.webp', link: 'https://www.kinopoisk.ru/film/1199773/' }
            ]
        },
        {
            id: 'phase5',
            name: '5 фаза',
            films: [
                { title: 'Человек-муравей и Оса: Квантомания', image: '../imgs/films/Ant_man_3.webp', link: 'https://www.kinopoisk.ru/film/1318868/' },
                { title: 'Стражи Галактики. Часть 3', image: '../imgs/films/Guardians_3.jpg', link: 'https://www.kinopoisk.ru/film/1044280/' },
                { title: 'Капитан Марвел 2 (Марвелы)', image: '../imgs/films/Cap_marvel_2.webp', link: 'https://www.kinopoisk.ru/film/1287544/' },
                { title: 'Капитан Америка: Новый мир', image: '../imgs/films/Cap_America_4.webp', link: 'https://www.kinopoisk.ru/film/4443920/' }
            ]
        },
        {
            id: 'phase6',
            name: '6 фаза',
            films: []
        }
    ]
};

const createElement = (tag, className = '', content = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) {
        if (typeof content === 'string') {
            el.innerHTML = content;
        } else {
            el.appendChild(content);
        }
    }
    return el;
};

const createLink = (href, text, className = '', target = '') => {
    const link = createElement('a', className, text);
    link.href = href;
    if (target) link.target = target;
    if (target === '_blank') link.rel = 'noopener';
    return link;
};

const generateNavigation = (currentPage) => {
    const header = createElement('header', 'site-header');
    const container = createElement('div', 'container nav');
    
    const brand = createLink('index.html', '', 'brand');
    const logo = createElement('img');
    logo.src = siteData.logo;
    logo.alt = 'Marvel';
    logo.width = 100;
    brand.appendChild(logo);
    const brandText = createElement('span', '', siteData.title);
    brand.appendChild(brandText);
    brand.setAttribute('aria-label', 'На главную');
    
    const nav = createElement('nav', 'nav-links');
    
    siteData.pages.forEach(page => {
        const link = createLink(page.href, page.name);
        link.setAttribute('data-href', page.href);
        if (currentPage === page.id || (currentPage === 'films' && page.id === 'phase1')) {
            link.classList.add('active');
        }
        nav.appendChild(link);
    });
    
    const externalLink = createLink(siteData.externalLink.href, siteData.externalLink.name, '', '_blank');
    nav.appendChild(externalLink);
    
    container.appendChild(brand);
    container.appendChild(nav);
    header.appendChild(container);
    
    return header;
};

const generateFooter = () => {
    const footer = createElement('footer', 'site-footer');
    const container = createElement('div', 'container');
    container.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:10px;';
    
    const text = createElement('span', '', siteData.title);
    container.appendChild(text);
    
    const logoLink = createLink('../imgs/films/marvel_logo.webp', '', '', '_blank');
    const logoImg = createElement('img');
    logoImg.src = '../imgs/films/marvel_logo.webp';
    logoImg.alt = 'Marvel постер';
    logoImg.width = 100;
    logoImg.height = 67;
    logoLink.appendChild(logoImg);
    container.appendChild(logoLink);
    
    footer.appendChild(container);
    return footer;
};

const generateHomePage = () => {
    const main = createElement('main');
    
    const hero = createElement('section', 'hero');
    const heroContainer = createElement('div', 'container');
    heroContainer.appendChild(createElement('h1', '', 'Киновселенная Marvel (MCU)'));
    heroContainer.appendChild(createElement('p', '', 'Киновселенная Marvel — медиафраншиза и вымышленная вселенная, в которую входят фильмы и сериалы о супергероях по мотивам комиксов Marvel. Вселенная разделена на фазы, каждая из которых формирует крупную нарративную арку: от появления Железного человека до мультивселенной.'));
    hero.appendChild(heroContainer);
    main.appendChild(hero);
    
    const about = createElement('section');
    about.id = 'about';
    const aboutContainer = createElement('div', 'container');
    const aboutCard = createElement('div', 'card');
    aboutCard.appendChild(createElement('h2', '', 'О вселенной'));
    aboutCard.appendChild(createElement('p', '', 'Киновселенная Marvel — американская медиафраншиза, вымышленная общая вселенная и серия супергеройских фильмов, основанная на комиксах издательства Marvel Comics и разработанная кинокомпанией Marvel Studios. Во франшизу также входят сериалы, специальные выпуски, короткометражные фильмы, веб-сериалы и книжная продукция. Как и оригинальная вселенная Marvel Comics, киновселенная была создана путём:'));
    
    const ul = createElement('ul');
    ['Связанные истории и персонажи', 'Фазы развития общей сюжетной арки', 'Кросс‑медиа: сериалы, фильмы, короткометражки'].forEach(item => {
        const li = createElement('li', '', item);
        ul.appendChild(li);
    });
    aboutCard.appendChild(ul);
    aboutContainer.appendChild(aboutCard);
    about.appendChild(aboutContainer);
    main.appendChild(about);
    
    const phases = createElement('section');
    phases.id = 'phases';
    const phasesContainer = createElement('div', 'container');
    const phasesCard = createElement('div', 'card');
    phasesCard.appendChild(createElement('h2', '', 'Фазы MCU'));
    
    const ol = createElement('ol');
    [
        'Фаза 1: Становление героев и «Мстители»',
        'Фаза 2: Расширение вселенной и новые союзы',
        'Фаза 3: Кульминация — «Война бесконечности» и «Финал»',
        'Фаза 4: Начало мультивселенной',
        'Фаза 5: Продолжение мультивселенной и новые команды',
        'Фаза 6: Завершение саги Мультивселенной'
    ].forEach(item => {
        const li = createElement('li', '', item);
        ol.appendChild(li);
    });
    phasesCard.appendChild(ol);
    
    const linkToFilms = createLink('index.html?page=films', '«Хронология»');
    phasesCard.appendChild(createElement('p', '', 'См. подробнее на странице '));
    phasesCard.lastChild.appendChild(linkToFilms);
    phasesCard.lastChild.appendChild(document.createTextNode('.'));
    
    phasesContainer.appendChild(phasesCard);
    phases.appendChild(phasesContainer);
    main.appendChild(phases);
    
    return main;
};

const generateCharactersPage = () => {
    const main = createElement('main', 'container');
    main.appendChild(createElement('h1', '', 'Персонажи Marvel'));
    
    const table = createElement('table', 'table-bg');
    const thead = createElement('thead');
    const headerRow = createElement('tr');
    ['Персонаж', 'Изображение', 'Имя во вселенной', 'Ссылки'].forEach(thText => {
        const th = createElement('th', '', thText);
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = createElement('tbody');
    siteData.characters.forEach(char => {
        const tr = createElement('tr');
        
        const td1 = createElement('td', '', char.name);
        tr.appendChild(td1);
        
        const td2 = createElement('td');
        const img = createElement('img', 'thumb');
        img.src = char.image;
        img.alt = char.name;
        td2.appendChild(img);
        tr.appendChild(td2);
        
        const td3 = createElement('td', '', char.realName);
        tr.appendChild(td3);
        
        const td4 = createElement('td');
        const profileLink = createLink(char.profile, 'Профиль', '', '_blank');
        td4.appendChild(profileLink);
        tr.appendChild(td4);
        
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    main.appendChild(table);
    
    return main;
};

const generateFilmsPage = () => {
    const main = createElement('main', 'container');
    main.appendChild(createElement('h1', '', 'Хронология по фазам MCU'));
    main.lastChild.id = 'top';
    
    const inpageNav = createElement('div', 'inpage-nav');
    siteData.phases.forEach(phase => {
        const link = createLink(`#${phase.id}`, `${phase.name}`);
        inpageNav.appendChild(link);
    });
    main.appendChild(inpageNav);
    
    siteData.phases.forEach(phase => {
        const section = createElement('section', 'card');
        section.id = phase.id;
        section.appendChild(createElement('h2', '', phase.name));
        
        if (phase.films.length === 0) {
            const p = createElement('p', '', 'Фаза находится еще в разработке');
            section.appendChild(p);
        } else {
            const grid = createElement('div', 'grid');
            phase.films.forEach(film => {
                const col = createElement('div', 'col-4');
                const figure = createElement('figure');
                figure.style.textAlign = 'center';
                
                const link = createLink(film.link, '', '', '_blank');
                const img = createElement('img');
                img.src = film.image;
                img.alt = film.title;
                img.width = 300;
                link.appendChild(img);
                const figcaption = createElement('figcaption', '', film.title);
                link.appendChild(figcaption);
                figure.appendChild(link);
                
                col.appendChild(figure);
                grid.appendChild(col);
            });
            section.appendChild(grid);
        }
        
        main.appendChild(section);
    });
    
    return main;
};

const generateFormsPage = () => {
    const main = createElement('main', 'container');
    main.appendChild(createElement('h1', '', 'Формы Marvel Hub'));
    
    const grid = createElement('div', 'grid');
    
    // Контактная форма
    const contactFormSection = createElement('section', 'col-6 card');
    contactFormSection.appendChild(createElement('h2', '', 'Контактная форма'));
    
    const contactForm = createElement('form');
    contactForm.action = 'https://httpbin.org/post';
    contactForm.method = 'post';
    
    const fields = [
        { label: 'Фамилия', type: 'text', id: 'lastName', name: 'lastName', value: 'Иванов', required: true },
        { label: 'Имя', type: 'text', id: 'firstName', name: 'firstName', value: 'Иван', required: true },
        { label: 'Группа', type: 'text', id: 'group', name: 'group', value: 'ИС-23-4', placeholder: 'ИС-23-4' },
        { label: 'Мобильный телефон', type: 'tel', id: 'phone', name: 'phone', value: '+7 (999) 123-45-67', placeholder: '+7 (999) 123-45-67' },
        { label: 'Электронная почта', type: 'email', id: 'email', name: 'email', value: 'example@mail.com', placeholder: 'example@mail.com' },
        { label: 'Дата отправки сообщения', type: 'date', id: 'sentDate', name: 'sentDate', value: '2024-01-15' }
    ];
    
    fields.forEach(field => {
        const fieldDiv = createElement('div', 'field');
        const label = createElement('label', '', field.label);
        label.setAttribute('for', field.id);
        fieldDiv.appendChild(label);
        
        const input = createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;
        if (field.value) input.value = field.value;
        if (field.placeholder) input.placeholder = field.placeholder;
        if (field.required) input.required = true;
        fieldDiv.appendChild(input);
        
        contactForm.appendChild(fieldDiv);
    });
    
    const hiddenInput = createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'formType';
    hiddenInput.value = 'contact';
    contactForm.appendChild(hiddenInput);
    
    const submitBtn = createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Отправить контактные данные';
    contactForm.appendChild(submitBtn);
    
    contactFormSection.appendChild(contactForm);
    grid.appendChild(contactFormSection);
    
    const marvelFormSection = createElement('section', 'col-6 card');
    marvelFormSection.appendChild(createElement('h2', '', 'Marvel-форма'));
    
    const marvelForm = createElement('form');
    marvelForm.action = 'https://httpbin.org/post';
    marvelForm.method = 'post';
    
    const aliasField = createElement('div', 'field');
    const aliasLabel = createElement('label', '', 'Кем бы ты был в КВМ (псевдоним)');
    aliasLabel.setAttribute('for', 'alias');
    aliasField.appendChild(aliasLabel);
    const aliasInput = createElement('input');
    aliasInput.type = 'text';
    aliasInput.id = 'alias';
    aliasInput.name = 'alias';
    aliasInput.value = 'Железный Стажёр';
    aliasInput.placeholder = 'Железный Стажёр';
    aliasInput.required = true;
    aliasField.appendChild(aliasInput);
    marvelForm.appendChild(aliasField);
    
    const powersField = createElement('div', 'field');
    const powersLabel = createElement('label', '', 'Твои суперспособности');
    powersLabel.setAttribute('for', 'powers');
    powersField.appendChild(powersLabel);
    const powersTextarea = createElement('textarea');
    powersTextarea.id = 'powers';
    powersTextarea.name = 'powers';
    powersTextarea.rows = 3;
    powersTextarea.placeholder = 'Например: управление временем, полёт...';
    powersTextarea.textContent = 'Управление временем, полёт, суперсила';
    powersField.appendChild(powersTextarea);
    marvelForm.appendChild(powersField);
    
    const characterField = createElement('div', 'field');
    const characterLabel = createElement('label', '', 'Любимый персонаж');
    characterLabel.setAttribute('for', 'character');
    characterField.appendChild(characterLabel);
    const characterSelect = createElement('select');
    characterSelect.id = 'character';
    characterSelect.name = 'character';
    const characters = [
        { value: 'IronMan', text: 'Железный человек', selected: true },
        { value: 'SpiderMan', text: 'Человек-паук' },
        { value: 'Thor', text: 'Тор' },
        { value: 'CaptainAmerica', text: 'Капитан Америка' },
        { value: 'DoctorStrange', text: 'Доктор Стрэндж' },
        { value: 'BlackPanther', text: 'Чёрная Пантера' },
        { value: 'ScarletWitch', text: 'Алая Ведьма' }
    ];
    characters.forEach(char => {
        const option = createElement('option', '', char.text);
        option.value = char.value;
        if (char.selected) option.selected = true;
        characterSelect.appendChild(option);
    });
    characterField.appendChild(characterSelect);
    marvelForm.appendChild(characterField);
    
    const ratingField = createElement('div', 'field');
    const ratingLabel = createElement('label', '', 'Рейтинг любимого фильма (1-10)');
    ratingLabel.setAttribute('for', 'rating');
    ratingField.appendChild(ratingLabel);
    const ratingInput = createElement('input');
    ratingInput.type = 'number';
    ratingInput.id = 'rating';
    ratingInput.name = 'filmRating';
    ratingInput.value = '9';
    ratingInput.min = '1';
    ratingInput.max = '10';
    ratingInput.required = true;
    ratingField.appendChild(ratingInput);
    marvelForm.appendChild(ratingField);
    
    const phaseField = createElement('div', 'field');
    const phaseLabel = createElement('label', '', 'Любимая фаза MCU');
    phaseField.appendChild(phaseLabel);
    const radioGroup = createElement('div', 'radio-group');
    const phases = [
        { value: 'phase1', text: 'Фаза 1', checked: true },
        { value: 'phase2', text: 'Фаза 2' },
        { value: 'phase3', text: 'Фаза 3' },
        { value: 'phase4', text: 'Фаза 4' },
        { value: 'phase5', text: 'Фаза 5' }
    ];
    phases.forEach(phase => {
        const radioLabel = createElement('label', '');
        const radioInput = createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'favoritePhase';
        radioInput.value = phase.value;
        if (phase.checked) radioInput.checked = true;
        radioLabel.appendChild(radioInput);
        radioLabel.appendChild(document.createTextNode(phase.text));
        radioGroup.appendChild(radioLabel);
    });
    phaseField.appendChild(radioGroup);
    marvelForm.appendChild(phaseField);
    
    const notifyField = createElement('div', 'field');
    const notifyLabel = createElement('label', '');
    const notifyCheckbox = createElement('input');
    notifyCheckbox.type = 'checkbox';
    notifyCheckbox.name = 'notify';
    notifyCheckbox.value = 'yes';
    notifyCheckbox.checked = true;
    notifyLabel.appendChild(notifyCheckbox);
    notifyLabel.appendChild(document.createTextNode(' Уведомить меня по почте'));
    notifyField.appendChild(notifyLabel);
    marvelForm.appendChild(notifyField);
    
    const hiddenInput2 = createElement('input');
    hiddenInput2.type = 'hidden';
    hiddenInput2.name = 'formType';
    hiddenInput2.value = 'marvel_identity';
    marvelForm.appendChild(hiddenInput2);
    
    const submitBtn2 = createElement('input');
    submitBtn2.type = 'submit';
    submitBtn2.value = 'Отправить анкету';
    marvelForm.appendChild(submitBtn2);
    
    marvelFormSection.appendChild(marvelForm);
    grid.appendChild(marvelFormSection);
    
    main.appendChild(grid);
    return main;
};

const initToTopButton = () => {
    const toTopBtn = createElement('button', '', '↑');
    toTopBtn.id = 'toTopBtn';
    toTopBtn.title = 'Наверх';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            toTopBtn.style.display = 'block';
        } else {
            toTopBtn.style.display = 'none';
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    return toTopBtn;
};

const initApp = () => {
    const app = document.getElementById('app');
    if (!app) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page') || 'index';
    
    app.appendChild(generateNavigation(currentPage));
    
    let main;
    switch(currentPage) {
        case 'characters':
            main = generateCharactersPage();
            break;
        case 'films':
            main = generateFilmsPage();
            break;
        case 'forms':
            main = generateFormsPage();
            break;
        default:
            main = generateHomePage();
    }
    
    app.appendChild(main);
    app.appendChild(generateFooter());
    
    const toTopBtn = initToTopButton();
    app.appendChild(toTopBtn);
    
    const pageTitles = {
        'index': 'Marvel Cinematic Universe — Главная',
        'characters': 'Персонажи Marvel — Таблица',
        'films': 'Хронология фаз MCU',
        'forms': 'Формы — Marvel Hub'
    };
    document.title = pageTitles[currentPage] || pageTitles['index'];
    
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

