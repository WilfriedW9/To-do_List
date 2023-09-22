const searchBar = document.getElementById("searchBar");
const addTaskButton = document.getElementById("addTask");
const body = document.querySelector("body");

let list = document.querySelector(".list");
let taches = document.createElement("div");

addTaskButton.addEventListener("click", function () {
  ajouterTache();
});

body.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    ajouterTache();
  }
});

// body.addEventListener("keydown", function (event) {
//   console.log(event.key);
// });

list.addEventListener("click", function (e) {
  if (e.target.className === "retraitTache") {
    e.target.parentElement.remove();
  }
});

function ajouterTache() {
  if (searchBar.value === "") {
    alert("Veuillez rentrer une tâche");
  } else {
    let taches = document.createElement("div");
    let boutonEffacer = document.createElement("button");
    boutonEffacer.className = "retraitTache";
    taches.className = "tache";
    list.appendChild(taches);
    taches.innerHTML = `Tâche : ${searchBar.value}`;
    taches.appendChild(boutonEffacer);
    return (searchBar.value = "");
  }
}
