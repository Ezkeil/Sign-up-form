document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

  const formElements = Array.from(
    document.getElementsByClassName("inputStyle")
  );
  formElements.forEach((element) => {
    showHideEmptyError(element);
  });
  validateEmail();
});

function showHideEmptyError(element) {
  element.addEventListener("change", () => {
    const para = document.createElement("p");
    if (element.value == "") {
      const txt = element.getAttribute("placeholder");
      para.innerText = txt + " " + "cannot be empty";
      para.style.color = "hsl(0, 100%, 74%)";
      para.style.height = "10%";
      para.style.marginTop = 0;
      para.style.textAlign = "right";
      para.style.fontStyle = "italic";
      para.style.fontSize = 12 + "px";
      element.style.marginBottom = 0;
      element.insertAdjacentElement("afterend", para);
      element.style.backgroundImage = 'url("images/icon-error.svg")';
      element.style.backgroundRepeat = "no-repeat";
      element.style.backgroundPosition = "95% 50%";
      element.style.backgroundAttachment = "scroll";
    } else {
      if (element.nextElementSibling.tagName === "P") {
        element.nextElementSibling.remove();
      }
      element.style.marginBottom = "10%";
      element.style.removeProperty("background-image");
      element.style.removeProperty("background-repeat");
      element.style.removeProperty("background-position");
      element.style.removeProperty("background-attachment");
    }
  });
}

function validateEmail() {
const email = document.getElementById("email");
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
email.addEventListener("change", () => {
  console.log(regex.test(email.value));
  const para = document.createElement("p");
  if (regex.test(email.value)) {
    if (email.nextElementSibling.tagName == "P") {
      email.nextElementSibling.remove();
    }
    email.style.removeProperty("background-image");
    email.style.removeProperty("background-repeat");
    email.style.removeProperty("background-position");
    email.style.removeProperty("background-attachment");
  } else {
    para.innerText = "Looks like this is not an email";
    para.style.color = "hsl(0, 100%, 74%)";
    para.style.height = "10%";
    para.style.marginTop = 0;
    para.style.textAlign = "right";
    para.style.fontStyle = "italic";
    para.style.fontSize = 12 + "px";
    email.style.marginBottom = 0;
    email.insertAdjacentElement("afterend", para);
    email.style.backgroundImage = 'url("images/icon-error.svg")';
    email.style.backgroundRepeat = "no-repeat";
    email.style.backgroundPosition = "95% 50%";
    email.style.backgroundAttachment = "scroll";
  }
});
}
