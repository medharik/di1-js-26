console.log("mon premier message en javascript");
//alert('ma premier boite de dialogue')

//demander a l'utilsateur de saisir sont nom ,age

let nom = prompt("Entrer votre nom");
let age = prompt("Entrer votre age");

if ( isNaN(age) ||  age<=0) {
    // alert("Erreur : l'age doit etre un nombre >=0");
let err=  document.getElementById('erreur');
   err .innerText="Erreur : l'age doit etre un nombre >=0"

}else{

let next_age=parseInt(age)+1;//191 au lieu de 20! , parseInt convertit "10" au 10
// alert("annee prochaine tu auras "+next_age+"ans")
let next=document.getElementById("next_year");
next.innerHTML="annee prochaine tu auras "+next_age+"ans";
//entrer le nom, age
// on compare l'age avec 18 pour affiche mineur/majeur
if (age > 18) {
 let maj=document.querySelector('h4');
 maj.innerHTML=nom+ " est majeur";
    // le + est une concatenation
} else {
  alert(nom + " est mineur"); // le + est une concatenation
}
}