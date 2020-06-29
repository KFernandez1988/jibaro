import React from 'react';


import Logo  from '../../atoms/icons/logo'
import User from '../../atoms/icons/username'
import Lock from '../../atoms/icons/lock'
import Input from '../../atoms/formfields/input'
import Button from '../../atoms/buttons/primary'
import H5 from '../../atoms/typepography/headingFour'

const login = (props) => {
    return (
        <form style={styles}>
            <Logo />
            <Input 
            name={'user'}
            label={'username'}
            icon={<User />}
            />
          <div  styles={alignment}>
            <Input 
             name={'pass'}
             label={'password'}
             icon={<Lock />}
            />
            <H5 text={'Forgot password?'} textColor={'#A4C3B2'} />
          </div>
            

          <Button text={'Log In'} onclick={ () => {
              alert('page is in protoype mode')
          }}
          />
         <div>
             <H5 text={'sign up'} textColor={'#A4C3B2'} />
         </div>
        </form>
    );
}

const styles = {
    width: '320px',
    height: '570px',
    backgroundColor: '#F6FFF8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
}
const alignment = {
    textAlign: 'center'
}

export default login;
