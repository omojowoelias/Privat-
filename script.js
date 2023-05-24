//Get modal element
var modal = document.getElementById("simpleModal");
//Get open modal button
var modalBtn = document.getElementById("modalBtn");
//Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen to our Event
modalBtn.addEventListener("click", openModal);
//Listen to our Event
closeBtn.addEventListener("click", closeModal);
//Listen for Outside click
window.addEventListener("click", outsideClick);

//function to open modal 
function openModal(){
    modal.style.display = "block";
}
//function to open modal 
function closeModal(){
    modal.style.display = "none";
}

//function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}