const contentElement = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", gameEvent => {
        contentElement.innerHTML += `<div class="player person"></div>`
    })
}