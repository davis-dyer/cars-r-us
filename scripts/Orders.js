import { getInterior, getNewOrder, getPaintColor, getTechnology, getWheels } from "./database.js";

export const addOrders = (order) => {
    const inter = getInterior()
    const paint = getPaintColor()
    const techno = getTechnology()
    const wheel = getWheels()

    const chosenPaint = paint.find(color => {
        return color.id === order.paintColorId
    })

    const chosenInterior = inter.find(interior => {
        return interior.id === order.interiorId 
    })

    const chosenTech = techno.find(tech => {
        return tech.id === order.technologyId
    })

    const chosenWheels = wheel.find(tire => {
        return tire.id === order.wheelsId
    })

    const orderAmount = chosenPaint.price + chosenInterior.price + chosenTech.price + chosenWheels.price
    
    const costString = orderAmount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    
    const orders = getNewOrder()

    let html = '<ul>'

    const newOrder = orders.map(addOrders)

    html += newOrder.join("")
    html += '</ul>'

    return html
}



