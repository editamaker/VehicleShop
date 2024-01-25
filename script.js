document.getElementById("contact-form").addEventListener("submit", function (event) {
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
  
    // Send the form data as JSON to the server
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          showMessage("Thank you for contacting us, we will be in contact with you soon!", "success");
          document.getElementById("contact-form").reset(); // Reset the form
        } else {
          showMessage("An error occurred. Please try again later.", "error");
          console.log(result.error);
        }
      })
      .catch(error => {
        showMessage("An error occurred. Please try again later.", "error");
        console.error(error);
      });
  });
  
  function showMessage(message, type) {
    var messageContainer = $("#message-container");
    messageContainer.text(message);
    messageContainer.removeClass().addClass(type);
    setTimeout(function () {
        showMessage("Reloading contact form...", "info");
        console.log('Message shown'); // Debugging line
        setTimeout(function () {
          window.location.reload();
        }, 1000); // Wait for 1 second before reloading
      }, 5000);
      
      function showMessage(message, type) {
        var messageContainer = $("#message-container");
        console.log('Message Container:', messageContainer); // Debugging line
      
        messageContainer.text(message);
      
        if (type === "success") {
          messageContainer.removeClass().addClass("success");
        } else if (type === "error") {
          messageContainer.removeClass().addClass("error");
        } else if (type === "info") {
          messageContainer.removeClass().addClass("info");
        }
      
        setTimeout(function () {
          window.location.reload();
        }, 5000);
      }
    }      
  