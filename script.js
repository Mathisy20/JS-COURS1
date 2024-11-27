// let nom="Yatuka";
// console.log(nom);

// let prenom="Mathis";
// console.log(prenom);
// let age=21;
// age=69;
// console.log(age);
// const numSecu=1039384848475;
// console.log(numSecu);
// let Joyeux = ("Joyeux Anniversaire "+nom+" "+prenom+" "+age);
// console.log(`Joyeux Anniversaire ${nom} ${prenom} !Vous avez ${age} ans Aujourd'hui!` );



// let note1=13;
// let note2=17;
// let note3=15;
//  let somme=note1+note2+note3;
//  console.log(somme);
//  let nombre1=45;
//  let nombre2=3;
//  let moyenne=nombre1/nombre2;
//  console.log(moyenne);
//  let nombretotal=15;

//  let pourcentage= ( (100*20)/100);  

//  console.log(pourcentage);

//  let numeroProduit=750;
//  const libelleProduit="Quechua";

// let achat=1;

//  let resultat=numeroProduit+achat;

// console.log(resultat)
// console.log(libelleProduit.toUpperCase());

// let Chaise=libelleProduit.toUpperCase();
// console.log(Chaise)

// let username="Mathis";
// let jours=35;
// jours++

// function salutation (username,jours) {
//     console.log(`bonjours ${username},vous etes connecter depuis ${jours}`);

// }

// salutation(username,jours);

// const js=document.getElementById("js");
// js.textContent=`bonjours ${username},vous etes connecter depuis ${jours}`;


// let note=20;


// function VerifierReussiteExamen(note) {

//     if (note<=10) { 
//         console.log("vous avez échoué");
//     }

//         else{
//             console.log("Vous avez reussi!!")

//     }
// }
// VerifierReussiteExamen(note);


    


function start() {
    for (let index = 1; index <=3; index++) {
        let num = Math.floor(Math.random() * 10) + 1;
        let sign=parseInt( prompt("quelle est le chiffre")); 
     
    if (num === sign) {
        console.log("gagné");

    } else {
        console.log(`essayes encore, le bon chiffre était: ${num}`);
    }
    
}
}
start()


let cdweb8 = ["Abdelkrim", "Akaël", "Alle", "Amina", "Ayman", "Ayoub", "Bilal", "Brenda", "Clarisse", "Haïdar", "Hicham", "Iryna", "Joël", "Karim", "Luna", "Mathis L", "Matrami", "Nur", "Pierre D ", "Pierre K", "Hayden","Ryan",  "Sajad", "Salomé", "Samantha", "Tom M","Tom D","Loic","Mathis Y",];
let number=cdweb8.length;
console.log(`Il y a ${number},aprenants dans le groupe`)
cdweb8.push("Jess")
console.log(`Il y a ${number} apprenants dans le groupe formé par ${cdweb8[29]}`)
cdweb8.forEach(element => {
    console.log(`bonjour ${element}`); 
}); 

for (let index = 0; index<11;  index++) {
    console.log(`NEIN!!! ${index}`);
    document.getElementById("js").innerHTML=(`afficher NEIN!!! ${index}`);

    
}
















   
    
  
   
   
   