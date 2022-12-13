import { getPaintColor, setPaintColor } from "./database.js"

const newColor = getPaintColor()

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'paints') {
            setPaintColor(parseInt(changeEvent.target.value))
        }
    }
)


export const Paints = () => {
    let htmlString = "<h2>Color</h2>"

    htmlString += '<select id="paints">'
    htmlString += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = newColor.map( (paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    htmlString += arrayOfOptions.join("")
    htmlString += '</select>'
    return htmlString;
}