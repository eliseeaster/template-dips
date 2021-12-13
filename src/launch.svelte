<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {	

		Smart.authorize({
			clientId: 'sykepenger_dokument',
			scope: 'launch openid fhirUser patient/*.read patient/*.write offline_access documentReference/*.read documentReference/*.write',
			patientId: "123",
			redirectUri: './app',			
            iss:'https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4',
			launch:	'cdp2010025::DocumentReference/ako1006604'

		});
		
	});
</script>  