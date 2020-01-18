import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DestinationDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";
import { comment } from 'postcss-selector-parser';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          destination={this.state.destinations.filter((destination) => destination.featured)[0]} 
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
          />
      );
    }

    const DestinationWithId = ({match}) => {
      return(
        <DestinationDetail 
        destination={this.state.destinations.filter((destination) => destination.id === parseInt(match.params.destinationId,10))[0]}
        comments = {this.state.comments.filter((comment) => comment.destinationId === parseInt(match.params.destinationId,10))}
        />
      )

    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/destinations" component={() => <Menu destinations={this.state.destinations} />} />
              <Route path="/:destinationId" component={DestinationWithId} />
              {/* <Route path="/places/:destinationId/:cityId" component={DestinationWithId} /> */}
              <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
              <Route exact path="/contactus" component={Contact}/>
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
