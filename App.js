/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components'


import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import CenaContatos from './src/components/CenaContatos'
import CenaEmpresa from './src/components/CenaEmpresa'
import CenaServicos from './src/components/CenaServicos'

class App extends React.Component {
  render(){
    return (
        <Navigator
          initialRoute={{id: 'a'}}
          renderScene={(route, navigator)=>{
            if(route.id === 'a'){
              return(<CenaPrincipal navigator={navigator} />)
            }
            if(route.id === 'b'){
              return(<CenaClientes navigator={navigator} />)
            }
            if(route.id === 'contato'){
              return(<CenaContatos navigator={navigator} />)
            }
            if(route.id === 'empresa'){
              return(<CenaEmpresa navigator={navigator} />)
            }
            if(route.id === 'servico'){
              return(<CenaServicos navigator={navigator} />)
            }
          }}
         />
      );
  }
};

export default App;
