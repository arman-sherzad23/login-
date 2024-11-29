const switch_mode = document.querySelector(".switch-mode-content");
const form_inputs = document.querySelectorAll(
  ".login-section .form .input input:not(input[type='submit'])"
);
const clear_email_txt = document.querySelector(".login-section .clear");
const show_hide_pass = document.querySelector(
  ".login-section .show-hide-password"
);

// * Scripts
switch_mode.addEventListener("click", () => {
  switch_mode.parentElement.classList.toggle("dark-mode");
  switch_mode.parentElement.nextElementSibling.classList.toggle("dark-mode");
  switch_mode.parentElement.nextElementSibling.nextElementSibling.classList.toggle(
    "dark-mode"
  );
});

form_inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      input.nextElementSibling.style.display = "flex";
    } else {
      input.nextElementSibling.style.display = "none";
    }
  });
});

clear_email_txt.addEventListener("click", () => {
  clear_email_txt.previousElementSibling.value = "";
  clear_email_txt.style.display = "none";
});

show_hide_pass.addEventListener("click", () => {
  show_hide_pass.classList.toggle("show");
  if (show_hide_pass.classList.contains("show")) {
    show_hide_pass.previousElementSibling.type = "text";
  } else {
    show_hide_pass.previousElementSibling.type = "password";
  }
});
