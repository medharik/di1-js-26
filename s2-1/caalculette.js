function ajouter() {
let champs1=document.getElementById('a');
let champs2=document.querySelector('#b');
let res=document.getElementById('resultat');

console.log('test du champs 1 ',champs1,champs2);
   let a = parseFloat(champs1.value);//"12" => 12
   let b = parseFloat(champs2.value);//4
   let somme= a+b;
   res.innerHTML="la somme de "+a+" et de "+b+" est "+somme;


 
}
function dif(){

}