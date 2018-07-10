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
    "height": "1500px",
    margin: '0 auto',
    '@media(min-width: 1024px)':{
      maxWidth: 1024,
      "height": "1500px",
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
      flex: 1,
      '> p': {
        color: '#ffffff',
        textAlign: 'center',
        "fontFamily": Globals.fonts.normal,
        "fontSize": "16px",
        "lineHeight": "1.5",
        '> strong': {
          color: '#ffff00',
          "fontFamily": Globals.fonts.bold,
          "fontSize": "20px",
          "lineHeight": "2",
          // bottom: '17px',
          position: 'relative'
        }
      }
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
  description: 'Programação',
  link: 'https://www.papercall.io/frontinsampa2018'
}

export default class Programacao extends Component {

    render(){
        return (
        <div>
          <div {...styles.hero} role={content.role} id={content.id}>
            <div {...styles.container}>
              <div  {...styles.main}>
                <div>
                  <Text type={'h3'} label={content.description} align={content.align} color={[Globals.colors.red,Globals.colors.purple]} />
                  <p>08h00 - <strong>Credenciamento</strong><br />
                    09h00 - <strong>Abertura</strong><br />
                    09h05 - <strong>Raphael Fabeni</strong><br />
                    Cultura de Desenvolvimento - A Saga Continua<br />
                    09h30 - <strong>Alda Rocha</strong><br />
                    UXD: A Manopla do Infinito Design<br />
                    10h00 - <strong>J&uacute;lio de Lima</strong><br />
                    Desenvolvendo como QAs<br />
                    10h30 - <strong>Fernanda Bernardo</strong><br />
                    Perceived Performance<br />
                    11h20 - <strong>Rodrigo Pok&eacute;monBR</strong><br />
                    Front-end Raiz vs Front-end Nutella<br />
                    11h30 - <strong>Intervalo</strong><br />
                    13h00 - <strong>Lucas Silva</strong><br />
                    Acessibilidade e UX em CSS<br />
                    13h30 - <strong>Fernando Daciuk</strong><br />
                    Immutable JavaScript<br />
                    14h20 - <strong>Kete Rufino e Rod Costa</strong><br />
                    Bai&atilde;o de Dois: CSS in JS com styled-components<br />
                    14h50 - <strong>William Grasel</strong><br />
                    E o Angular? Ainda vive?<br />
                    15h30 - <strong>Coffee Break</strong><br />
                    16h00 - <strong>Isa Silveira</strong><br />
                    Machine Learning + JS: A Import&acirc;ncia do &Oacute;cio<br />
                    16h50 - <strong>Talk Show do Marsiglio</strong><br />
                    Com Felipe Fialho e mais<br />
                    17h20 - <strong>Matheus Lima</strong><br />
                    JavaScript e Blockchain<br />
                    17h50 - <strong>Sorteios e Encerramentos</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}