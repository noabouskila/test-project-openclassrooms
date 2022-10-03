// SCRIPT FORMULAIRE (contact.html)
let submit = document.getElementById("submit");
let response = document.getElementById("response")
console.log(submit);
console.log(response);

submit.addEventListener("click" ,function(event){
    event.preventDefault();
    submit.style.display = "none";
    response.style.display = "block";
    response.innerText= "Votre formulaire à bien été envoyé! Nous vous repondrons dans les plus brefs délais."
})