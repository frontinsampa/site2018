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
    margin: '0 auto',
    '@media(min-width: 1024px)':{
      maxWidth: 1024
    }
  }),
  main: css({
    "position": "relative",
    display: 'flex',
    flexFlow: 'column',
    paddingTop: '1rem',
    borderTop: '1px solid #ccc',
    '@media(min-width: 1024px)':{
      flexFlow: 'row',
    },
    '> span':{
      flex: 1,
      lineHeight: 2,
      verticalAlign: 'middle',
      ':first-child':{
        textAlign: 'center',
        '@media(min-width: 1024px)':{
          textAlign: 'left'
        }
      },
      ':last-child':{
        textAlign: 'center',
        '@media(min-width: 1024px)':{
          textAlign: 'right'
        }
      }
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
    type: 'super',
    header: 'mande um email',
    color: [Globals.colors.purple,Globals.colors.yellow]
  },
  role: 'link',
  align: 'center',
  description: 'Always Creative, Always Brave.',
  twitter: ['twitter', 'frontinsp'],
  github: ['github', 'frontinsampa'],
  instagram: ['instagram','frontinsampa'],
  facebook: ['facebook', 'frontinsampa'],
  youtube: ['youtube','FrontinSampa'],
}

export default class Evento extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.role} id={content.id}>
          <div {...styles.container}>
            <div  {...styles.main}>
              <span>
                <Text type={'normal'} label={content.description} />  
              </span>
              <span>
                <Button type={content.twitter[0]} link={content.twitter[1]}/>
                <Button type={content.instagram[0]} link={content.instagram[1]}/>
                <Button type={content.facebook[0]} link={content.facebook[1]}/>
                <Button type={content.youtube[0]} link={content.youtube[1]}/>
                <Button type={content.github[0]} link={content.github[1]}/>
              </span>
            </div>
          </div>
        </div>
        )
    }
}