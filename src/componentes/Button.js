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
    "color": Globals.colors.white,
    borderRadius: 20,
    background: Globals.colors.red,
    padding: '10px 20px'
	}),
	twitter: css({
		background: `url(${twitter}) no-repeat left`,
		width: 22,
		height: 20,
		display: 'inline-block',
		paddingRight: 20,
		paddingTop: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	github: css({
		background: `url(${github}) no-repeat left`,
		width: 22,
		height: 20,
		display: 'inline-block',
		paddingRight: 20,
		paddingTop: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	instagram: css({
		background: `url(${instagram}) no-repeat left`,
		width: 22,
		height: 20,
		display: 'inline-block',
		paddingRight: 20,
		paddingTop: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	facebook: css({
		background: `url(${facebook}) no-repeat left`,
		width: 22,
		height: 20,
		display: 'inline-block',
		paddingRight: 20,
		paddingTop: 15,
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover':{
			opacity: 1
		}
	}),
	youtube: css({
		background: `url(${youtube}) no-repeat left`,
		width: 22,
		height: 20,
		display: 'inline-block',
		paddingRight: 20,
		paddingTop: 15,
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
    textAlign: 'center',
    textDecoration: 'none',
    "WebkitTextFillColor": "transparent",
    backgroundImage: `linear-gradient(to right, ${Globals.colors.purple}, ${Globals.colors.yellow}), linear-gradient(${Globals.colors.white}, ${Globals.colors.white})`
	})
}

export default class Button extends Component{
	render(){
		switch(this.props.type){
      case 'submit':
				return(
					<a href={this.props.link} {...styles.submit}>{this.props.label}</a>
				)
			case 'twitter':
				return(
					<a href={'https://twitter.com/' + this.props.link} {...styles.twitter}></a>
				)
			case 'github':
				return(
					<a href={'https://github.com/' + this.props.link} {...styles.github}></a>
				)
			case 'instagram':
				return(
					<a href={'https://instagram.com/' + this.props.link} {...styles.instagram}></a>
				)
			case 'facebook':
				return(
					<a href={'https://facebook.com/' + this.props.link} {...styles.facebook}></a>
				)
			case 'youtube':
				return(
					<a href={'https://youtube.com/c/' + this.props.link} {...styles.youtube}></a>
				)
			case 'super':
				return(
					<a href={'mailto:' + this.props.link} {...styles.super}>{this.props.label}</a>
				)
			default:
			return null
		}
	}
}