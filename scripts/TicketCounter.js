let count = 0;

export const TicketCounter = () => {
  const eventHub = document.querySelector("#state-fair");
  const contentTarget = document.querySelector(".counter");

  eventHub.addEventListener("counterClick", (event) => {
    count += event.detail.ticketCount;



    console.log("count", count);
    contentTarget.innerHTML = `Total Tickets Purchased: ${count}`;
  });
};


