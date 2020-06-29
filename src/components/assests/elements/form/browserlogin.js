import React from 'react';


import Logo  from '../../atoms/icons/logo'
import User from '../../atoms/icons/username'
import Lock from '../../atoms/icons/lock'
import Input from '../../atoms/formfields/input'
import Button from '../../atoms/buttons/primary'

const login = (props) => {
    return (
        <form style={styles}>
            <Logo />
            <Input 
            name={'user'}
            label={'username'}
            icon={<User />}
            />
             <Input 
            name={'pass'}
            label={'password'}
            icon={<Lock />}
            />

          <Button text={'Log In'} onclick={ () => {
              alert('page is in protoype mode')
          }}
          />
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

export default login;
