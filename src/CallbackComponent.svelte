<script>
  import { onMount } from "svelte";
  import { fetch as fetchPrice, price } from "./stores/price.js";

  onMount(fetchPrice);
  fetchPrice();
  fetchPrice();

   export const newMethod = () => {return "hei"};
</script>

<p>The price is: ${$price}</p>