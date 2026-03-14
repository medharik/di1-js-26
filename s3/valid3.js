function validerNom() {
    let cnom=document.getElementById('nom');
    let derreur=document.getElementById('nom_erreur');
let b=document.getElementById('btn');
    if (cnom.value=="") {
        derreur.innerHTML="le nom est obligatoire";
        derreur.style.color="red";
        b.disabled=true;
    }else if(cnom.value.length<=1){
        derreur.innerHTML="Min 2 caracteres ";
        derreur.style.color="red";
         b.disabled=true;
    }
    else{
        
        derreur.innerHTML="le nom est valide";
        derreur.style.color='green';
           b.disabled=false;
    }
}