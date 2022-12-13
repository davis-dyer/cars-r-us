import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()


document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'wheels') {
        setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
        return `<h2>Wheels</h2>
            <select id="wheels">
                <option value="0">Select a wheel package</option>
                ${
                    wheels.map(
                        (wheel) => {
                            return `<option value="${wheel.id}">${wheel.wheel}</option>`
                        }
                    ).join("")
                }
            </select>
        `
    }