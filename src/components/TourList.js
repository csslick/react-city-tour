import React, { Component } from 'react';
import Tour from './Tour';

class TourList extends Component {

  render() {
    const tours = this.props.data;
    const {removeTour} = this.props;
    console.log('Tourlist ', tours);
    console.log('TourList.js - removeTour', removeTour);

    return (
      <>
        {/* <h2>Tour List</h2> */}
          {
            tours.map(tour => (
                <Tour 
                  key={tour.id} 
                  data={tour}
                  removeTour={removeTour}
                />
              )
            )
          }
      </>
    );
  }
}

export default TourList;