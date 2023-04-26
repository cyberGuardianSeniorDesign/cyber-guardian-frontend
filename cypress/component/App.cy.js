import React from 'react'
import App from '../../src/App.js'

//<App /> renders
describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})