import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import Button from './Button'
import Text from './Text'
import maksoud1 from '../imgs/maksoud1.png'
import maksoud2 from '../imgs/maksoud2.png'
import maksoud3 from '../imgs/maksoud3.png'
import maksoud4 from '../imgs/maksoud4.png'
import maksoud5 from '../imgs/maksoud5.png'
import maksoud6 from '../imgs/maksoud6.png'

const styles = {
  hero:css({
    "width": "100%"
  }),
  container:css({
    width: '90%',
    "height": "2000px",
    paddingTop: 60,
    textAlign: 'center',
    margin: '0 auto',
    '@media(min-width: 768px)':{
      paddingTop: 60,
      maxWidth: 1024,
      "height": "1000px"
    },
    '@media(min-width: 1024px)':{
      paddingTop: 103,
      maxWidth: 1024,
      "height": "770px"
    }
  }),
  wrapperButton: css({
    paddingTop: 30
  }),
  card: css({
    width: 280,
    maxWidth: '100%',
    maxHeight: 190,
    padding: '0',
    borderRadius: 0,
    margin: '10px 10px 4em',
    '@media(min-width:1024px)':{
      margin: '10px 10px',
      width: 318,
      maxHeight: 200
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
    "top": "30%",
    "transform": "translateY(-50%)",
    "MozTransform": "translateY(-50%)",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "OTransform": "translateY(-50%)", 
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between', 
    flexFlow: 'column wrap', 
    alignItems: 'center',
    alignContent: 'flex-start',
    '@media(min-width: 768px)':{
      flexFlow: 'row wrap',
      alignItems: 'stretch'
    },
    '> li':{
      flex: 1,
      maxWidth: 318,
      padding: '10px 0'
    }
  }),
  src: css({
    width: 280,
    height: 190,
    backgroundSize: 'contain',
    display: 'block',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '@media(min-width:1024px)':{
      width: 290
    },
    '@media(min-width:1100px)':{
      width: 318
    }
  }),
  infos: css({
    position: 'absolute',
    bottom: 30,
    left: 30
  })
}

const content = {
  id: 'local',
  title: {
    type: 'h3',
    header: 'localizado na avenida mais importante de são paulo',
    description: 'Próximo da efervescente vida cultural e gastronômica da capital, o Hotel Maksoud Plaza é um ícone paulistano, e conta com diversas atrações, pontos turísticos e serviços no seu entorno. Junto do centro financeiro da cidade, o hotel tem fácil acesso aos aeroportos de Guarulhos e Congonhas, aos terminais rodoviários e ao Metrô.',
    align: 'center',
    width: 600,
    margin: '0 auto',
    color: [Globals.colors.red,Globals.colors.purple]
  },
  role: 'link',
  photos: [{
    src: maksoud1},
    {
    src: maksoud2},
    {
    src: maksoud3},
    {
    src: maksoud4},
    {
    src: maksoud5},
    {
    src: maksoud6
  }]
}

export default class Local extends Component {

    render(){
        return (
        <div {...styles.hero} role={content.link} id={content.id}>
          <div {...styles.container}>
            <Text type={content.title.type} label={content.title.header} align={content.title.align} width={content.title.width} margin={content.title.margin} color={content.title.color} />
            <Text type={'normal'} label={content.title.description} align={content.title.align}/>
            <div {...styles.cards}>
                {content.photos.map((photo,index) => {
                  return (
                    <div key={index} {...styles.card}>
                      <div
                        {...css({
                          backgroundImage: `url('${photo.src}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: 190,
                          display: 'block'
                        })}
                      >
                      </div>
                      
                    </div>
                  );
                })}
              </div>
            <div {...styles.wrapperButton}>
              <Button tabIndex="7" type={'submit'} label="Ver no Mapa" link="https://goo.gl/maps/yF3bHmXUBav" target={'_blank'}/>
            </div>
          </div>
        </div>
        )
    }
}