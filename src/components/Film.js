import React from 'react';

class Film extends React.Component {
  render(){
    return(
      <div className="film">
        <p>{this.props.title}</p>
        <p>Showtimes</p>
      </div>
    )
  }
};

export default Film;
