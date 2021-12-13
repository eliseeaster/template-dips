<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {	

		Smart.authorize({
			clientId: 'sykepenger_dokument',
			scope: 'launch openid fhirUser patient/*.read patient/*.write offline_access documentReference/*.read documentReference/*.write',
			patientId: "123",
			redirectUri: './app',			
            iss:'https://foi.dips.fhir.service.sandbox.dips.no',
			launch:	'6c5d9ca9-54d7-42f5-bfae-a7c19cd217f2::DocumentReference/b3e32146-848c-4d3b-b8a9-c9b3a7861a6a'

		});
		
	});
</script>  