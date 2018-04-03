import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "500px",
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
  id: 'contato',
  title: {
    type: 'super',
    header: 'envie sua palestra',
    color: [Globals.colors.purple,Globals.colors.yellow]
  },
  role: 'link',
  align: 'center',
  description: 'Quer se apresentar no Front In Sampa 2018?',
  link: 'https://www.papercall.io/frontinsampa2018'
}

export default class CallForPapers extends Component {

    render(){
        return (
        <div>
          <div {...styles.hero} role={content.role} id={content.id}>
            <div {...styles.container}>
              <div  {...styles.main}>
                <div>
                  <Text type={'upper'} label={content.description} align={content.align} />
                  <Button tabIndex='8' type={content.title.type} label={content.title.header} link={content.link} target='_blank' />
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}