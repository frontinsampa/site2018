import React, { Component } from 'react'
import {css,style} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import speaker_rfabeni from '../imgs/speaker_rfabeni.jpg'
import speaker_febernardo from '../imgs/speaker_febernardo.jpg'
import speaker_daciuk from '../imgs/speaker_daciuk.jpg'
import speaker_alda from '../imgs/speaker_alda.jpg'
import speaker_matheuslima from '../imgs/speaker_matheuslima.jpg'
import speaker_lucas from '../imgs/speaker_lucas.jpg'
import speaker_man from '../imgs/speaker_man.jpg'
import speaker_woman from '../imgs/speaker_woman.jpg'
// import speaker_1 from '../imgs/speaker_1.png'
// import speaker_2 from '../imgs/speaker_2.png'
// import speaker_3 from '../imgs/speaker_3.png'
// import speaker_4 from '../imgs/speaker_4.png'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "2500px",
    paddingTop: 60,
    margin: '0 auto',
    '@media(min-width: 768px)':{
      paddingTop: 60,
      maxWidth: 1024,
      "height": "2330px"
    },
    '@media(min-width: 1024px)':{
      paddingTop: 103,
      maxWidth: 1024,
      "height": "1770px"
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
    justifyContent: 'space-between', 
    flexFlow: 'column', 
    alignItems: 'center',
    alignContent: 'flex-start',
    '@media(min-width: 1024px)':{
      "top": "42%",
      flexFlow: 'row wrap',
      alignItems: 'stretch'
    },
    '> li':{
      flex: 1,
      maxWidth: 425,
      padding: '20px 0',
      '@media(min-width:1024px)':{
        padding: '35px 0'
      }
    }
  }),
  photo: css({
    width: 300,
    height: 220,
    backgroundSize: 'contain',
    display: 'block',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:768px)':{
      width: 425,
      height: 290
    }
  }),
  infos: css({
    position: 'absolute',
    bottom: 30,
    left: 30
  })
}

const content = {
  id: 'palestrantes',
  title: {
    type: 'h3',
    header: 'um show com pessoas inspiracionais',
    align: 'center',
    width: 600,
    margin: '0 auto',
    color: [Globals.colors.red,Globals.colors.purple]
  },
  role: 'link',
  speakers: [{
    name: 'Raphael Fabeni',
    talk: 'Cultura de Desenvolvimento - Revisitada',
    twitter: ['twitter', 'raphaelfabeni'],
    github: ['github','raphaelfabeni'],
    photo: speaker_rfabeni
  },
  {
    name: 'Fernanda Bernardo',
    talk: 'Perceived Performance',
    twitter: ['twitter', 'Feh_Bernardo'],
    github: ['github','FernandaBernardo'],
    photo: speaker_febernardo
  },
  {
    name: 'Fernando Daciuk',
    talk: 'Immutable JavaScript',
    twitter: ['twitter', 'fdaciuk'],
    github: ['github','fdaciuk'],
    photo: speaker_daciuk
  },
  {
    name: 'Alda Rocha',
    talk: 'UXD: Manopla do infinito design',
    twitter: ['twitter', 'mjcoffeeholick'],
    github: ['github','mjcoffeeholick'],
    photo: speaker_alda
  },
  {
    name: 'Matheus Lima',
    talk: 'JavaScript e Blockchain',
    twitter: ['twitter', 'matheusml'],
    github: ['github','matheusml'],
    photo: speaker_matheuslima
  },
  {
    name: 'Lucas Silva',
    talk: 'Acessibilidade, CSS e UX',
    twitter: ['twitter', 'lucas_dejsilva'],
    github: ['github','lucasjs'],
    photo: speaker_lucas
  },
  {
    talk: 'Em breve',
    photo: speaker_man
  },
  {
    talk: 'Em breve',
    photo: speaker_woman
  }
  

  // {
  //   name: 'Raphael Fabeni',
  //   talk: 'CSS Tips',
  //   twitter: ['twitter', 'rfabeni'],
  //   github: ['github','rfabeni'],
  //   photo: speaker_rfabeni
  // },
  // {
  //   name: 'Raphael Fabeni',
  //   talk: 'CSS Tips',
  //   twitter: ['twitter', 'rfabeni'],
  //   github: ['github','rfabeni'],
  //   photo: speaker_1
  // },
  // {
  //   name: 'Raphael Fabeni',
  //   talk: 'CSS Tips',
  //   twitter: ['twitter', 'rfabeni'],
  //   github: ['github','rfabeni'],
  //   photo: speaker_2
  // },
  // {
  //   name: 'Raphael Fabeni',
  //   talk: 'CSS Tips',
  //   twitter: ['twitter', 'rfabeni'],
  //   github: ['github','rfabeni'],
  //   photo: speaker_3
  // },
  // {
  //   name: 'Raphael Fabeni',
  //   talk: 'CSS Tips',
  //   twitter: ['twitter', 'rfabeni'],
  //   github: ['github','rfabeni'],
  //   photo: speaker_4
  // }
  ]
}

export default class Palestrantes extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.link} id={content.id}>
          <div {...styles.container}>
            <Text type={content.title.type} label={content.title.header} align={content.title.align} width={content.title.width} margin={content.title.margin} color={content.title.color} />
              <ul {...styles.main}>
                {content.speakers.map((speaker,index) => {
                  return(
                    <li key={index}>
                      <div {...style({ backgroundImage: `url(${speaker.photo})`})} {...styles.photo}>
                        <div {...styles.infos}>
                          {
                            speaker.name
                              ? <Text type={'h6'} label={speaker.name}/>
                              : null
                          }
                          {
                            speaker.talk
                              ? <Text type={'normal'} label={speaker.talk}/>
                              : null
                          }
                          {
                            speaker.twitter
                              ? <Button type={speaker.twitter[0]} link={speaker.twitter[1]}/>
                              : null
                          }
                          {
                            speaker.github
                              ? <Button type={speaker.github[0]} link={speaker.github[1]}/>
                              : null
                          }
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