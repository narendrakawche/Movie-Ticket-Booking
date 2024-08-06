import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/events" component={EventList} />
        <Route path="/event/:id" component={EventDetail} />
        <Route path="/seat-selection/:id" component={SeatSelection} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </div>
  );
}

export default App;
