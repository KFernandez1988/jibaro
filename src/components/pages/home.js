import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import categories from '../../controller/moviesFactory/moviesCategory'
import rated from '../../controller/moviesFactory/moviesRated'
import rating from '../../controller/moviesFactory/moviesRating'

import BrowserSearchResults from '../screenSize/browser/searchResults/searchResults'
import MobileSearcResults from '../screenSize/moblie/searchResults/searchResults'

class home extends Component {

    //placeholder state
 state =  {
     movies : [],
 // search iten array (where search input is save)
     search : []
}

// fetching needed data for thee application
componentDidMount() {
    this.setState({videosList: []})
    fetch('https://pixabay.com/api/videos/?key=17004747-4fedee7cd990d0ed3ec1f708c&per_page=50' , {
      method: 'GET',
      mode: 'cors'
    })
    .then( data => data.json())
    
    .then( vid =>  vid.hits.map( v => (
      {
        id: v.id,
        name: v.tags.split(',')[0],
        rate: rated(),
        rating: rating(),
        category: categories(),
        src: v.userImageURL,
        videos : v.videos.medium
      }
     )
    ))
    // populating state with the fetch date
    .then( movies => { 
        movies.map( movie => this.state.movies.push(movie))
        this.setState({...movies})
    })

  }

 // search function 
 search = (event, search) => {
     event.preventDefault();

     this.setState({search: []})
     let found = []
     this.state.movies.forEach(item => {
          
          if(item.name.includes(search) && search.length > 0 ) {
             
                found.push(item)
               
          }
          
     })
     this.setState({search: found})
 }
  
    render() {
       // render component for each device size
        let renderScreenSize 
        if( window.screen.width <= 380 ) {
            renderScreenSize = <MobileSearcResults search={ this.state.search } results={this.search} />
        } else if(window.screen.width >= 381 && window.screen.width <= 900) {
            renderScreenSize = 'tablet size'
        } else { 
            renderScreenSize = <BrowserSearchResults search={ this.state.search } results={this.search} />
        }
       
         
        // jsx tags for web page
        return (
            <div style={styles.body()}>
                {renderScreenSize}
            </div>
        );
    }
}


// css style properties
const styles = {
    body: () => ({
        backgroundColor: '#A4C3B2',
        minHeight: '100vh',
        widht: '100%'
    }),
    
}

// home.propTypes = {

// };


export default home;
