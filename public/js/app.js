let textInput = document.getElementById("textInput");
let title = document.querySelector("#title");
let pictures = document.querySelector("#pictures");
let describe = document.querySelector("#describe");
let date = document.querySelector("#date");
let error = document.querySelector("#error");

textInput.addEventListener("input", (e) => {
  const inputValue = textInput.value;

  fetch("/movies?name=" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        error = data.error;
      } else {
        error = "";
        pictures.src = "http://image.tmdb.org/t/p/w500" + data.pictures;
        title.textContent = data.title;
        return { pictures, title };
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
