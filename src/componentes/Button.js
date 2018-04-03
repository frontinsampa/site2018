import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import twitter from '../imgs/twitter.png'
import github from '../imgs/github.png'
import instagram from '../imgs/instagram.png'
import facebook from '../imgs/facebook.png'
import youtube from '../imgs/youtube.png'

const styles ={
	submit: css({
    "fontFamily": Globals.fonts.bold,
    "fontSize": "18px",
    "lineHeight": "1.67",
    "textAlign": "center",
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
    "color": Globals.colors.white,
    borderRadius: 20,
    padding: '10px 20px',
    position: 'relative',
    backgroundImage: `linear-gradient(to bottom, ${Globals.colors.purple} 50%, ${Globals.colors.red} 50%)`,
    "backgroundPosition": "100% 100%",
    backgroundSize: "210%",
  	transition: 'background 250ms ease-in, color 150ms ease-in-out, border 100ms ease-in-out',
    '&:hover': {
	    "color": Globals.colors.white,
	    "backgroundPosition": "100% 0"
  	}
	}),
	outline: css({
    "fontFamily": Globals.fonts.bold,
    "fontSize": "18px",
    "lineHeight": "1.67",
    "textAlign": "center",
    textTransform: 'uppercase',
    transition: '210ms',
    textDecoration: 'none',
    "color": Globals.colors.white,
    cursor: 'pointer',
    borderRadius: 20,
    overflow: 'hidden',
    padding: '10px 20px',
    position: 'relative',
    border: '2px solid ' + Globals.colors.white,
    backgroundImage: `linear-gradient(to bottom, transparent 50%, ${Globals.colors.red} 50%)`,
    backgroundPosition: "0% 0%",
    backgroundSize: "250%",
  	transition: 'background 250ms ease-in, color 150ms ease-in-out, border 100ms ease-in-out',
    '&:hover': {
	    "color": Globals.colors.white,
	    "backgroundPosition": "100% 100%",
	    border: '2px solid ' + Globals.colors.red
  	}
	}),
	twitter: css({
		display: 'inline-block',
		paddingRight: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	github: css({
		display: 'inline-block',
		paddingRight: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	instagram: css({
		display: 'inline-block',
		paddingRight: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	facebook: css({
		display: 'inline-block',
		paddingRight: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	youtube: css({
		display: 'inline-block',
		paddingRight: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	super: css({
	"fontFamily": Globals.fonts.bold,
    "fontSize": "70px",
    "lineHeight": "1",
    "WebkitBackgroundClip": "text",
    "backgroundClip": "text",
    margin: '0 auto',
    display: 'block',
    width: 'auto',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    "WebkitTextFillColor": "transparent",
    backgroundImage: `linear-gradient(to right, ${Globals.colors.purple}, ${Globals.colors.yellow}), linear-gradient(${Globals.colors.white}, ${Globals.colors.white})`,
    '&:hover':{
    	backgroundImage: `linear-gradient(to left, ${Globals.colors.purple}, ${Globals.colors.yellow}), linear-gradient(${Globals.colors.white}, ${Globals.colors.white})`
    }
	})
}

export default class Button extends Component{
	render(){
		switch(this.props.type){
			case 'outline':
				return(
					<a tabIndex={this.props.tabIndex} href={this.props.link} {...styles.outline} target={this.props.target}>
						<span>{this.props.label}</span>
					</a>
				)
      case 'submit':
				return(
					<a tabIndex={this.props.tabIndex} href={this.props.link} {...styles.submit} target={this.props.target}>{this.props.label}</a>
				)
			case 'twitter':
				return(
					<a tabIndex={this.props.tabIndex} href={'https://twitter.com/' + this.props.link} {...styles.twitter}>
						<img src={twitter} alt="twitter" />
					</a>
				)
			case 'github':
				return(
					<a tabIndex={this.props.tabIndex} href={'https://github.com/' + this.props.link} {...styles.github}>
						<img src={github} alt="github" />
					</a>
				)
			case 'instagram':
				return(
					<a tabIndex={this.props.tabIndex} href={'https://instagram.com/' + this.props.link} {...styles.instagram}>
						<img src={instagram} alt="instagram" />
					</a>
				)
			case 'facebook':
				return(
					<a tabIndex={this.props.tabIndex} href={'https://facebook.com/' + this.props.link} {...styles.facebook}>
						<img src={facebook} alt="facebook" />
					</a>
				)
			case 'youtube':
				return(
					<a tabIndex={this.props.tabIndex} href={'https://youtube.com/c/' + this.props.link} {...styles.youtube}>
						<img src={youtube} alt="youtube" />
					</a>
				)
			case 'super':
				return(
					<a tabIndex={this.props.tabIndex} href={this.props.link} {...styles.super} target={this.props.target}>{this.props.label}</a>
				)
			default:
			return null
		}
	}
}