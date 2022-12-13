//Creating a database
const database = {
    paintColor: [
        {id: 1, color: 'Silver', price: 59.99},
        {id: 2, color: 'Midnight Blue', price: 79.99},
        {id: 3, color: 'Firebrick Red', price: 55.99},
        {id: 4, color: 'Spring Green', price: 99.99}
    ],

    interior: [
        {id: 1, material: 'Beige Fabric', price: 150},
        {id: 2, material: 'Charcoal Fabric', price: 119},
        {id: 3, material: 'White Leather', price: 599},
        {id: 4, material: 'Black Leather', price: 549}
    ],

    technology: [
        {id: 1, tech: 'Basic Package', price: 999},
        {id: 2, tech: 'Navigation Package', price: 1750},
        {id: 3, tech: 'Visibility Package', price: 1850},
        {id: 4, tech: 'Ultra Package', price: 3550}
    ],

    wheels: [
        {id: 1, wheel: '17-inch Pair Radial', price: 350},
        {id: 2, wheel: '17-inch Pair Radial Black', price: 450},
        {id: 3, wheel: '18-inch Pair Spoke Silver', price: 700},
        {id: 4, wheel: '18-inch Pair Spoke Black', price: 900}
    ],

    customOrder: [
        {id: 1, paintColorId: 2, interiorId: 3, technologyId: 4, wheelsId: 1, timestamp: 1614659931693}
    ],

    orderQueue: {

    }
}

export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(inter => ({...inter}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const setPaintColor = (id) => {
    database.orderQueue.paintColorId = id
}

export const setInterior = (id) => {
    database.orderQueue.interiorId = id
}
export const setTechnology = (id) => {
    database.orderQueue.technologyId = id
}
export const setWheels = (id) => {
    database.orderQueue.wheelId = id
}

export const newData = () => {
    const newOrder = {...database.orderQueue}

    const lastIndex = database.customOrder.length - 1
    newOrder.id = database.customOrder[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrder.push(newOrder)

    database.orderQueue = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getNewOrder = () => {
    return database.customOrder.map(order => ({...order}))
}