import gsap from "../node_modules/gsap/index.js";
const imgCharacter = document.querySelector(".imgCharacter");
gsap.from(imgCharacter, { opacity: 0, x: 85, duration: 0.7 });
const displayName = document.querySelector("#displayName");
const prevButton = document.getElementById('#prevButton');
const nextButton = document.getElementById('#nextButton');
let currentCharacterIndex = 0;
let charactersData = []; // Data fetched from JSON
// To parse this data:
// @ts-ignore
import charact from "../dist/data/charact.json" assert { type: "json" };
const characters = charact;
// console.log(characters.perso[0].age);
displayName.innerHTML = `<div>${characters.perso[0].prenom} ${characters.perso[0].nom}</div>`;
export var Camps;
(function (Camps) {
    Camps["Etudiant"] = "etudiant";
    Camps["Heros"] = "heros";
    Camps["Vilain"] = "vilain";
})(Camps || (Camps = {}));
prevButton.addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex - 1 + charactersData.length) % charactersData.length;
    updateCharacterContent(currentCharacterIndex);
});
nextButton.addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex + 1) % charactersData.length;
    updateCharacterContent(currentCharacterIndex);
});
function updateCharacterContent(index) {
}
