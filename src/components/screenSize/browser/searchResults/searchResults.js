import React from 'react';
import MovieCard from '../../../assests/elements/cards/movieCard'
import SearchBar from '../../../assests/elements/form/searchBar'
import Logo from '../../../assests/atoms/icons/logo'
import BackArrow from '../../../assests/atoms/icons/backArrow'

// browser search result components
const search = (props) => {

     // creating cards arrays
     let listMovieCard = []


     // creating a list of card for the browser
     listMovieCard = props.search.map( movieCard => (
         <div style={styles.card()}>
           
             <MovieCard 
                 id={movieCard.id}
                 rate={movieCard.rate}
                 rating={movieCard.rating}
                 category={movieCard.category}
                 movieName={movieCard.name}
                 src={movieCard.src}
                 movie={ movieCard }
             />
          
         </div>
      )
     )

     // rendring browser size search website
    return (
        <div style={styles.body()}>
              <div style={ styles.controller() }>
                  <div>
                   <BackArrow />
                  </div>
                  <div>
                   <Logo />
                 </div>
                 <form>
                    <SearchBar 
                    action={props.results} />
                 </form>
                </div>
                <div style={ styles.cardsDeck() }>
                   {listMovieCard}
                </div>
                
            </div>
    );
}

const styles = {
    body: () => ({
        backgroundColor: '#A4C3B2',
        minHeight: '100vh',
        widht: '100%'
    }),
    cardsDeck : () => ({
        minWidth : '920px',
        width : '75%',
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-around',
        padding: '50px',
        margin: '10px auto',
    }),
    card :() =>  ({
        margin: '10px 0'
    }),
    controller: ()=> ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        width: '60vw',
        padding: '30px'
    })

}

export default search;
