// slect landingPage elemint 

let landingPage = document.querySelector(".landing-page");

// get array of img 
let amgsArray =["01.jpg ", "02.jpg ", "03.jpg ", "04.jpg ", "05.jpg "]




setInterval( function()  {

    // get randomNumber 
    let randomNumber = Math.floor(Math.random() * amgsArray.length);

    // change background 
    landingPage.style.backgroundImage = 'url("images/' + amgsArray[randomNumber] +'")';

} ,2000)
