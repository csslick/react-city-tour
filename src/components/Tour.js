import React, { Component } from 'react';

class Tour extends Component {

  state = {
    showInfo: false,
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
    console.log(this.state.showInfo)
  }

  render() {
    const { id, city, img, name, info} = this.props.data;
    const { removeTour } = this.props;
    console.log('tour.js - removeTour', removeTour)
    // console.log(this.props)

    return (
      <section className='tourlist'>
        <figure>
          <img src={img} alt={city} width="300px" />
          <span className='close-btn'>
            <i className="far fa-window-close"></i>
          </span>
        </figure>  
        <div className='tour-info-box'>
          <h3>{city}</h3>
          <figcaption>{name}</figcaption>
          <span onClick={this.handleInfo}>
            info <i className="fas fa-caret-square-down"></i>
          </span>
          {
            this.state.showInfo ? 
              <p className="tour-info">{info}</p> : null
          }
          
        </div>
      </section>
    );
  }
}

export default Tour;