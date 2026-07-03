const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.main-nav a');
const scrollTopButtons = document.querySelectorAll('[data-scroll-top]');
const floatingTopButton = document.querySelector('.back-to-top');

menuToggle?.addEventListener('click', () => {
  header?.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => header?.classList.remove('nav-open'));
});

scrollTopButtons.forEach((button) => {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (!floatingTopButton) return;
  floatingTopButton.classList.toggle('is-visible', window.scrollY > 500);
});

const items = document.querySelectorAll('.accordion-item');
items.forEach((item) => {
  item.addEventListener('click', () => {
    const panel = item.nextElementSibling;
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion-item').forEach((button) => button.classList.remove('is-open'));
    document.querySelectorAll('.accordion-panel').forEach((p) => p.classList.remove('open'));

    if (!isOpen) {
      item.classList.add('is-open');
      panel?.classList.add('open');
    }
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Спасибо! Форма подготовлена. Для реального сайта подключите отправку заявки на email, CRM или Telegram.');
  });
});


// Language switcher RU / UA
const translations = {
  ru: {
    brand: 'Секреты памяти',
    nav_about: 'О курсе',
    nav_program: 'Программа',
    nav_formats: 'Форматы',
    nav_reviews: 'Отзывы',
    nav_socials: 'Соцсети',
    nav_faq: 'FAQ',
    nav_contacts: 'Контакты',
    header_cta: 'Курсы',
    hero_eyebrow: 'Курс для школьников ESO и Bachillerato',
    hero_title: 'Секреты памяти для <span>учебы</span> и языков',
    hero_lead: 'Практический онлайн-курс, где ребенок освоит техники памяти и научится запоминать иностранные слова, даты, формулы, термины и тексты без зубрежки.',
    hero_btn_format: 'Смотреть форматы курса',
    hero_btn_question: 'Задать вопрос',
    hero_point_formats: 'Запись, группа или индивидуально',
    video_alex: 'Видео от Алексея',
    video_caption: 'О себе, формате курса и том, как проходят занятия',
    teacher_video_note: 'О себе, формате курса и том, как проходят занятия',
    watch_youtube: 'Смотреть на YouTube',
    mini_memory: 'Память',
    mini_focus: 'Концентрация',
    mini_texts: 'Работа с текстами',
    mini_confidence: 'Уверенность',
    floating_title: 'Учись легче',
    floating_text: 'Запоминай больше. Чувствуй уверенность.',
    about_title: 'Кому <span>подойдет</span> курс',
    about_lead: 'Курс для школьников ESO и Bachillerato, которым важно легче учить иностранные языки, лучше запоминать школьные темы и увереннее готовиться к урокам.',
    about_item_1: 'Сложно запоминать иностранные слова и правила',
    about_item_2: 'Путается в датах, формулах, терминах и определениях',
    about_item_3: 'Читает текст, но потом не может пересказать главное',
    about_note: 'Подходит для <strong>учебы, языков и подготовки к школе</strong>',
    program_badge: 'Программа курса',
    program_title: '<span class="program-title-accent">4 модуля</span>, которые учат запоминать',
    program_lead: '4 модуля, которые помогут ребенку запоминать легче и увереннее.',
    module1_label: 'Модуль 1',
    module1_subtitle: 'Базовые принципы запоминания',
    module1_title: 'Как работает память',
    module1_text: 'Разберем, почему информация быстро забывается и как запоминать через образы, ассоциации и связи, а не через механическую зубрежку.',
    module2_label: 'Модуль 2',
    module2_subtitle: 'Как запоминать сложную информацию',
    module2_title: 'Слова, термины и определения',
    module2_text: 'Ребенок научится запоминать иностранные слова, школьные термины, названия, правила и определения с помощью понятных техник памяти.',
    module3_label: 'Модуль 3',
    module3_subtitle: 'Запоминание без путаницы',
    module3_title: 'Числа, даты и формулы',
    module3_text: 'Разберем, как запоминать даты, числа, формулы и сложные обозначения через логику, образы и опорные связи.',
    module4_label: 'Модуль 4',
    module4_subtitle: 'Применение техник в учебе',
    module4_title: 'Тексты, языки и школьные темы',
    module4_text: 'Потренируем, как использовать техники памяти для пересказа текстов, конспектов, домашних заданий, иностранных слов и подготовки к урокам.',
    teacher_title: 'Кто <span>ведет</span> курс',
    teacher_p1: '<strong>Алексей Бессонов</strong> - чемпион Украины по запоминанию, тренер по развитию памяти и эффективному обучению, рекордсмен Книги рекордов Украины, автор книг и создатель курсов “Суперпамять” и “Полиглот”.',
    teacher_p2: 'Алексей много лет помогает детям и взрослым развивать память, легче учить иностранные языки, лучше работать с информацией и применять техники запоминания в реальной учебе.',
    teacher_stat_1: '15+ лет',
    teacher_stat_1_text: 'опыта',
    teacher_stat_2: 'Автор',
    teacher_stat_2_text: 'курсов',
    teacher_stat_3: 'Практика',
    teacher_stat_3_text: 'для школьных предметов',
    pricing_title: 'Выберите <span>формат</span> обучения',
    pricing_lead: 'Три формата: самостоятельный, с поддержкой или персональный.',
    tag_self: 'Самостоятельно',
    price1_title: 'Курс в записи',
    price_all_course: 'за весь курс',
    price1_desc: 'Для занятий в удобном темпе.',
    price1_li1: '24 коротких видеоурока',
    price1_li2: 'практические задания',
    price1_li3: 'рабочая тетрадь',
    price1_li4: 'материалы курса',
    price1_li5: 'онлайн-встреча вопрос-ответ',
    price1_btn: 'Купить запись',
    recommended: 'Рекомендуемый формат',
    tag_support: 'С поддержкой',
    price2_title: 'Онлайн-курс в мини-группе',
    per_lesson: 'за занятие',
    per_course: 'за курс',
    price2_desc: 'Живые занятия, практика и обратная связь.',
    price2_meta1: 'Формат: онлайн, мини-группа',
    price2_meta2: 'Длительность занятия: до 90 минут',
    price2_li1: '8 онлайн-занятий',
    price2_li2: 'задания после встреч',
    price2_li3: 'ответы на вопросы',
    price2_li4: 'материалы для родителей',
    price2_btn: 'Записаться',
    tag_personal: 'Персонально',
    price3_title: 'Индивидуальная программа',
    per_program: 'за программу',
    price3_desc: 'Персональная работа под задачи ребенка, темп и школьные сложности.',
    price3_note: '+ входят материалы записи и мини-группы',
    price3_li1: 'диагностика и план занятий',
    price3_li2: 'работа с языками, текстами и формулами',
    price3_li3: 'персональные занятия с Алексеем',
    price3_li4: 'индивидуальные рекомендации родителям',
    price3_btn: 'Обсудить программу',
    reviews_title: '<span>Отзывы</span> родителей',
    reviews_lead: 'Посмотрите, как родители оценивают занятия по развитию памяти и обучению.',
    review_video: 'Видеоотзыв',
    review_name_elena: 'Алена',
    review_meta_elena: '',
    review_text_elena: 'Ребенку стало легче учить слова и увереннее отвечать в школе.',
    review_name_maria: 'Татьяна',
    review_meta_maria: '',
    review_text_maria: 'Понравилось, что на курсе много практики, а не только теория.',
    review_name_olga: 'Татьяна',
    review_meta_olga: '',
    review_text_olga: 'После курса сыну стало легче готовиться к контрольным и пересказывать тексты.',
    result_title: 'Что <span>изменится</span> после курса',
    result_lead: 'Ребенок учится не просто повторять, а понимать, как именно запоминать.',
    result1_title: 'Поймет систему',
    result1_text: 'Научится превращать сложную информацию в образы, связи и понятные подсказки.',
    result2_title: 'Быстрее слова и термины',
    result2_text: 'Разберет техники для языков, истории, биологии и других школьных предметов.',
    result3_title: 'Лучше работа с текстами',
    result3_text: 'Научится выделять главное, запоминать структуру текста и готовиться к пересказам.',
    result4_title: 'Больше уверенности',
    result4_text: 'Когда есть понятный способ учить, ребенку проще начинать задания и готовиться к проверкам.',
    social_title: 'Больше полезного <span>в соцсетях</span>',
    social_lead: 'Алексей делится приемами запоминания, примерами для учебы и материалами для родителей.',
    youtube_stats: '18.2 тыс. подписчиков · 256 видео',
    watch_video: 'Смотреть видео',
    youtube_text: 'Видео о том, как работает запоминание и почему техники помогают учиться легче.',
    telegram_meta: '3 618 подписчиков',
    telegram_card_title: 'Короткие советы, примеры и материалы',
    telegram_text: 'Удобно следить за новыми разборами, техниками и полезными материалами по обучению.',
    instagram_meta: '5 319 подписчиков',
    instagram_card_title: 'Живой формат и короткие идеи для учебы',
    instagram_text: 'Можно посмотреть новости, короткие видео и больше узнать о подходе Алексея.',
    facebook_meta: '7 412 подписчиков',
    facebook_card_title: 'Больше материалов о памяти и обучении',
    facebook_text: 'Еще один удобный канал, чтобы следить за новостями, видео и полезными публикациями Алексея.',
    faq_title: 'Частые <span>вопросы</span>',
    faq_q1: 'Для какого возраста курс?',
    faq_a1: 'Курс подходит для школьников ESO и Bachillerato, примерно 12-18 лет.',
    faq_q2: 'Это больше теория или практика?',
    faq_a2: 'Это практический курс. Дети сразу тренируются запоминать слова, даты, формулы и тексты.',
    faq_q3: 'Сколько длится занятие?',
    faq_a3: 'В онлайн-формате занятие длится до 90 минут. В записи уроки короткие, по 10-15 минут.',
    faq_q4: 'Нужен ли родитель на занятиях?',
    faq_a4: 'На детских занятиях родитель не обязан присутствовать. Для родителей предусмотрена отдельная встреча или рекомендации.',
    faq_visual_title: 'Память - это навык',
    faq_visual_text: 'Его можно тренировать через понятные приемы и практику',
    contact_title: 'Остались <span>вопросы?</span>',
    contact_lead: 'Напишите нам, поможем выбрать подходящий формат обучения для вашего ребенка.',
    telegram_cta: 'Пишите мне в Telegram',
    form_question: 'Ваш вопрос',
    question_placeholder: 'Опишите ваш вопрос...',
    form_email: 'Email',
    form_phone: 'Телефон',
    form_send: 'Отправить',
    footer_top: 'Наверх ↑'
  },
  uk: {
    brand: 'Секрети пам’яті',
    nav_about: 'Про курс',
    nav_program: 'Програма',
    nav_formats: 'Формати',
    nav_reviews: 'Відгуки',
    nav_socials: 'Соцмережі',
    nav_faq: 'FAQ',
    nav_contacts: 'Контакти',
    header_cta: 'Курси',
    hero_eyebrow: 'Курс для школярів ESO і Bachillerato',
    hero_title: 'Секрети пам’яті для <span>навчання</span> і мов',
    hero_lead: 'Практичний онлайн-курс, де дитина опанує техніки пам’яті та навчиться запам’ятовувати іноземні слова, дати, формули, терміни й тексти без зубріння.',
    hero_btn_format: 'Дивитися формати курсу',
    hero_btn_question: 'Поставити запитання',
    hero_point_formats: 'Запис, група або індивідуально',
    video_alex: 'Відео від Олексія',
    video_caption: 'Про себе, формат курсу і те, як проходять заняття',
    watch_youtube: 'Дивитися на YouTube',
    teacher_video_note: 'Про себе, формат курсу і те, як проходять заняття',
    mini_memory: 'Пам’ять',
    mini_focus: 'Концентрація',
    mini_texts: 'Робота з текстами',
    mini_confidence: 'Впевненість',
    floating_title: 'Навчайся легше',
    floating_text: 'Запам’ятовуй більше. Почувайся впевненіше.',
    about_title: 'Кому <span>підійде</span> курс',
    about_lead: 'Курс для школярів ESO і Bachillerato, яким важливо легше вчити іноземні мови, краще запам’ятовувати шкільні теми та впевненіше готуватися до уроків.',
    about_item_1: 'Складно запам’ятовувати іноземні слова і правила',
    about_item_2: 'Плутається в датах, формулах, термінах і визначеннях',
    about_item_3: 'Читає текст, але потім не може переказати головне',
    about_note: 'Підходить для <strong>навчання, мов і підготовки до школи</strong>',
    program_badge: 'Програма курсу',
    program_title: '<span class="program-title-accent">4 модулі</span>, які вчать запам’ятовувати',
    program_lead: '4 модулі, які допоможуть дитині запам’ятовувати легше й упевненіше.',
    module1_label: 'Модуль 1',
    module1_subtitle: 'Базові принципи запам’ятовування',
    module1_title: 'Як працює пам’ять',
    module1_text: 'Розберемо, чому інформація швидко забувається і як запам’ятовувати через образи, асоціації та зв’язки, а не через механічне зубріння.',
    module2_label: 'Модуль 2',
    module2_subtitle: 'Як запам’ятовувати складну інформацію',
    module2_title: 'Слова, терміни й визначення',
    module2_text: 'Дитина навчиться запам’ятовувати іноземні слова, шкільні терміни, назви, правила й визначення за допомогою зрозумілих технік пам’яті.',
    module3_label: 'Модуль 3',
    module3_subtitle: 'Запам’ятовування без плутанини',
    module3_title: 'Числа, дати і формули',
    module3_text: 'Розберемо, як запам’ятовувати дати, числа, формули та складні позначення через логіку, образи й опорні зв’язки.',
    module4_label: 'Модуль 4',
    module4_subtitle: 'Застосування технік у навчанні',
    module4_title: 'Тексти, мови й шкільні теми',
    module4_text: 'Потренуємо, як використовувати техніки пам’яті для переказу текстів, конспектів, домашніх завдань, іноземних слів і підготовки до уроків.',
    teacher_title: 'Хто <span>веде</span> курс',
    teacher_p1: '<strong>Олексій Бессонов</strong> - чемпіон України із запам’ятовування, тренер із розвитку пам’яті та ефективного навчання, рекордсмен Книги рекордів України, автор книг і творець курсів “Суперпам’ять” і “Поліглот”.',
    teacher_p2: 'Олексій багато років допомагає дітям і дорослим розвивати пам’ять, легше вчити іноземні мови, краще працювати з інформацією та застосовувати техніки запам’ятовування в реальному навчанні.',
    teacher_stat_1: '15+ років',
    teacher_stat_1_text: 'досвіду',
    teacher_stat_2: 'Автор',
    teacher_stat_2_text: 'курсів',
    teacher_stat_3: 'Практика',
    teacher_stat_3_text: 'для шкільних предметів',
    pricing_title: 'Оберіть <span>формат</span> навчання',
    pricing_lead: 'Три формати: самостійний, з підтримкою або персональний.',
    tag_self: 'Самостійно',
    price1_title: 'Курс у записі',
    price_all_course: 'за весь курс',
    price1_desc: 'Для занять у зручному темпі.',
    price1_li1: '24 короткі відеоуроки',
    price1_li2: 'практичні завдання',
    price1_li3: 'робочий зошит',
    price1_li4: 'матеріали курсу',
    price1_li5: 'онлайн-зустріч питання-відповідь',
    price1_btn: 'Купити запис',
    recommended: 'Рекомендований формат',
    tag_support: 'З підтримкою',
    price2_title: 'Онлайн-курс у міні-групі',
    per_lesson: 'за заняття',
    per_course: 'за курс',
    price2_desc: 'Живі заняття, практика та зворотний зв’язок.',
    price2_meta1: 'Формат: онлайн, міні-група',
    price2_meta2: 'Тривалість заняття: до 90 хвилин',
    price2_li1: '8 онлайн-занять',
    price2_li2: 'завдання після зустрічей',
    price2_li3: 'відповіді на запитання',
    price2_li4: 'матеріали для батьків',
    price2_btn: 'Записатися',
    tag_personal: 'Персонально',
    price3_title: 'Індивідуальна програма',
    per_program: 'за програму',
    price3_desc: 'Персональна робота під задачі дитини, темп і шкільні труднощі.',
    price3_note: '+ входять матеріали запису і міні-групи',
    price3_li1: 'діагностика і план занять',
    price3_li2: 'робота з мовами, текстами і формулами',
    price3_li3: 'персональні заняття з Олексієм',
    price3_li4: 'індивідуальні рекомендації батькам',
    price3_btn: 'Обговорити програму',
    reviews_title: '<span>Відгуки</span> батьків',
    reviews_lead: 'Подивіться, як батьки оцінюють заняття з розвитку пам’яті та навчання.',
    review_video: 'Відеовідгук',
    review_name_elena: 'Альона',
    review_meta_elena: '',
    review_text_elena: 'Дитині стало легше вчити слова і впевненіше відповідати в школі.',
    review_name_maria: 'Тетяна',
    review_meta_maria: '',
    review_text_maria: 'Сподобалося, що на курсі багато практики, а не лише теорія.',
    review_name_olga: 'Татьяна',
    review_meta_olga: '',
    review_text_olga: 'Після курсу сину стало легше готуватися до контрольних і переказувати тексти.',
    result_title: 'Що <span>зміниться</span> після курсу',
    result_lead: 'Дитина вчиться не просто повторювати, а розуміти, як саме запам’ятовувати.',
    result1_title: 'Зрозуміє систему',
    result1_text: 'Навчиться перетворювати складну інформацію на образи, зв’язки і зрозумілі підказки.',
    result2_title: 'Швидше слова і терміни',
    result2_text: 'Розбере техніки для мов, історії, біології та інших шкільних предметів.',
    result3_title: 'Краща робота з текстами',
    result3_text: 'Навчиться виділяти головне, запам’ятовувати структуру тексту і готуватися до переказів.',
    result4_title: 'Більше впевненості',
    result4_text: 'Коли є зрозумілий спосіб вчити, дитині простіше починати завдання і готуватися до перевірок.',
    social_title: 'Більше корисного <span>в соцмережах</span>',
    social_lead: 'Олексій ділиться прийомами запам’ятовування, прикладами для навчання і матеріалами для батьків.',
    youtube_stats: '18.2 тис. підписників · 256 відео',
    watch_video: 'Дивитися відео',
    youtube_text: 'Відео про те, як працює запам’ятовування і чому техніки допомагають навчатися легше.',
    telegram_meta: '3 618 підписників',
    telegram_card_title: 'Короткі поради, приклади і матеріали',
    telegram_text: 'Зручно стежити за новими розборами, техніками і корисними матеріалами про навчання.',
    instagram_meta: '5 319 підписників',
    instagram_card_title: 'Живий формат і короткі ідеї для навчання',
    instagram_text: 'Можна подивитися новини, короткі відео і більше дізнатися про підхід Олексія.',
    facebook_meta: '7 412 підписників',
    facebook_card_title: 'Більше матеріалів про пам’ять і навчання',
    facebook_text: 'Ще один зручний канал, щоб стежити за новинами, відео і корисними публікаціями Олексія.',
    faq_title: 'Часті <span>запитання</span>',
    faq_q1: 'Для якого віку курс?',
    faq_a1: 'Курс підходить для школярів ESO і Bachillerato, приблизно 12-18 років.',
    faq_q2: 'Це більше теорія чи практика?',
    faq_a2: 'Це практичний курс. Діти одразу тренуються запам’ятовувати слова, дати, формули і тексти.',
    faq_q3: 'Скільки триває заняття?',
    faq_a3: 'В онлайн-форматі заняття триває до 90 хвилин. У записі уроки короткі, по 10-15 хвилин.',
    faq_q4: 'Чи потрібен батько або мама на заняттях?',
    faq_a4: 'На дитячих заняттях батькам не обов’язково бути присутніми. Для батьків передбачена окрема зустріч або рекомендації.',
    faq_visual_title: 'Пам’ять - це навичка',
    faq_visual_text: 'Її можна тренувати через зрозумілі прийоми і практику',
    contact_title: 'Залишилися <span>запитання?</span>',
    contact_lead: 'Напишіть нам, допоможемо обрати відповідний формат навчання для вашої дитини.',
    telegram_cta: 'Пишіть мені в Telegram',
    form_question: 'Ваше запитання',
    question_placeholder: 'Опишіть ваше запитання...',
    form_email: 'Email',
    form_phone: 'Телефон',
    form_send: 'Надіслати',
    footer_top: 'Нагору ↑'
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'ru';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem('siteLang', lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('siteLang') || 'ru');


// Translate Elena video link label
function updateElenaVideoLinkLabel() {
  const lang = localStorage.getItem('siteLang') || 'ru';
  document.querySelectorAll('.review-video-link').forEach((el) => {
    el.textContent = lang === 'uk' ? 'Дивитися відеовідгук' : 'Смотреть видеоотзыв';
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setTimeout(updateElenaVideoLinkLabel, 0));
});

updateElenaVideoLinkLabel();


// Translate review video link labels
function updateReviewVideoLinkLabels() {
  const lang = localStorage.getItem('siteLang') || 'ru';
  document.querySelectorAll('.review-video-link').forEach((el) => {
    el.textContent = lang === 'uk' ? 'Дивитися відеовідгук' : 'Смотреть видеоотзыв';
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setTimeout(updateReviewVideoLinkLabels, 0));
});

updateReviewVideoLinkLabels();
