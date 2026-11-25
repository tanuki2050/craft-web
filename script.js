const faqList = document.querySelector(".faq-list");

if (faqList) {
  faqList.addEventListener("click", (e) => {
    const button = e.target.closest(".faq-question button");

    if (!button || !faqList.contains(button)) {
      return;
    }

    const faqItem = button.closest(".faq-item");

    if (!faqItem) {
      return;
    }

    const answer = faqItem.querySelector(".faq-answer");

    if (!answer) {
      return;
    }

    const isOpen = !answer.hidden;

    answer.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
  });
}

const demoForm = document.querySelector(".contact form");

if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
