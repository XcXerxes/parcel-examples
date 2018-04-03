import React, {Component} from 'react'
import './App.css'

export default class App extends Component {
  render () {
    debugger
    const list = [1, 2, 3].map((item, index) => 
      <h5 key={index}>{item}</h5>
    )
    return (
      <section>
        <h1>hello the first parcel!!!</h1>
        <div>{list}</div>
      </section>
    )
  }
}