
import React from 'react';
import { 
    BrowserRouter, 
    Route,
     Routes 
    } from 'react-router-dom'
import Contact from './pages/contacts/contacts';
    
import Home from './pages/home/home'
import Projects from './pages/projects';
import Suggestions from './pages/suggestions/suggestions';


export default function Rotas() {
    return (
       
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>} />
                <Route path="/suggestions" element={< Suggestions/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

/**
 * import React from 'react'
//import React from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Contact from './pages/contacts/contacts';
import Home from './pages/home/home'
import Projects from './pages/projects';

const Stack = createNativeStackNavigator()
export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
 */