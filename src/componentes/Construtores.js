import React, { Component } from 'react'
import {css,style} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import speaker_julian from '../imgs/speaker_julian.png'
import speaker_rfabeni from '../imgs/speaker_rfabeni.png'
import construtores_keit from '../imgs/construtores_keit.png'
import construtores_deivid from '../imgs/construtores_deivid.png'
import construtores_marco from '../imgs/construtores_marco.png'
import construtores_dan from '../imgs/construtores_dan.png'

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
      "height": "770px"
    },
    '@media(min-width: 1024px)':{
      paddingTop: 103,
      maxWidth: 1024,
      "height": "600px"
    }
  }),
  main: css({
    "position": "relative",
    "top": "45%",
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
  photo: css({
    width: 241,
    height: 250,
    backgroundSize: 'contain',
    WebkitFilter: 'grayscale(100%)',
    filter: 'grayscale(100%)',
    display: 'block',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
    '> div':{
      transition: '210ms ease-in',
      marginBottom: -100
    },
    '&:hover':{
      WebkitFilter: 'grayscale(0%)',
      filter: 'grayscale(0%)',
      transition: '210ms',
      cursor: 'pointer',
      '> div':{
        marginBottom: 0
      }
    },
    '@media(min-width:1024px)':{
      width: 241
    }
  }),
  src: css({
    width: 241,
    height: 250,
    backgroundSize: 'contain',
    
    display: 'block',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:1024px)':{
      width: 241
    },
    '@media(min-width:1100px)':{
      width: 241
    }
  }),
  infos: css({
    position: 'absolute',
    width: '100%',
    display: 'block',
    background: "linear-gradient(to bottom, transparent, rgba(0,0,0,1))",
    paddingBottom: 20,
    paddingTop: 50,
    bottom: 0,
    left: 0,
    paddingLeft: 30
  })
}

const content = {
  id: 'construtores',
  title: {
    type: 'h3',
    header: 'construtores',
    align: 'center',
    color: [Globals.colors.white,Globals.colors.white]
  },
  role: 'link',
  sponsors: [
    {
      twitter: ['twitter', 'rfabeni'],
      github: ['github','rfabeni'],
      name: 'deivid marques',
      src: construtores_deivid
    },
    {
      twitter: ['twitter', 'rfabeni'],
      github: ['github','rfabeni'],
      name: 'keit oliveira',
      src: construtores_keit
    },
    {
      twitter: ['twitter', 'rfabeni'],
      github: ['github','rfabeni'],
      name: 'marco bruno',
      src: construtores_marco
    },
    {
      twitter: ['twitter', 'rfabeni'],
      github: ['github','rfabeni'],
      name: 'dan vitoriano',
      src: construtores_dan
    }
  ]
}

export default class Construtores extends Component {

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
                      <div {...style({ backgroundImage: `url(${photo.src})`})} {...styles.photo}>
                        <div {...styles.infos}>
                          <Text type={'h6'} label={photo.name}/>
                          <Button tabIndex='11' type={photo.twitter[0]} link={photo.twitter[1]}/>
                          <Button tabIndex='11' type={photo.github[0]} link={photo.github[1]}/>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
          </div>
        </div>
        )
    }
}