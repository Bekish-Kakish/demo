const translations = {
  ru: {
    heading: "Еркежан <span>&</span> Бекзат",
    invitation: "Приглашаем вас на нашу свадьбу!",
    datePlace: "30 марта 2031 года в 16:00 | Hilton Astana",
    tagline: "История любви, написанная звездами ✨",
    aboutUs: "Немного о нас",
    aboutText: `Наша история началась с дружбы, которая со временем превратилась в нечто большее. Мы смеялись, поддерживали друг друга и стали командой, которой не страшны ни расстояния, ни трудности. Мы верим, что любовь — это не только чувства, но и ежедневный выбор быть рядом. И мы выбрали друг друга навсегда. ❤️`,
    venue: "Место проведения",
    venueText: "Мы с нетерпением ждём этот особенный день, чтобы разделить его с самыми дорогими сердцу людьми...",
    confirm: "Подтвердите участие",
    namePlaceholder: "Ваше имя",
    yes: "Да, я приду!",
    no: "Увы, не смогу прийти",
    submit: "Отправить",
    footer: "С любовью, Еркежан и Бекзат 💕",
    errorName: "Пожалуйста, введите ваше имя.",
    errorAttendance: "Пожалуйста, выберите участие.",
    thankYes: name => `Спасибо, ${name}! Мы ждем вас!`,
    thankNo: name => `Спасибо, ${name}! Жаль, что вы не сможете прийти.`
  },
  kz: {
    heading: "Еркежан <span>&</span> Бекзат",
    invitation: "Біздің үйлену тойымызға шақырамыз!",
    datePlace: "2031 жылдың 30 наурызы, 16:00 | Hilton Astana",
    tagline: "Жұлдыздар жазған махаббат хикаясы ✨",
    aboutUs: "Біз туралы",
    aboutText: `Біздің оқиғамыз достықтан басталды, ол уақыт өте келе махаббатқа айналды. Біз бірге күлдік, қиындықтарды еңсердік, және бір-бірімізді таңдадық. ❤️`,
    venue: "Өтетін орны",
    venueText: "Біз бұл ерекше күнді сізбен бөлісуді асыға күтеміз...",
    confirm: "Қатысатыныңызды растаңыз",
    namePlaceholder: "Атыңыз",
    yes: "Иә, келемін!",
    no: "Өкінішке орай, келе алмаймын",
    submit: "Жіберу",
    footer: "Сүйіспеншілікпен, Еркежан мен Бекзат 💕",
    errorName: "Атыңызды енгізіңіз.",
    errorAttendance: "Қатысуды таңдаңыз.",
    thankYes: name => `Рақмет, ${name}! Сізді күтеміз!`,
    thankNo: name => `Рақмет, ${name}! Өкінішті, келмейтініңізге.`
  }
};

const langSelect = document.getElementById("lang-select");
const elements = {
  heading: document.querySelector(".names-heading"),
  invitation: document.querySelector(".header-info"),
  datePlace: document.querySelector(".invitation-text"),
  tagline: document.querySelector(".tagline"),
  aboutUs: document.querySelector("section.content-section h2"),
  aboutText: document.querySelector(".description-text"),
  venue: document.querySelector(".hotel-section h2"),
  venueText: document.querySelector(".hotel-section .description-text"),
  confirm: document.querySelector("#rsvp-form h2"),
  nameInput: document.getElementById("name"),
  yesRadio: document.querySelector("label[for='yes']") || document.querySelectorAll(".radio-group label")[0],
  noRadio: document.querySelector("label[for='no']") || document.querySelectorAll(".radio-group label")[1],
  submit: document.querySelector("form input[type='submit']"),
  footer: document.querySelector("footer")
};

function updateLanguage(lang) {
  const t = translations[lang];
  elements.heading.innerHTML = t.heading;
  elements.invitation.innerText = t.invitation;
  elements.datePlace.innerText = t.datePlace;
  elements.tagline.innerText = t.tagline;
  elements.aboutUs.innerText = t.aboutUs;
  elements.aboutText.innerText = t.aboutText;
  elements.venue.innerText = t.venue;
  elements.venueText.innerText = t.venueText;
  elements.confirm.innerText = t.confirm;
  elements.nameInput.placeholder = t.namePlaceholder;
  elements.yesRadio.innerHTML = `<input type="radio" name="attendance" value="yes" required /> ${t.yes}`;
  elements.noRadio.innerHTML = `<input type="radio" name="attendance" value="no" /> ${t.no}`;
  elements.submit.value = t.submit;
  elements.footer.innerText = t.footer;
}

langSelect.addEventListener("change", () => {
  updateLanguage(langSelect.value);
});

// Устанавливаем язык по умолчанию
updateLanguage("ru");

// Обработка формы
document.getElementById('rsvp-form').addEventListener('submit', e => {
  e.preventDefault();
  const lang = langSelect.value;
  const t = translations[lang];
  const name = document.getElementById('name').value.trim();
  const attend = document.querySelector('input[name="attendance"]:checked');
  if (!attend) {
    alert(t.errorAttendance);
    return;
  }
  if (!name) {
    alert(t.errorName);
    return;
  }
  alert(attend.value === 'yes' ? t.thankYes(name) : t.thankNo(name));
  e.target.reset();
});
