/*jslint node: true */
'use strict';

var link = document.querySelector(".js-form");
var popup = document.querySelector(".modal-content_form");
var close = popup.querySelector(".modal-content_close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var storage = localStorage.getItem("email");
var storage = localStorage.getItem("name");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content_show");
  if (storage) {
    name.value = storage;
    email.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content_show");
  popup.classList.remove("modal-content_error");
});

form.addEventListener("submit", function (event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-content_error");
    popup.classList.add("modal-content_error");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content_show")) {
      popup.classList.remove("modal-content_show");
      popup.classList.remove("modal-content_error");
    }
  }
});