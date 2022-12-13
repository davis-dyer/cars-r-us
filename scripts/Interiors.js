import { getInterior, setInterior } from "./database.js"

const design = getInterior()

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'inter') {
        setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let htmlString = "<h2>Interiors</h2>"

    htmlString += '<select id="inter">'
    htmlString += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = design.map( (inter) => {
        return `<option value="${inter.id}">${inter.material}</option>`
    })

    htmlString += arrayOfOptions.join("")
    htmlString += '</select>'
    return htmlString;
}