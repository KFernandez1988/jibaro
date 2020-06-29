/* eslint-disable default-case */

const Category = () => {

    let choice = Math.floor(Math.random() * (8 - 1 + 1) ) + 1;
    let category = '';
    switch(choice) {
      case 1 :
        category = 'action';
      break;
      case 2 :
        category = 'comedy';
      break;
      case 3 :
        category = 'drama';
      break;
      case 4 :
        category = 'fantasy';
      break;
      case 5 :
       category = 'horror';
      break;
      case 6 :
       category = 'mystery';
      break;
      case 7 :
       category = 'romance';
      break;
      case 8 :
       category = 'thriller';
      break;
      default :
       category = 'unique';
      break;
      
    }
    return category;
}


export default Category