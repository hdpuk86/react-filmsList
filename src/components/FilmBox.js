import React from 'react';
import FilmTable from './FilmTable';
import ShowtimesButton from './ShowtimesButton';

class FilmBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      films: [
        {id: 1, title: "Sausage Party", times: ["20:30", "23:00"]},
        {id: 2, title: "Café Society", times: ["11:00", "16:00", "18:45"]},
        {id: 3, title: "Morgan", times: ["12:15", "17:00"]},
        {id: 4, title: "The 9th Life of Louis Drax", times: ["16:50", "22:00"]},
        {id: 5, title: "Naam Hai Akira", times: ["10:00"]},
        {id: 6, title: "Equity", times: ["19.00", "22:00"]},
        {id: 7, title: "Things To Come", times: ["15:00"]}
      ]
    }
  }

  render(){
    return(
      <div className="container">
        <h3>UK Opening This Week</h3>
        <FilmTable films={this.state.films}/>
        <ShowtimesButton />
      </div>
    )
  }
};

export default FilmBox;
