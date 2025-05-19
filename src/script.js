// mon script 😍

const bouton_pour_remonter = document.querySelector(".bouton-pour-remonter")

window.addEventListener("scroll", ()=> {;
    if (window.scrollY>= 170 ) {
        bouton_pour_remonter.classList.add("bouton-pour-remonter-prime")
    }
    else{
        bouton_pour_remonter.classList.remove("bouton-pour-remonter-prime")
    }
    })
    const body = document.querySelector("body")
    const croix_rotation = document.querySelector(".croix")


    document.querySelectorAll(".titre-question").forEach((titre) => {
        titre.addEventListener("click", () => {
          const item = titre.parentElement;

          item.classList.toggle("active");

          // Fermer les autres éléments

          document.querySelectorAll(".question").forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
            }
          });
        });
      });

const overflow = document.querySelector(".overflow")
const commande = document.querySelector(".commande")
const croix_commande = document.querySelector(".croix-commande")
const bouton_de_commandes = document.querySelector(".bouton-de-commandes")

bouton_de_commandes.addEventListener("click", (e)=>{
  commande.style.display="flex";
  overflow.style.display="flex";
  body.style.overflowY="hidden";
})
/**
 * Pour pouvoir fermer la modal commentaires en cliquant sur "la croix"et overflow
 * @param {Element} elt 
*/
function annuler (elt){
  elt.addEventListener("click", ()=>{
    commande.style.display="none";
    overflow.style.display="none";
    body.style.overflowY="visible";
    
})}
annuler(croix_commande);
annuler(overflow)