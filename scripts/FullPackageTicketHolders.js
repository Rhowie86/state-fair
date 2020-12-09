const contentTarget = document.querySelectorAll("#full");
const eventHub = document.querySelector("#state-fair");
// console.log("test", contentTarget)
export const FullPackageTicketHolders = () => {
  eventHub.addEventListener("bigTicketPurchased", (bigEvent) => {
    for (const item of contentTarget) {
      item.innerHTML += `<div class="bigSpender person"></div>`;
    }
  });
};
