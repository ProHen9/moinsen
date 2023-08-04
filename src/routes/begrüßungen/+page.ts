import { browser } from "$app/environment";
import { writable } from "svelte/store";
if (browser) {
    localStorage.setItem("besucht", "true")
}
export const lastVisit = writable(new Date)

