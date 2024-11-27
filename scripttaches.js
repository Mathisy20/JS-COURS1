let form = document.getElementById("task-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
     //recup l'input tache
     const task=document.getElementById("task-input");
    //recup le ul par l'id
    const listContainer=document.getElementById("task-list");
   
    //créer un li avec createElement
    let li=document.createElement("li");
    //recup la valeur de l'input tache
let taskValue = task.value;
    //textContent la valeur de l'input tache dans ton li
    li.textContent = taskValue;
    //appendChild le li dans le ul.
    listContainer.appendChild(li);
    // Ajouter le bouton Supprimer
    //Créer le bouton supprimer
    let btn = document.createElement('button');
    //Appliquer le texte "Supprimer"
    btn.textContent = "Supprimer";
    //addEventListener > au click > fonction >
   btn.addEventListener('click',function () {
   listContainer.removeChild(li);
   });
  li.appendChild(btn);
 // dans l'addEventListener: removeChild le li du ul.
  //appenChild le bouton dans le li

  // Ajouter le bouton Modifier
        //Créer le bouton modifier
        let btnM =document.createElement(`button`);
        //Appliquer le texte "Modifier"
        btnM.textContent = "Modifier";
        //addEventListener > au click > fonction >
        btnM.addEventListener('click',function () {
            listContainer.input(li);
            });
            //Céer un nouvel input
            //Ajouter le type 'text' à l'input
            //Ajouter en valeur de l'input le contenu textuel du premier élément enfant (firstChild) du li
            //Créer un bouton avec le texte Sauvegarder
            //addEventListener > au click > fonction >
                //Remplacer le texte du premier élément enfant(firstChild) du li par la valeur du nouvel input
                //Supprimer le nouvel input et le bouton sauvegarder

})
