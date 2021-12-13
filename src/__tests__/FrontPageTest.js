import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'

import Front from "../Front.svelte"
import App from "../App.svelte"
import { patientName } from "../SmartOnFhirStore"
import { writable, derived } from "svelte/store";

// jest.mock('../SmartOnFhirStore', () => ({
//   patientName: writable("ABRAM LEMKE")
// }))

test('shows proper heading when rendered', () => {
  // render(App)

  const {getByText} = render(Front, {name: 'World'})

  expect(getByText('HELLOO ABRAM LEMKE!')).toBeInTheDocument()
})
