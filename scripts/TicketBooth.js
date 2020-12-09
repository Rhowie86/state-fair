// import { TicketCounter } from "./TicketCounter.js"
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket"){
        const ticketEvent = new CustomEvent ("rideTicketPurchased")
        eventHub.dispatchEvent(ticketEvent)
    }
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "foodTicket"){
        const foodEvent = new CustomEvent ("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})
eventHub.addEventListener("click", event => {
    if (event.target.id === "gameTicket"){
        const gameEvent = new CustomEvent ("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})
eventHub.addEventListener("click", event => {
    if (event.target.id === "showTicket"){
        const showEvent = new CustomEvent ("showTicketPurchased")
        eventHub.dispatchEvent(showEvent)
    }
})
eventHub.addEventListener("click", event => {
    if (event.target.id === "bigSpender"){
        const bigEvent = new CustomEvent ("bigTicketPurchased")
        eventHub.dispatchEvent(bigEvent)
    }
})
// eventHub.addEventListener("click", event => {
    
//         const countEvent = new CustomEvent ("counting")
//         eventHub.dispatchEvent(countEvent)
//     })

// const TicketCounter = () => {
//     const contentTarget = document.querySelector(".attractions")
//     eventHub.addEventListener("counting", counter => {
//             x = number++
//         })
//         contentTarget.innerHTML += x
    
// }

/* <div class="counter"> Total Tickets Purchased: ${TicketCounter()} </div> */
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket"> Ride Ticket </button>
            <button id="foodTicket"> Food Ticket </button>
            <button id="gameTicket"> Game Ticket </button>
            <button id="showTicket"> Sideshow Ticket </button>
            <button id="bigSpender"> Full Package Ticket </button>
        </div>
    `
}

