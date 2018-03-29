import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './Globals'

import Header from './componentes/Header'
import Evento from './componentes/Evento'
import Palestrantes from './componentes/Palestrantes'
import Apresentador from './componentes/Apresentador'
import Local from './componentes/Local'
import Patrocinadores from './componentes/Patrocinadores'
import Construtores from './componentes/Construtores'
import Contato from './componentes/Contato'
import Footer from './componentes/Footer'

import background_dots from './imgs/background-dots.png'

const styles = {
  root:css({
    width: '100%',
    background: Globals.colors.black
  }),
  main:css({
    width: '100%',
    background: `url(${background_dots}) repeat left`,
    "backgroundSize": "contain"
  })
}

class App extends Component {
  render() {    
    return (
    <div id="root" {...styles.root}>
      <div {...styles.main}>
        <Header/>
        <Evento/>
        <Palestrantes/>
        <Apresentador/>
        <Local/>
        <Patrocinadores/>
        <Construtores/>
        <Contato/>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
