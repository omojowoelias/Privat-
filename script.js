//Get modal element
var modal = document.getElementById("simpleModal");
//Get open modal button
var uploadBtn = document.getElementById("uploadBtn");
//Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen to our Event
uploadBtn.addEventListener("click", openModal);
//Listen to our Event
closeBtn.addEventListener("click", closeModal);
//Listen for Outside click
window.addEventListener("click", windowClick);

//function to open modal 
function openModal(){
    modal.style.display = "block";
}
//function to open modal 
function closeModal(){
    modal.style.display = "none";
}

//function to close modal if outside click
function windowClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}