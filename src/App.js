
import React from 'react';

import NAVIGATIONDATA from '../data/navigation'
import Navigation from './components/navigation/navigation.component'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
        navigationItems: NAVIGATIONDATA.cities
    }
  }

  render () {
    return (
      <div>
         <Navigation items={this.state.navigationItems} />
      </div>
    )
  }
}

export default App;
