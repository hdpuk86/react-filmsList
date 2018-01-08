import React from 'react';
import Film from './Film';

class FilmTable extends React.Component {
  render(){
    const films = this.props.films.map(film => {
      return <Film title={film.title} times={film.times} key={film.id}/>
    })
    return(
      <div className="filmTable">
        {films}
      </div>
    )
  }
};

export default FilmTable;
