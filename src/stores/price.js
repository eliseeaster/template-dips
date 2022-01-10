import { writable } from "svelte/store";

export const price = writable("");

export const fetch = async () => {
  const response = await window.fetch("/price", { method: "GET" });
  if (response.ok) {
    const data = await response.json();
    price.set(data.price);
  }
};