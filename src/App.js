import React, { Component } from 'react';
import SearchForm from './components/searchFormComponent';
import SearchResult from './components/searchResultComponent';


class App extends Component {

  render() {


    return (
      <div className="App col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">

          <SearchForm />
          <SearchResult />

      </div>
    );
  }
}

export default App;
