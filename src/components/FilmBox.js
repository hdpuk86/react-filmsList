import React from 'react';
import FilmTable from './FilmTable';

class FilmBox extends React.Component {
  render(){
    return(
      <React.Fragment>
        <FilmTable />
      </React.Fragment>
    )
  }
};

export default FilmBox;
