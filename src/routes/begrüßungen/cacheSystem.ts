import { browser } from "$app/environment";
import { writable } from "svelte/store";
export const nie_besucht = writable<boolean>(false)

export const lastVisit = writable(new Date)
if (browser) {
    if (localStorage.getItem("besucht") == undefined || null)  {
        nie_besucht.set(true)
    } else {
        nie_besucht.set(false)
    }
}

