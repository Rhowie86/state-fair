const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "rideTicket") {
    const ticketEvent = new CustomEvent("rideTicketPurchased");
    eventHub.dispatchEvent(ticketEvent);
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased");
    eventHub.dispatchEvent(foodEvent);
  }
});
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased");
    eventHub.dispatchEvent(gameEvent);
  }
});
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "showTicket") {
    const showEvent = new CustomEvent("showTicketPurchased");
    eventHub.dispatchEvent(showEvent);
  }
});
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "bigSpender") {
    const bigEvent = new CustomEvent("bigTicketPurchased");
    eventHub.dispatchEvent(bigEvent);
  }
});

eventHub.addEventListener("click", (counterClick) => {
  if (!counterClick.target.classList.contains("btn")) {
    return;
  }

  let ticketCount = 1;
  if (counterClick.target.id === "bigSpender") {
    ticketCount = 4;
  }
  eventHub.dispatchEvent(
    new CustomEvent("counterClick", {
      detail: {
        ticketCount: ticketCount,
      },
    })
  );
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
    <div class="ticketBooth">
    <div class="counter" id="counting"> Total Tickets Purchased: </div> 
            <button class="btn" id="rideTicket"> Ride Ticket </button>
            <button class="btn" id="foodTicket"> Food Ticket </button>
            <button class="btn" id="gameTicket"> Game Ticket </button>
            <button class="btn" id="showTicket"> Sideshow Ticket </button>
            <button class="btn" id="bigSpender"> Full Package Ticket </button>
        </div>
    `;
};
