import React, { Component } from 'react'
import {css} from 'glamor'

import Navigation from './Navigation'
import Hero from './Hero'
import hero from '../imgs/hero.jpg'
import logo from '../imgs/logo-frontinsampa.png'

const styles = {
  hero:css({
    "background": `url(${hero}) no-repeat`,
    "backgroundSize": "cover",
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "770px",
    margin: '0 auto',
    '@media(min-width: 1024px)':{
      maxWidth: 1024
    },
  }),
  header:css({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "top": "30px",
    "flexBasis": "100%",
  }),
  headerLogo:css({
    "background": `url(${logo}) no-repeat left`,
    "width": "53px",
    "height": "60px",
    "transition": ".4s",
    "textIndent": "-9999px"
  })
}

const content = {
  title: 'Frontinsampa'
}

export default class Header extends Component {

    render(){
        return (
        <div {...styles.hero}>
          <div {...styles.container}>
            <header {...styles.header}>
              <h1 {...styles.headerLogo}>
                {content.title}
              </h1>
              <Navigation />
            </header>
            <Hero />
          </div>
        </div>
        )
    }
}