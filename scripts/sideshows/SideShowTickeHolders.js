const contentElement = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideShowTicketHolders = () => {
    eventHub.addEventListener("showTicketPurchased", showEvent => {
        contentElement.innerHTML += `<div class="gawker person"></div>`
    })
}