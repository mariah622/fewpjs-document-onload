// Your code goes here



// function changeText() {
//     let change = document.getElementById('text')
//     change.innerHTML = "This is really cool!"
// }


// document.addEventListener("DOMContentLoaded", function() {
//    changeText()
// })




document.addEventListener("DOMContentLoaded", function(){
    changeText();

})

function changeText(){
    const text = document.getElementById('text');
    text.innerHTML = "This is really cool!"
}