
function calculprice() {
    let somme=0;
let arr=document.getElementsByClassName("quantity");
let arr1= document.getElementsByTagName("strong");
//console.log(arr);
for(let i=0; i<arr.length; i++){
     //console.log(arr[i].value);
let q=arr[i].value; 

let prix = Number(arr1[i].textContent.replace('$',''));
if(q)

somme += q*prix;
}

return somme
}
 
var element = document.getElementsByClassName("add")
for(let i=0; i<element.length; i++)
{
element[i].addEventListener("click", function(e) {
alert("la somme total est " +calculprice());
       });
}


function remove(i)
{  
let a= document.getElementById("list"+i)
   a.remove();

}




function calculprice_elem1() 
{

let produit1= document.getElementById("prd1").value;
let prix1= document.getElementById("prix1").textContent.replace('$','');
prix1=prix1.trim();

n=produit1*prix1;
console.log(n);
alert("la somme de ce produit est  "+n);


}
function calculprice_elem2() 
{

let produit2= document.getElementById("prd2").value;
let prix2= document.getElementById("prix2").textContent.replace('$','');
prix2=prix2.trim();

n=produit2*prix2;
console.log(n);
alert("la somme de ce produit est  "+n);


}
function calculprice_elem3() 
{

let produit3= document.getElementById("prd3").value;
let prix3= document.getElementById("prix3").textContent.replace('$','');
prix3=prix3.trim();

n=produit3*prix3;
console.log(n);
alert("la somme de ce produit est  "+n);


}
function calculprice_elem4() 
{

let produit4= document.getElementById("prd4").value;
let prix4= document.getElementById("prix4").textContent.replace('$','');
prix4=prix4.trim();

n=produit4*prix4;
console.log(n);
alert("la somme de ce produit est  "+n);


}
function calculprice_elem5() 
  {

let produit5= document.getElementById("prd5").value;
let prix5= document.getElementById("prix5").textContent.replace('$','');
prix5=prix5.trim();

n=produit5*prix5;
console.log(n);
alert("la somme de ce produit est  "+n);

  }

  function calculprice_elem6() 
  {

let produit6= document.getElementById("prd6").value;
let prix6= document.getElementById("prix6").textContent.replace('$','');
prix6=prix6.trim();

n=produit6*prix6;
console.log(n);
alert("la somme de ce produit est  "+n);

  }
  
  function show_more() {
    var x = document.getElementById("show");
    x.style.display="block";
}






