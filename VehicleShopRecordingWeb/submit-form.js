document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const message = document.getElementById("message").value.trim();

    const data = {
      name: name,
      surname: surname,
      email: email,
      message: message,
    };
    localStorage.setItem("formSubmission", JSON.stringify(data));
  });
