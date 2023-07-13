const form = document.querySelector("form");

function errorMsg(field, errorText) {
    field.classList.add("error");
    var errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.innerText = errorText;
    field.closest(".notifyMe").appendChild(errorElement);
}

function validateForm(e) {
        e.preventDefault();

        let emailInput = document.getElementById("notify");

        let email = emailInput.value.trim();

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

        var errorFields = document.querySelectorAll(".notifyMe .error");
            errorFields.forEach(function (field) {
                field.classList.remove("error");
            });

        var errorTexts = document.querySelectorAll(".error-text");
            errorTexts.forEach(function (errorText) {
                errorText.remove();
            });

        if(!emailPattern.test(email)){
            errorMsg(emailInput, "Please provide a valid email address");
        }

        var checkErrors = document.querySelectorAll(".notifyMe .error");
        if(checkErrors.length !== 0){
            return;
        }
        
        form.submit();
}

form.addEventListener("submit", validateForm);