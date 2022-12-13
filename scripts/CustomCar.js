import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies }  from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { newData } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            newData();
        }
    }
)



export const htmlRepresentation = () => {
    return `
    <article class="drop__container">
        <section class="drop__paints">
            ${Paints()}
        </section>
        <section class="drop__interiors">
            ${Interiors()}
        </section>
        <section class="drop__technologies">
            ${Technologies()}
        </section>
        <section class="drop__wheels">
            ${Wheels()}
        </section>
    </article>

    <article class="btn__container">
        <button id="orderButton">Place Order</button>
    </article>

    <article class="order__container">
        <h2>Custom Orders</h2>
        ${Orders()}
    </article>
    `
}