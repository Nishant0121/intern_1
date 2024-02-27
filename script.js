const scriptURL =
  "https://script.google.com/macros/s/AKfycbzXjGzfg6zBa6iZsXn1KjSTKEdPkKNN0-BTDG4RN644zN1PFGEGXzbp60HK55kqw3pllA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      form.reset();
      alert("Message Send");
    })
    .catch((error) => console.error("Error!", error.message));
});
