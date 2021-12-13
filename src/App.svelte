<script>
	import {Router, Route} from "svelte-routing";
	import Launch from "./Launch.svelte";
    import Front from "./Front.svelte"


	export let url = "";

</script>

<Router url={url}>
	<Route path="/">
		<Launch/>
	</Route>
	<Route path="/app">
		<Front/>
	</Route>
</Router>