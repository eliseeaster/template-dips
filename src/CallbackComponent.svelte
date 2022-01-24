<script>
  import { onMount } from "svelte";
  import { fetch as fetchPrice, price } from "./stores/price.js";

  export function hei() {
    console.log("HEI");
    return "hallo";
  }
  hei();
  
  onMount(fetchPrice);

</script>

<p>The price is: ${$price}</p>