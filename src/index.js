import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Frame1 from './views/frame1'
import Frame2 from './views/frame2'
import Factories from './views/factories'
import Frame8 from './views/frame8'
import Landingpage from './views/landingpage'
import Frame5 from './views/frame5'
import Frame4 from './views/frame4'
import Frame3 from './views/frame3'
import Frame7 from './views/frame7'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Frame2} exact path="/frame2" />
        <Route component={Factories} exact path="/factories" />
        <Route component={Frame8} exact path="/frame8" />
        <Route component={Landingpage} exact path="/landingpage" />
        <Route component={Frame5} exact path="/frame5" />
        <Route component={Frame4} exact path="/frame4" />
        <Route component={Frame3} exact path="/frame3" />
        <Route component={Frame7} exact path="/frame7" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
