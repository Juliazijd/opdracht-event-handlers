    const background = document.querySelector('body');
const alertButton = document.querySelector('#alert-button');
const changeBackgroundButton = document.querySelector('#change-button');

//Opdracht 1
const showClickedMessage = () => {
    alert("Button clicked");
}

alertButton.addEventListener("click", showClickedMessage);

//Opdracht 2
const changeBackgroundColor = () => {
    background.classList.add("blue-background");
}
/*changeBackgroundButton.addEventListener("click", changeBackgroundColor);*/


//Opdracht 3
const toggleBackgroundColor = () => {
    background.classList.toggle("blue-background");
}

changeBackgroundButton.addEventListener("click", toggleBackgroundColor);
