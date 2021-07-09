function helloLexi() {
  let firstName = prompt(`What is your first name?`);
  firstName = firstName.trim();
  let email = prompt(`What is your email address?`);
  email = email.trim();
  if (firstName.length > 0 && email.length > 0) {
    alert(
      `Thank you, ${firstName}! We'll be in touch by email. Meanwhile, check out our friends on PetFinder! 🐶😺`
    );
  } else {
    alert(
      `Thanks for stopping by! To be contacted, please enter your name & email. Don't forget to checkout our friends on PetFinder! 🐶😺`
    );
  }
}
let helloButton = document.querySelector(".helloButton");
helloButton.addEventListener("click", helloLexi);
