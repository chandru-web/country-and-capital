import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeState: countryAndCapitalsList[0].id}

  handleChange = event => {
    this.setState({activeState: event.target.value})
  }

  render() {
    const {activeState} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      item => item.id === activeState,
    )
    return (
      <div className="app-container">
        <div className="country-capital-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="select-container">
            <select value={activeState} onChange={this.handleChange}>
              {countryAndCapitalsList.map(eachState => (
                <option key={eachState.id} value={eachState.id}>
                  {eachState.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h2 className="country-name">{selectedCountry.country}</h2>
        </div>
      </div>
    )
  }
}
export default Capitals
