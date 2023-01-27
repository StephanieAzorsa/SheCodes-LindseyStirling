function updateAlbum(album) {
  let contents = document.getElementsByClassName("carusel");

  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    content.style.display = "none";
  }
  document.getElementById("album-" + album).style.display = "block";
}

function updateHeading(newHeading) {
  let heading = document.querySelector(".message");
  heading.innerHTML = newHeading;
}

function ageForBuy() {
  let age = prompt("How old are you?");
  return age >= 18;
}

function apply() {
  let firstName = prompt("What is your first name?");
  if (ageForBuy()) {
    updateHeading(`Hi ${firstName}! Thanks for buying! 🌻`);
  } else {
    updateHeading(`Sorry ${firstName}! 😿 You can't buy the album.`);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  let applyButton = document.querySelector("button");
  applyButton.addEventListener("click", apply);

  updateAlbum("first");
});
