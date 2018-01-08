import React from 'react';

class Film extends React.Component {
  render(){
    return(
      <div className="film">
        <div className="film-title">
          <img src="./bookmark.png" alt="bookmark" height="40px"/>
          <p>{this.props.title}</p>
        </div>
        <p>Showtimes</p>
      </div>
    )
  }
};

export default Film;
