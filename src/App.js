import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './Globals'

import Header from './componentes/Header'
import Evento from './componentes/Evento'
import Apresentador from './componentes/Apresentador'
import Local from './componentes/Local'
import CallForPapers from './componentes/CallForPapers'
import Patrocinadores from './componentes/Patrocinadores'
import Apoiadores from './componentes/Apoiadores'
import Construtores from './componentes/Construtores'
import Contato from './componentes/Contato'

import background_dots from './imgs/background-dots.png'
import './css/styles.css'

const styles = {
  mousewheel: css({
    position: 'fixed',
    background: 'white'
  }),
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

// var itemTranslate = Patrocinadores

class App extends Component {

  render() {    
    return (
    <div id="root" {...styles.root} tabIndex="1">
      <div {...styles.main}>
        <Header/>
        <Evento/>
        {/*<Palestrantes/>*/}
        <Apresentador/>
        <Local/>
        <CallForPapers/>
        <Patrocinadores/>
        <Apoiadores/>
        <Construtores/>
        <Contato/>
      </div>
    </div>
    );
  }
}

export default App;
