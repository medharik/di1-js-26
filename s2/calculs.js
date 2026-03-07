let champ1 = document.getElementById("a");
let champ2 = document.querySelector("#b");
let r = document.getElementById("resultat");

function ajouter() {
  console.log("valeur du champs", champ1.value, " champs 2 est ", champ2.value);

  if (
    champ1.value == "" ||
    champ2.value == "" ||
    isNaN(champ1.value) ||
    isNaN(champ2.value)
  ) {
    r.innerHTML = "Erreur, tous les champs sont  numeriques et obligatoires";
  } else {
    let a = parseFloat(champ1.value); //"12"=>12
    let b = parseFloat(champ2.value);

    let somme = a + b;
    r.innerHTML = "la somme est " + somme;
  }
}
function difference() {
 
  console.log("valeur du champs", champ1.value, " champs 2 est ", champ2.value);

  if (
    champ1.value == "" ||
    champ2.value == "" ||
    isNaN(champ1.value) ||
    isNaN(champ2.value)
  ) {
    r.innerHTML = "Erreur, tous les champs sont  numeriques et obligatoires";
  } else {
    let a = parseFloat(champ1.value); //"12"=>12
    let b = parseFloat(champ2.value);

    let somme = a - b;
    r.innerHTML = "la somme est " + somme;
  }
}


let btn_dif=document.getElementById('btn_dif');
btn_dif.addEventListener('click',difference);
