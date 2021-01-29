import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import OurClasses from './Components/OurClasses/OurClasses';
import ClassSchedule from './Components/ClassSchedule/ClassSchedule';
import Price from './Components/Price/Price';
import MemberShip from './Components/MemberShip/MemberShip';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/our-classes">
          <OurClasses />
        </Route>
        <Route exact path="/class-schedule">
          <ClassSchedule />
        </Route>
        <Route exact path="/pricing-plan">
          <Price></Price>
        </Route>
        <Route exact path="/member-ship">
          <MemberShip></MemberShip>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;