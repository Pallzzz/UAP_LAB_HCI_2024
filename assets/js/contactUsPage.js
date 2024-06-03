document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate First Name
        const firstName = document.getElementById("first-name").value;
        if (firstName.trim() === "") {
            showError("first-name-error", "First name is required.");
            isValid = false;
        } else {
            hideError("first-name-error");
        }

        // Validate Last Name
        const lastName = document.getElementById("last-name").value;
        if (lastName.trim() === "") {
            showError("last-name-error", "Last name is required.");
            isValid = false;
        } else {
            hideError("last-name-error");
        }

        // Validate Email
        const email = document.getElementById("email").value;
        if (!validateEmail(email)) {
            showError("email-error", "Please enter a valid email address.");
            isValid = false;
        } else {
            hideError("email-error");
        }

        // Validate Phone Number
        const phone = document.getElementById("phone").value;
        if (!validatePhone(phone)) {
            showError("phone-error", "Please enter a valid phone number.");
            isValid = false;
        } else {
            hideError("phone-error");
        }

        // Validate Nature of Inquiry
        const inquiry = document.getElementById("inquiry").value;
        if (inquiry === "") {
            showError("inquiry-error", "Please select the nature of your inquiry.");
            isValid = false;
        } else {
            hideError("inquiry-error");
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.style.display = "block";
    }

    function hideError(elementId) {
        const element = document.getElementById(elementId);
        element.style.display = "none";
    }

    function validateEmail(email) {
        // Simple email validation (not using regex)
        const atSymbol = email.indexOf("@");
        const dot = email.indexOf(".", atSymbol);
        return atSymbol > 0 && dot > atSymbol + 1 && dot < email.length - 1;
    }

    function validatePhone(phone) {
        // Simple phone number validation (not using regex)
        const strippedPhone = phone.replace(/[^0-9]/g, "");
        return strippedPhone.length >= 10 && strippedPhone.length <= 15;
    }
});