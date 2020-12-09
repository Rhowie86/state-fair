// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { SideShowTicketHolders } from "./sideshows/SideShowTickeHolders.js";
import { FullPackageTicketHolders } from "./FullPackageTicketHolders.js";
import { TicketCounter } from "./TicketCounter.js";

TicketBooth();
TicketCounter();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideShowTicketHolders();
FullPackageTicketHolders();
