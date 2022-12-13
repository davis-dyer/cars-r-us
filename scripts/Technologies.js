import { getTechnology, setTechnology } from "./database.js";

const techs = getTechnology();


document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'techno') {
        setTechnology(parseInt(changeEvent.target.value))
        }
    }
)


export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="techno">
            <option value="0">Select a technology package</option>
            ${
                techs.map((tech) => {
                    return `<option value="${tech.id}">${tech.tech}</option>`
                }
                ).join("")
            }
        </select>
    `
}