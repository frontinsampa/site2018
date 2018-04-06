import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import logo from '../imgs/logo-frontinsampa-evento.png'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "770px",
    margin: '0 auto',
    '@media(min-width: 1024px)':{
      maxWidth: 1024,
      "height": "100vh"
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
  logo: css({
    maxWidth: 150,
    display: 'block',
    margin: '0 auto',
    '@media(min-width: 570px)':{
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
  id: 'evento',
  title: {
    type: 'h3',
    header: 'O mais tradicional evento sobre front-end',
    color: [Globals.colors.red,Globals.colors.purple]
  },
  role: 'link',
  img: logo,
  alt: 'Front In Sampa',
  description: 'Em Julho estamos de volta ao Teatro do Maksoud Plaza Hotel, para reunir a comunidade em torno do melhor conteúdo sobre desenvolvimento de interfaces através de apresentações inesquecíveis.',
  button: 'submit',
  label: 'Inscreva-se',
  link: 'https://www.sympla.com.br/front-in-sampa-2018__193402'
}

export default class Evento extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.role} id={content.id}>
          <div {...styles.container}>
            <div {...styles.main}>
              <div>
                <img src={content.img} alt={content.alt} {...styles.logo} />
              </div>
              <div>
                <Text type={content.title.type} label={content.title.header} color={content.title.color}/>
                <p {...styles.description}>{content.description}</p>
                <Button tabIndex="4" type={content.button} label={content.label} link={content.link} target="_blank" rel="noopener noreferrer" />
              </div>
            </div>
          </div>
        </div>
        )
    }
}