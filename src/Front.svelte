<script>
	import { writable, derived } from "svelte/store";
	import { patientName } from "./SmartOnFhirStore";
	import {fhir, patient, documentId} from 'dips-smart-on-fhir-svelte'

	import {testString, testString2} from "./Comp.svelte"

	export let name;

</script>

<main>
	<h1 class="header">Helloo {$patientName}!</h1>
	<h2>Document: {$documentId}</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>{testString}</p>
	<p>{testString2}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>