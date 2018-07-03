import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Text from './Text'
import locaweb from '../imgs/locaweb.png'
import neon from '../imgs/neon.png'
import contaazul from '../imgs/contaazul.png'
import iq360 from '../imgs/iq360.png'
import cubo from '../imgs/cubo.png'
import daitangroup from '../imgs/daitan.jpg'
import vanhack from '../imgs/vanhack.jpg'
import revelo from '../imgs/revelo.jpg'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "1300px",
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
      "height": "100vh"
    }
  }),
  card: css({
    width: 241,
    maxWidth: '100%',
    maxHeight: 130,
    padding: 20,
    borderRadius: 0,
    margin: '0',
    '@media(min-width: 720px)': {
      margin: 0,
    },
    '> a': {
      textIndent: '-9999px',
      overflow: 'hidden',
      textDecoration: 'none',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    margin: '0 auto',
    maxWidth: 1023,
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
    width: 241,
    height: 130,
    backgroundSize: 'contain',
    display: 'block',
    margin: '0 auto',
    borderBottom: '3px inset transparent',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:1024px)':{
      width: 241
    },
    '@media(min-width:1100px)':{
      width: 241
    },
    '&:hover':{
      borderBottom: '3px inset ' + Globals.colors.red,
      transition: '210ms',
      cursor: 'pointer'
    }
  }),
  infos: css({
    position: 'absolute',
    bottom: 30,
    left: 30
  })
}

const content = {
  id: 'patrocinadores',
  title: {
    type: 'h3',
    header: 'patrocinadores',
    align: 'center',
    color: [Globals.colors.white,Globals.colors.white]
  },
  role: 'link',
  sponsors: [
    {
      link: 'https://locaweb.com.br/',
      alt: 'Locaweb',
      src: locaweb
    },
    {
      link: 'https://www.neon.com.br/',
      alt: 'Neon',
      src: neon
    },
    {
      link: 'https://www.iq360.com.br/',
      alt: 'IQ 360',
      src: iq360
    },
    {
      link: 'https://cubo.network',
      alt: 'Cubo',
      src: cubo
    },
    {
      link: 'http://contazul.com.br/',
      alt: 'ContaAzul',
      src: contaazul
    },
    {
      link: 'http://daitangroup.com/',
      alt: 'Daitan',
      src: daitangroup
    },
    {
      link: 'https://vanhack.com/',
      alt: 'VanHack',
      src: vanhack
    },
    {
      link: 'https://revelo.com.br',
      alt: 'Revelo',
      src: revelo
    }
    
  ]
}

export default class Patrocinadores extends Component {

    render(){
      return (
        <div {...styles.hero} role={content.link} id={content.id}>
          <div {...styles.container}>
            <Text type={content.title.type} label={content.title.header} align={content.title.align} width={content.title.width} margin={content.title.margin} color={content.title.color} />
            <Text type={'normal'} label={content.title.description} align={content.title.align}/>
              <div {...styles.cards}>
                {content.sponsors.map((photo,index) => {
                  return (
                    <div key={index} {...styles.card}>
                      <a
                        href={photo.link}
                        tabIndex='9'
                        rel="noopener noreferrer"
                        target="_blank"
                        className="notranslate"
                        {...css({
                          backgroundImage: `url('${photo.src}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: 130,
                          cursor: 'pointer',
                          display: 'block'
                        })}
                      >
                        {photo.alt}
                      </a>
                      
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
        )
    }
}