import React from 'react';
import{
    createSwitchNavigator,
    createAppContainer,
   
}from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TabBar from './pages/TabBar';


const AppSwitchNavigator = createSwitchNavigator(
    {
        Welcome: {
            screen: Welcome
        },
        Login: {
            screen: Login
        },
        SignUp: {
            screen: SignUp
        },
        TabBar:{
            screen: TabBar         
        },
       
    },
    {
        initialRouteName: 'Welcome' //Welcome.js  appear when application is running
    }  
)
export default createAppContainer(AppSwitchNavigator);