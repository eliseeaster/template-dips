<script>
  import { onMount } from "svelte";
  import { fetch as fetchPrice, price } from "./stores/price.js";

  export function hei() {
    console.log("HEI");
    return "hallo";
  }

  export const halla = () => {
    return "halla";
  };
  
  onMount(fetchPrice);

</script>

<p>The price is: ${$price}</p>