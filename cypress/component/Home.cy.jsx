import { BrowserRouter } from 'react-router-dom'
import Home from '../../src/components/pages/Home.jsx'
describe('Home.cy.jsx', () => {
  it('renders', () => {
    cy.mount(<BrowserRouter><Home /></BrowserRouter>)
    cy.get('[data-cy=intro-section]').children().should('have.length.at.least', 1)
    cy.get('[data-cy=intro-div-header]').should('have.text', 'What is Cyber Guardian?')
    cy.get('[data-cy=cards]').children().should('have.length.at.least', 1)
    cy.get('[data-cy=footer]')
  })
})