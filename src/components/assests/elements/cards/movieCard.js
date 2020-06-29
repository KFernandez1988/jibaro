import React from 'react';
import { Link } from 'react-router-dom'

import H2 from '../../atoms/typepography/headingTwo'
import H3 from '../../atoms/typepography/headingThree'
import ThumbsDown from '../../atoms/icons/thumbsDown'
import ThumbsUp from '../../atoms/icons/thumbsUp'
import Button from '../../atoms/buttons/primary'


// card base props to create browser size card
const movieCard = (props) => {
    let {rate, rating, category, src, movieName, id, movie } =  props
        rate =  rate ? rate : 50; 
        rating = rating? rating: 'none';
        category = category? category  : 'unique';

    let icon = rate <= 55? <ThumbsDown /> : <ThumbsUp />


    // rendering cards with dynamic links
    return (
        <section style={styles.section(src)} key={id}>
            <div style={styles.heads()} >
              <div>
                  <H2 text={movieName} />
                  <H3 text={`${rate}, ${category}`} />
              </div>
                <div style={styles.div()}>
                    <H3 text={rating + "%"} />
                    {icon}
                </div>
                <div style={styles.buttons()}>
                <Link  to={
                    {
                        pathname: `/video/${id}`,
                        state: {movie: movie}
                    }
                }>
                     <Button text={'watch'} bColor={'#34463E'} />
                  </Link>
                    <Button text={'save'} />
                </div>
            </div>

        </section>
    );
}

const styles = {
    section : src => ({
        display: 'inline-block',
        background: 'green',
        backgroundImage: 'url(' + src + ')',
        width: '300px',
        height: '175px',
        borderRadius: '6px',
        margin: '5px',
        boxSizing: 'border-box'
    }),
    div : () => ({
        width: '25%',
        height: '25%',
        margin: '10px',
        padding: '0',
        display : 'flex',
        alignItems: 'flex-start',
        justifyContent: ' space-around'
    }),
    heads : () => ({
        width: '100%',
        height: '25%',
        margin: '5px',
        padding: '15px 0px',
        display : 'flex',
        flexFlow: 'wrap',
        alignItems: 'flex-start',
        justifyContent: ' space-around'
    }),
    buttons : () => ({
        display: 'flex',
        width: '100%',
        marginTop: '25px'
    })

}
 
 
export default movieCard;
