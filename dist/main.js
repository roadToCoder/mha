import gsap from "gsap";
const character = document.querySelector(".character");
// const desc = document.querySelector("#desc") as HTMLDivElement;
gsap.from(character, { opacity: 0, x: 85, duration: 0.7 });
// To parse this data:
// @ts-ignore
import charact from "../dist/data/charact.json" assert { type: "json" };
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
const characters = charact;
export var Camps;
(function (Camps) {
    Camps["Etudiant"] = "etudiant";
    Camps["Heros"] = "heros";
    Camps["Vilain"] = "vilain";
})(Camps || (Camps = {}));
