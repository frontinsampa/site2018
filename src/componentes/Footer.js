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
        // height: 50,
        // paddingTop: 10,
        marginTop: '-5px',
        marginBottom: 15,
        '@media(min-width: 1024px)':{
          textAlign: 'left'
        }
      },
      ':last-child':{
        textAlign: 'center',
        // height: 50,
        marginTop: 10,
        // marginBottom: 15,
        '@media(min-width: 1024px)':{
          textAlign: 'right'
        }
      },
      '> a':{
        color: Globals.colors.yellow,
        textDecoration: 'none'
      }
    }
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
  description: 'Front In Sampa. Todos os direitos reservados.',
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
                <div id="google_translate_element" />
                <a tabIndex='13' href="http://pt-br.confcodeofconduct.com/" target='_blank' rel="noopener noreferrer">Código de Conduta</a>
                <Text type={'small'} label={content.description} />  
              </span>
              <span>
                <Button tabIndex='14' type={content.twitter[0]} link={content.twitter[1]}/>
                <Button tabIndex='14' type={content.instagram[0]} link={content.instagram[1]}/>
                <Button tabIndex='14' type={content.facebook[0]} link={content.facebook[1]}/>
                <Button tabIndex='14' type={content.youtube[0]} link={content.youtube[1]}/>
                <Button tabIndex='14' type={content.github[0]} link={content.github[1]}/>
              </span>
            </div>
          </div>
        </div>
        )
    }
}