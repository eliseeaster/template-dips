
import { writable, derived } from "svelte/store";
import {patient} from 'dips-smart-on-fhir-svelte'

// Example of how you can use the fhir client from 'dips-smart-on-fhir-svelte'
	export const patientName = derived(
    patient,
    ($patient, set) => {
        if ($patient != null && $patient.name != null) {
            let familyName = $patient.name[0].family;
            let givenName = $patient.name[0].given[0];
            let patientName = givenName + " " + familyName;
            set(patientName);
        }
    }
);