const Rating = () => {

    let choice = Math.floor(Math.random() * (7 - 1 + 1) ) + 1;
    let rated = '';
    switch(choice) {
      case 1 :
        rated = 'g';
      break;
      case 2 :
        rated = 'pg';
      break;
      case 3 :
        rated = 'pg13';
      break;
      case 4 :
        rated = 'r';
      break;
      case 5 :
       rated = 'nc17';
      break;
      case 6 :
       rated = 'unrated';
      break;
      case 7 :
       rated = 'not rated';
      break;
      default :
       rated = 'unique';
      break;
      
    }
    return rated;
}


export default Rating