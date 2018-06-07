import React, { Component } from 'react'
import {css,style} from 'glamor'
import Globals from './../Globals'

const styles ={
	h3: css({
    "fontFamily": Globals.fonts.bold,
    "fontSize": "36px",
    "lineHeight": "1.39",
    "WebkitBackgroundClip": "text",
    "backgroundClip": "text",
    textTransform: 'uppercase',
    "WebkitTextFillColor": "transparent"
  }),
  h6: css({
    "fontFamily": Globals.fonts.bold,
    "fontSize": "18px",
    "lineHeight": "1.67",
    margin: 0,
    textTransform: 'uppercase',
    color: Globals.colors.purple
  }),
  normal: css({
    "fontFamily": Globals.fonts.regular,
    "fontSize": "18px",
    margin: 0,
    "lineHeight": "1.67",
    color: Globals.colors.white
  }),
  small: css({
    "fontFamily": Globals.fonts.regular,
    "fontSize": "14px",
    margin: 0,
    "lineHeight": "1.41",
    color: Globals.colors.white
  }),
  upper: css({
    "fontFamily": Globals.fonts.regular,
    "fontSize": "28px",
    margin: 0,
    "lineHeight": "1.43",
    color: Globals.colors.white
  })
}

export default class Text extends Component{
	render(){
		switch(this.props.type){
      case 'h3':
				return(
					<h3 {...styles.h3} 
						{...style({ 
							textAlign: `${this.props.align}`, 
							backgroundImage: `linear-gradient(to right, ${this.props.color[0]}, ${this.props.color[1]}), linear-gradient(${Globals.colors.white}, ${Globals.colors.white})`,
							maxWidth: `${this.props.width}`,
							margin: `${this.props.margin}`
						})}>
						{this.props.label}
					</h3>
				)
			case 'h6':
				return(
					<p {...styles.h6} >{this.props.label}
					</p>	
				)
			case 'normal':
				return(
					<p {...styles.normal} {...style({ 
							textAlign: `${this.props.align}`
						})}>
						{this.props.label}
					</p>	
				)
			case 'small':
				return(
					<p {...styles.small} {...style({ 
							textAlign: `${this.props.align}`
						})}>
						{this.props.label}
					</p>	
				)
			case 'upper':
				return(
					<p {...styles.upper} {...style({ 
							textAlign: `${this.props.align}`,
							margin: `${this.props.margin}`
						})}>
						{this.props.label}
					</p>	
				)
			default:
			return null
		}
	}
}