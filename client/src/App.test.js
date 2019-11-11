import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import Navbar from './components/navbar'
import Player from './components/player'

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);


describe('Navbar', () => {
  it('has an element with the text player', () => {
    const simulatedDOM = rtl.render(<Navbar />);
    const nav1 = simulatedDOM.getByText(/player list/i);
    expect(nav1).toBeInTheDocument()
  })
  it('has an element with the role of nav', () => {
    const simulatedDOM = rtl.render(<Navbar />);
    const nav2 = simulatedDOM.getByRole(/nav/i)
    expect(nav2).toBeInTheDocument()
  })

})

describe('Player', () => {
  it('has an element with the text searches', () => {
    const simulatedDOM = rtl.render(<Player />);
    const div1 = simulatedDOM.getByText(/searches/i)
    expect(div1).toBeInTheDocument()
  })
  it('has an element with the text country', () => {
    const simulatedDOM = rtl.render(<Player />);
    const div1 = simulatedDOM.getByText(/country/i)
    expect(div1).toBeInTheDocument()
  })
})