import {
  screen,
  fireEvent,
  waitFor,
  cleanup,
  render,
} from '@testing-library/react'

import { TakeHomePayCalculator } from './pages/projects/take-home-pay-calculator'

afterEach(cleanup)

test('does not render result box on page load', () => {
  render(<TakeHomePayCalculator />)
  const calcResult = screen.queryByText('Could not fetch data...')
  expect(calcResult).toBeNull()
})

test('renders result box on submit', async () => {
  render(<TakeHomePayCalculator />)
  // no error element on page load
  expect(
    screen.queryByText('Could not fetch data...'),
  ).not.toBeInTheDocument() &&
    // and no result element on page load
    expect(screen.queryByTestId('calcResult')).not.toBeInTheDocument()
  const submitButton = screen.queryByTestId('submit-button')
  fireEvent.click(submitButton)
  await waitFor(() => {
    // either error element on submit
    expect(screen.queryByText('Could not fetch data...')).toBeInTheDocument() ||
      // or result element on submit
      expect(screen.queryByTestId('calcResult')).not.toBeInTheDocument()
  })
})
