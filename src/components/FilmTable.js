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
        <div className="more-films">
          <a href="http://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0SE2X76X1B2AN3PHGNXC&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm">See more opening this week >></a>
        </div>
      </div>
    )
  }
};

export default FilmTable;
