import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../../../assests/elements/form/searchBar'
import BackArrow from '../../../assests/atoms/icons/backArrow'
import FowardArrow from '../../../assests/atoms/icons/forwardArrow'
import H2 from '../../../assests/atoms/typepography/headingTwo'


// home search result componentes for mobile version
const search = (props) => {

     // creating cards arrays
     let listMovieCard = []
// build card list with dynamic links
     listMovieCard = props.search.map( movieCard => (
        
             <article style={styles.card()} >
               <div style={{padding: '0 10px'}}>
                 <H2 text={movieCard.name} />
                </div>
                <Link to={
                {
                    pathname: `/video/${movieCard.id}`,
                    state: { movie: movieCard }
                }
             }>
                    <button style={styles.button()} >
                      <FowardArrow />
                    </button>
                 </Link>
             </article>
       
      )
     )
     // rendering for mobile size
    return (
        <div style={styles.body()}>
              <div style={ styles.controller() }>
                  <div>
                   <BackArrow />
                  </div>
                 <form>
                    <SearchBar 
                    size={'240px'}
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
        widht: '100%',
        margin: '0',
        padding: '10px'
    }),
    cardsDeck : () => ({
        width : '100%',
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-around',
        padding: '0px',
        margin: '10px 0',
    }),
    card :() =>  ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        backgroundColor: '#34463E',
        borderRadius: '6px',
        height: '60px',
        width: '75%',
        padding: '0',
        margin: '5px auto'
    }),
    controller: ()=> ({
        display: 'flex',
        justifyContent: 'space-around',
        alignItems : 'center',
        width: '100%',
        padding: '20px 0',
        margin: '0'
    }),
    button : ()=> ({
       borderRadius: '0 6px 6px 0',
       backgroundColor: '#517B64',
       height: '60px',
       border: 'none'
    })

}

export default search;
