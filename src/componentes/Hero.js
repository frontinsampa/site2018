import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import pattern from '../imgs/pattern.png'

const styles = {
	hero: css({
		"position": "relative",
    "top": "40%",
    "transform": "translateY(-50%)",
    "MozTransform": "translateY(-50%)",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "OTransform": "translateY(-50%)"
	}),
  hero_header: css({
    "fontFamily": Globals.fonts.bold,
    "fontSize": "90px",
    "lineHeight": "1.11",
    "textAlign": "left",
    "color": Globals.colors.white,
    "margin": "0"
  }),
  hero_logo: css({
    "background": `url(${pattern}) no-repeat left`,
    "width": "209px",
    "height": "50px",
    "display": "inline-block",
    paddingRight: '30px'
  }),
  hero_description: css({
    "fontFamily": Globals.fonts.regular,
    "fontSize": "28px",
    "lineHeight": "1.43",
    "textTransform": "uppercase",
    "color": Globals.colors.white
  })
}

const content = {
	title1 : 'Front In',
	title2: 'Sampa',
	subtitle1: '14 de julho de 2018 no Teatro',
	subtitle2: 'do Hotel Maksoud Plaza'
}

export default class Hero extends Component {

	render(){
		return(
			<div {...styles.hero}>
        <span {...styles.hero_header}>{content.title1}</span><br/>
        <span {...styles.hero_logo}></span>
        <span {...styles.hero_header}>{content.title2}</span>
        <p {...styles.hero_description}>{content.subtitle1}<br/>{content.subtitle2}</p>
      </div>
		)
	}
}