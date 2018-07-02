import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Text from './Text'
import frontendbrasil from '../imgs/apoio-frontendbrasil.png'
import dne from '../imgs/apoio-dne.png'
import frontincampinas from '../imgs/apoio-frontincampinas.png'
import reactconfbr from '../imgs/apoio-reactconfbr.png'
import codamos from '../imgs/apoio-codamos.png'
import trainingcenter from '../imgs/apoio-trainingcenter.jpg'
import jsexperience from '../imgs/apoio-jsexperience.jpg'
import tableless from '../imgs/apoio-tableless.jpg'
import h4p from '../imgs/apoio-h4p.jpg'


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
      "height": "100vh"
    }
  }),
  card: css({
    width: 110,
    maxWidth: '100%',
    maxHeight: 110,
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: '10px 10px 4em',
    '@media(min-width: 720px)': {
      margin: '10px 10px 1em',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '0 auto',
    maxWidth: 768,
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
    borderBottom: '3px inset transparent',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:1024px)':{
      width: 110
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
      link: 'http://www.codamos.club/',
      alt: 'codamos',
      src: codamos
    },
    {
      link: 'http://www.trainingcenter.io/',
      alt: 'trainingcenter',
      src: trainingcenter
    },
    {
      link: 'https://eventos.imasters.com.br/jsexperience',
      alt: 'jsexperience',
      src: jsexperience
    },
    {
      link: 'http://www.tableless.com.br/',
      alt: 'tableless',
      src: tableless
    },
    {
      link: 'http://help4papers.com.br/',
      alt: 'help4papers',
      src: h4p
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
              <div {...styles.cards}>
                {content.sponsors.map((photo,index) => {
                  return (
                    <div key={index} {...styles.card}>
                      <a
                        href={photo.link}
                        tabIndex='10'
                        rel="noopener noreferrer"
                        target="_blank"
                        className="notranslate"
                        {...css({
                          backgroundImage: `url('${photo.src}')`,
                          backgroundSize: 'cover',
                          cursor: 'pointer',
                          backgroundPosition: 'center',
                          height: 110,
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