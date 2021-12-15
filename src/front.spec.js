import {render, fireEvent, getByText} from '@testing-library/svelte'
import '@testing-library/jest-dom'

import Front from './Front.svelte'

const addNumbers = require("./AddNumbers.js");

test("add 2 numbers", () => {
    let s = addNumbers.addNumbers(2,3);
    expect(s).toBe(5);
});

test("subtract 2 numbers", () => {
    let s = addNumbers.subtractNumbers(4,3);
    expect(s).toBe(1);
});

test('shows text when rendered', () => {
    const {getByText} = render(Front, {name: 'World'})
    expect(getByText('Svelte tutorial')).toBeInTheDocument()
  })


jest.mock("./Comp.svelte", () => ({
    testString: "Truls",
    testString2: "Heii"
  }));

  test('shows Truls when rendered', () => {
    const {getByText} = render(Front, {name: 'World'})
    expect(getByText('Truls')).toBeInTheDocument()
  })

  test('shows Heii when rendered', () => {
    const {getByText} = render(Front, {name: 'World'})
    expect(getByText('Heii')).toBeInTheDocument()
  })



import { writable, derived } from "svelte/store";
import { patientName } from "./SmartOnFhirStore";

// jest.doMock("./SmartOnFhirStore.js", () => ({
//     patientName: mockPatientName 
// }));

// jest.doMock("./SmartOnFhirStore.js", () => {
//     return {
//         patientName: mockPatientName,
//     }
// });



test('shows the right patientName', () => {
    const mockPatientName = writable("Truls")
    jest.doMock("./SmartOnFhirStore", () => ({
        patientName: mockPatientName 
    }));
    const {getByText} = render(Front, {name: 'World'})
    expect(getByText('Helloo Truls')).toBeInTheDocument()
  })

