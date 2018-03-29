import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import apresentador from '../imgs/apresentador.png'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "770px",
    margin: '0 auto',
    '@media(min-width: 1024px)':{
      maxWidth: 1024
    }
  }),
  main: css({
    "position": "relative",
    "top": "50%",
    "transform": "translateY(-50%)",
    "MozTransform": "translateY(-50%)",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "OTransform": "translateY(-50%)", 
    display: 'flex',
    flexFlow: 'column',
    '@media(min-width: 1024px)':{
      flexFlow: 'row',
    },
    '> div':{
      flex: 1
    }
  }),
  infoWrapper: css({
    "position": "relative",
    "top": "50%",
    '@media(min-width:768px)':{
      "transform": "translateY(23%)",
      "MozTransform": "translateY(23%)",
      "WebkitTransform": "translateY(23%)",
      "MsTransform": "translateY(23%)",
      "OTransform": "translateY(23%)", 
    }
  }),
  apresentador: css({
    maxWidth: 300,
    display: 'block',
    margin: '0 auto',
    '@media(min-width: 768px)':{
      maxWidth: '100%'
    }
  }),
  header: css({
    "backgroundImage": `linear-gradient(to right, ${Globals.colors.red}, ${Globals.colors.purple}), linear-gradient(${Globals.colors.white}, ${Globals.colors.white})`,
    "fontFamily": Globals.fonts.bold,
    "fontSize": "36px",
    "lineHeight": "1.39",
    "WebkitBackgroundClip": "text",
    "backgroundClip": "text",
    textTransform: 'uppercase',
    "WebkitTextFillColor": "transparent"
  }),
  description: css({
    "fontFamily": Globals.fonts.regular,
    "fontSize": "18px",
    "lineHeight": "1.67",
    "color": Globals.colors.white
  })
}

const content = {
  id: 'apresentador',
  title: {
    type: 'h3',
    header: 'Matheus Marsiglio',
    color: [Globals.colors.yellow,Globals.colors.green]
  },
  img: apresentador,
  role: 'link',
  twitter: ['twitter', 'rfabeni'],
  github: ['github','rfabeni'],
  alt: 'Matheus Marsiglio',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  twitter: ['twitter', 'mmarsiglio'],
  github: ['github','mmarsiglio']
}

export default class Apresentador extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.role} id={content.id}>
          <div {...styles.container}>
            <div  {...styles.main}>
              <div {...styles.infoWrapper}>
                <Text type={content.title.type} label={content.title.header} color={content.title.color}/>
                <p {...styles.description}>{content.description}</p>
                <Button type={content.twitter[0]} link={content.twitter[1]}/>
                <Button type={content.github[0]} link={content.github[1]}/>
              </div>
              <div>
                <img src={content.img} alt={content.alt} {...styles.apresentador} />
              </div>
            </div>
          </div>
        </div>
        )
    }
}