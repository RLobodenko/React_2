import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink} from 'react-router-dom'
import About from './About/About'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Сотрудники</NavLink>
            </li>
            <li>
              <NavLink to="/about">Главная</NavLink>
            </li>
            
          </ul>
        </nav>

        <hr/>

        {/*localhost:3000*/}
        <Route path="/" exact render={() => <h1>Иван<br>Геннадий<br>Валерия<br>Виктория</h1>} />
        <Route path="/about" component={About} />
      

      </div>
    );
  }
}

export default App
