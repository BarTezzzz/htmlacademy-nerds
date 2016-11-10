var link = document.querySelector(".js-form");
      var popup = document.querySelector(".modal-content_form");
      var close = popup.querySelector(".modal-content_form__close");
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var message = popup.querySelector("[name=message]");
      var storage = localStorage.getItem("email");
      var storage = localStorage.getItem("name");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content_form__show");

        if (storage) {
          name.value = storage;
          email.value = storage;
          email.focus();
        } else {
          name.focus();
        }

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content_form__show");
        popup.classList.remove("modal-content_form__error");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("modal-content_form__error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-content_form__error");
        } else {
          localStorage.setItem("name", name.value);
          localStorage.setItem("email", email.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content_form__show")) {
            popup.classList.remove("modal-content_form__show");
            popup.classList.remove("modal-content_form__error");
          }
        }
      });