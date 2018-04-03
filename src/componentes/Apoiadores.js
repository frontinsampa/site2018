import React, { Component } from 'react'
import {css,style} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import frontendbrasil from '../imgs/apoio-frontendbrasil.png'
import dne from '../imgs/apoio-dne.png'
import frontincampinas from '../imgs/apoio-frontincampinas.png'
import reactconfbr from '../imgs/apoio-reactconfbr.png'
import codamos from '../imgs/apoio-codamos.png'


const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "770px",
    paddingTop: 60,
    margin: '0 auto',
    '@media(min-width: 768px)':{
      paddingTop: 60,
      maxWidth: 1024,
      "height": "600px"
    },
    '@media(min-width: 1024px)':{
      paddingTop: 103,
      maxWidth: 1024,
      "height": "500px"
    }
  }),
  main: css({
    "position": "relative",
    "top": "35%",
    "transform": "translateY(-50%)",
    "MozTransform": "translateY(-50%)",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "OTransform": "translateY(-50%)", 
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-around', 
    flexFlow: 'column wrap', 
    alignItems: 'center',
    alignContent: 'flex-start',
    '@media(min-width: 768px)':{
      flexFlow: 'row wrap',
      alignItems: 'stretch'
    },
    '> li':{
      flex: 1,
      maxWidth: 241,
      padding: '10px 0'
    }
  }),
  src: css({
    width: 110,
    height: 110,
    backgroundSize: 'contain',
    display: 'block',
    WebkitFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:1024px)':{
      width: 110
    },
    '&:hover':{
      WebkitFilter: 'grayscale(0%)',
      filter: 'grayscale(0%)',
      transition: '210ms'
    }
  }),
  infos: css({
    position: 'absolute',
    bottom: 30,
    left: 30
  })
}

const content = {
  id: 'apoiadores',
  title: {
    type: 'h3',
    header: 'apoiadores',
    align: 'center',
    color: [Globals.colors.white,Globals.colors.white]
  },
  role: 'link',
  sponsors: [
    {
      link: 'https://github.com/frontendbr',
      alt: 'frontend brasil',
      src: frontendbrasil
    },
    {
      link: 'https://devnaestrada.com.br/',
      alt: 'devnaestrada',
      src: dne
    },
    {
      link: 'https://frontincampinas.com.br/',
      alt: 'front in campinas',
      src: frontincampinas
    },
    {
      link: 'http://www.reactconfbr.com.br/',
      alt: 'reactconfbr',
      src: reactconfbr
    },
    {
      link: 'http://www.codamos.com.br/',
      alt: 'codamos',
      src: codamos
    }
  ]
}

export default class Apoiadores extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.link} id={content.id}>
          <div {...styles.container}>
            <Text type={content.title.type} label={content.title.header} align={content.title.align} width={content.title.width} margin={content.title.margin} color={content.title.color} />
            <Text type={'normal'} label={content.title.description} align={content.title.align}/>
              <ul {...styles.main}>
                {content.sponsors.map((photo,index) => {
                  return(
                    <li key={index}>
                      <a tabIndex='10' href={photo.link}>
                        <img src={photo.src} alt={photo.alt} {...styles.src}/>
                      </a>
                    </li>
                  )
                })}
              </ul>
          </div>
        </div>
        )
    }
}