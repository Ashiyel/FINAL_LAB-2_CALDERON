// SETTINGS
// WHEN YOU TRY TO EDIT IN THE SETTINGS, IT WILL BE BE ASKING U TO STAY OR GO HOME
function saveSettings() {
    document.getElementById("settingsPopup").style.display = "block";
  }
  
  function redirectHome() {
    window.location.href = "/index.html";
  }
  
  function closeSettingsPopup() {
    document.getElementById("settingsPopup").style.display = "none";
  }
  



  // THIS
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const phoneInput = form.elements["phone"];
    const response = document.getElementById("response");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const phoneValue = phoneInput.value.trim();
      const phonePattern = /^\d{11}$/;
  
      if (!phonePattern.test(phoneValue)) {
        response.style.color = "red";
        response.textContent = "Invalid phone number. It must be exactly 11 digits and contain only numbers.";
        return;
      } else {
        response.style.color = "lightgreen";
        response.textContent = "Form submitted successfully!";
      }
  
      form.reset();
  
      // Show popup
      setTimeout(() => {
        const popup = document.createElement("div");
        popup.className = "confirmation-popup";
  
        const msg = document.createElement("p");
        msg.textContent = "Would you like to submit another response?";
        popup.appendChild(msg);
  
        const btnYes = document.createElement("button");
        const btnHome = document.createElement("button");
  
        if (btnYes) {
          btnYes.textContent = "Yes";
          btnYes.className = "popup-btn popup-btn-yes";
          popup.appendChild(btnYes);
        }
  
        if (btnHome) {
          btnHome.textContent = "Go home";
          btnHome.className = "popup-btn popup-btn-home";
          popup.appendChild(btnHome);
        }
  
        if (popup) {
          document.body.appendChild(popup);
        }
  
        if (btnYes) {
          btnYes.addEventListener("click", () => {
            popup.remove();
            response.textContent = "";
          });
        }
  
        if (btnHome) {
          btnHome.addEventListener("click", () => {
            window.location.href = "/index.html"; // Adjust path as needed
          });
        }
      }, 500);
    });
  });
  

