import React, { Component } from 'react';
<<<<<<< HEAD
import SearchForm from './components/searchFormComponent';
import SearchResult from './components/searchResultComponent';

=======
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchForm from './Components/SearchFormComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();

// import logo from './logo.svg';
// import './App.css';
// import {search} from './lib/SpotifyUtil'
//  let  SearchFormTag = () => ( <MuiThemeProvider><SearchForm/></MuiThemeProvider>);
/* <SearchFormTag /> */

         
>>>>>>> origin

class App extends Component {

  render() {


<<<<<<< HEAD
    return (
      <div className="App col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">

          <SearchForm />
          <SearchResult />

      </div>
    );
  }
=======

    return (
      
      <div className="App">
        
 <MuiThemeProvider><SearchForm/></MuiThemeProvider> 
  
      </div>
    );
  }

>>>>>>> origin
}

export default App;
