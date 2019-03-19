import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import TourList from "./components/TourList";
import { tourData } from "./tourData";

class App extends Component {
  state = {
    tours: tourData
  }

  removeTour = (id) => {
    console.log(id)
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => {
      return tour.id !== id
    })
    this.setState({
      tours: sortedTours
    })
  }

  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <>
        <h1 className='head'>City Tour App</h1>
        <Navbar />
        <TourList data={tours} removeTour={this.removeTour} />
      </>
    );
  }
}

export default App;
