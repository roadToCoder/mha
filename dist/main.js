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
// import charact from "../dist/data/json/charact.json" assert { type: "json" };
let characters = [];
// async function fetchCharacterData() {
//   const response = await fetch('./dist/data/json/charact.json');
//   const data = await response.json();
//   displayInfos.innerHTML= `<div>${data.perso[0].prenom} ${data.perso[0].nom}</div>`
//   characters = data;
//   return data;
// }
// fetchCharacterData()
// console.log(characters[0].alias);
function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./dist/data/json/charact.json');
            if (!response.ok) {
                throw new Error(`Error ${response.status}, ${response.statusText}`);
            }
            const allCharacters = yield response.json();
            console.log(allCharacters);
            displaysInfosCharacter(allCharacters);
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
function displaysInfosCharacter(characters) {
    console.log(characters.character[0]);
    let txt = "";
    txt += `<div>${characters.character[0].prenom} ${characters.character[0].nom}</div>`;
    txt += `<div class="pr-3 pl-3">Surnom : ${characters.character[0].alias}</div>`;
    txt += `<div class="pr-3 pl-3">Age : ${characters.character[0].age}</div>`;
    txt += `<div class="pr-3 pl-3">Camps : ${characters.character[0].camps}</div>`;
    if (characters.character[0].pro || characters.character[0].rang !== null) {
        txt += `<div class="pr-3 pl-3">Rang : ${characters.character[0].rang}</div>`;
    }
    txt += `<div class="pr-3 pl-3">Pouvoir : ${characters.character[0].pouvoir}</div>`;
    txt += `<div class="pr-3 pl-3">Desc power : ${characters.character[0].descPower}</div>`;
    txt += `<div class="pr-3 pl-3">Histoire : ${characters.character[0].descHistory}</div>`;
    displayInfos.innerHTML = txt;
    // // mettre ici un if pour indiquer quel paysage afficher en fonction du personnage
    displayImg.innerHTML = `<img src="./dist/img/res/Yuuei_Building.webp" class="university z-10 aspect-auto" alt="">`;
    displayImg.innerHTML += `<img src="${characters.character[0].img}" class="${characters.character[0].supClass}">`;
    const imgCharacter = document.querySelector(".imgCharacter");
    gsap.from(imgCharacter, { opacity: 0, x: 85, duration: 0.7 });
}
getCharacters();
