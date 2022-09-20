import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { CreateAccount } from './pages/CreateAccount';

test('Homepage link exists', () => {
  render(<App />)

  expect(screen.getAllByText('Welcome to Baddest Bank')[0]).not.toBeNull()
  expect(screen.getAllByText('Home')[0]).not.toBeNull()
})

describe('Create account functionality', () => {
  // render create account page
  render(<App><CreateAccount /></App>)

  // find and store form control components
  const name = screen.getByLabelText('Name')
  const password = screen.getByLabelText('Password')
  const email = screen.getByLabelText('Email Address')
  const button = screen.getByText('Create')
  
  // fill out and submit form
  fireEvent.change(name, {target:{value:'joe'}})
  fireEvent.change(password, {target:{value:'no'}})
  fireEvent.change(email, {target:{value:''}})
  fireEvent.click(button)

  // check if errors pop up
  const nameResult = screen.getByText('Username is too short.')
  const passwordResult = screen.getByText('Password is too short.')
  const emailResult = screen.getByText('Email address is required.')

  // single tests for each input
  it('Username at least 5 chars', () => {
    expect(nameResult).not.toBeNull()
  })
  it('Password at least 8 chars', () => {
    expect(passwordResult).not.toBeNull()
  })
  it('Email is not empty', () => {
    expect(emailResult).not.toBeNull()
  })
})