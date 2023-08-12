"use strict";
// //@ts-ignore
// import gsap from '../node_modules/gsap/index.js';
// export interface AllCharacters {
//   character: Character[];
// }
// export interface Character {
//   id:           number;
//   nom:          string;
//   prenom:       string;
//   alias:        string;
//   age:          number | null;
//   camps:        Camps;
//   rang:         null | string;
//   pro:          boolean;
//   pouvoir:      string;
//   descPower:    string;
//   descHistory:  string;
//   img:          string;
//   imgClass:     string;
//   nameClass:    string;
//   aliasClass:   string;
// }
// export enum Camps {
//   Etudiant = "Etudiant",
//   Heros = "Héros",
//   Vilain = "Vilain",
// }
// const errorInformation = document.querySelector("#errorInformation") as HTMLDivElement;
// const displayInfos = document.querySelector("#displayInfos") as HTMLDivElement;
// const displayImg = document.querySelector("#displayImg") as HTMLDivElement;
// const prevButton = document.querySelector("#prevButton") as HTMLButtonElement;
// const nextButton = document.querySelector("#nextButton") as HTMLButtonElement;
// async function getCharacters() {
//   try {
//     const response = await fetch('./dist/data/json/charact.json');
//     if(!response.ok) {
//       throw new Error(`Error ${response.status}, ${response.statusText}`)
//     }
//     const allCharacters = await response.json();
//     console.log(allCharacters);     
//     let currentCharacterIndex = 0;
//     displayCharacter(allCharacters, currentCharacterIndex);
//     nextButton.addEventListener("click", () => {
//       currentCharacterIndex = (currentCharacterIndex + 1) % allCharacters.character.length;
//       displayCharacter(allCharacters, currentCharacterIndex);
//     });
//     prevButton.addEventListener('click', () => {
//       currentCharacterIndex = (currentCharacterIndex - 1 + allCharacters.character.length) % allCharacters.character.length;
//       displayCharacter(allCharacters, currentCharacterIndex);
//     });
//   } 
//   // Gestion des erreurs
//   catch (error) {
//     if (error instanceof Error) {
//       errorInformation.textContent = error.message;
//     } else {
//       errorInformation.innerHTML = `Unexpected error : ${error}`;
//     }
//   }
// }
// getCharacters()
// function displayCharacter(characters:AllCharacters,index:number) {
//   let txt = "";
//   txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Age :</span> ${characters.character[index].age}</div>`;
//   if (characters.character[index].camps !== "Héros" && characters.character[index].camps !== "Vilain") {
//     txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Filière héroïque :</span> ${characters.character[index].camps}</div>`;
//   } else {
//     txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Métier :</span> ${characters.character[index].camps}</div>`;
//   }
//   if (characters.character[index].pro || characters.character[index].rang !== null) {
//     txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Rang :</span> ${characters.character[index].rang}</div>`;
//   }
//   txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Pouvoir :</span> ${characters.character[index].pouvoir}</div>`;
//   txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Capacité :</span> ${characters.character[index].descPower.replace(/\n/g, '<br>')}</div>`;
//   txt += `<div class="pr-3 pl-3 font-futurabook text-left"><span class="font-futuraregular">Histoire :</span> ${characters.character[index].descHistory.replace(/\n/g, '<br>')}</div>`;
//   displayInfos.innerHTML= txt;
//   // mettre ici un if pour indiquer quel paysage afficher en fonction du personnage
//   displayImg.innerHTML = `<img src="./dist/img/res/Yuuei_Building.webp" class="rounded-2xl university z-10 aspect-auto" alt="">`;
//   displayImg.innerHTML += `<img src="${characters.character[index].img}" class="${characters.character[index].imgClass} object-cover">`;
//   // ajouter les nameClass et aliasClass au fichier json quand elles seront prêtes
//   displayImg.innerHTML += `<span class="lg:text-4xl xl:text-5xl font-futuraregular nameCharacter absolute ${characters.character[index].nameClass} lg:left-[5%] lg:top-[30%] xl:left-[5%] xl:top-[30%]">${characters.character[index].prenom} ${characters.character[index].nom}</span>`;
//   displayImg.innerHTML += `<span class="lg:text-2xl xl:text-3xl font-futuraregular aliasCharacter absolute ${characters.character[index].aliasClass} lg:left-[5%] lg:top-[42%] xl:left-[5%] xl:top-[42%]">${characters.character[index].alias.replace(/\n/g, '<br>')}</span>`;
//   const nameCharacter = document.querySelector(".nameCharacter");
//   gsap.from(nameCharacter,{opacity: 0, x: -55, duration: 0.7});
//   const aliasCharacter = document.querySelector(".aliasCharacter");
//   gsap.from(aliasCharacter,{opacity: 0, x: -55, duration: 0.7});
//   const imgCharacter = document.querySelector(".imgCharacter");
//   gsap.from(imgCharacter,{opacity: 0, x: 85, duration: 0.7});
// }
