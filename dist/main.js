var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
import gsap from '../node_modules/gsap/index.js';
export var Camps;
(function (Camps) {
    Camps["Etudiant"] = "etudiant";
    Camps["Heros"] = "heros";
    Camps["Vilain"] = "vilain";
})(Camps || (Camps = {}));
const errorInformation = document.querySelector("#errorInformation");
const displayInfos = document.querySelector("#displayInfos");
const displayImg = document.querySelector("#displayImg");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./dist/data/json/charact.json');
            if (!response.ok) {
                throw new Error(`Error ${response.status}, ${response.statusText}`);
            }
            const allCharacters = yield response.json();
            console.log(allCharacters);
            let currentCharacterIndex = 0;
            displayCharacter(allCharacters, currentCharacterIndex);
            nextButton.addEventListener("click", () => {
                currentCharacterIndex = (currentCharacterIndex + 1) % allCharacters.character.length;
                displayCharacter(allCharacters, currentCharacterIndex);
            });
            prevButton.addEventListener('click', () => {
                currentCharacterIndex = (currentCharacterIndex - 1 + allCharacters.character.length) % allCharacters.character.length;
                displayCharacter(allCharacters, currentCharacterIndex);
            });
        }
        // Gestion des erreurs
        catch (error) {
            if (error instanceof Error) {
                errorInformation.textContent = error.message;
            }
            else {
                errorInformation.innerHTML = `Unexpected error : ${error}`;
            }
        }
    });
}
getCharacters();
function displayCharacter(characters, index) {
    let txt = "";
    txt += `<div>${characters.character[index].prenom} ${characters.character[index].nom}</div>`;
    txt += `<div class="pr-3 pl-3">Surnom : ${characters.character[index].alias}</div>`;
    txt += `<div class="pr-3 pl-3">Age : ${characters.character[index].age}</div>`;
    txt += `<div class="pr-3 pl-3">Camps : ${characters.character[index].camps}</div>`;
    if (characters.character[index].pro || characters.character[index].rang !== null) {
        txt += `<div class="pr-3 pl-3">Rang : ${characters.character[index].rang}</div>`;
    }
    txt += `<div class="pr-3 pl-3">Pouvoir : ${characters.character[index].pouvoir}</div>`;
    txt += `<div class="pr-3 pl-3">Desc power : ${characters.character[index].descPower}</div>`;
    txt += `<div class="pr-3 pl-3">Histoire : ${characters.character[index].descHistory}</div>`;
    displayInfos.innerHTML = txt;
    // // mettre ici un if pour indiquer quel paysage afficher en fonction du personnage
    displayImg.innerHTML = `<img src="./dist/img/res/Yuuei_Building.webp" class="university z-10 aspect-auto" alt="">`;
    displayImg.innerHTML += `<img src="${characters.character[index].img}" class="${characters.character[index].supClass}">`;
    const imgCharacter = document.querySelector(".imgCharacter");
    gsap.from(imgCharacter, { opacity: 0, x: 85, duration: 0.7 });
}
