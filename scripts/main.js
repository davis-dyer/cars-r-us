import { htmlRepresentation } from "./CustomCar.js";

const mainContainer = document.querySelector('#container')

const renderAllHTML = () => {
    mainContainer.innerHTML = htmlRepresentation()
}

renderAllHTML();

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML();
})
