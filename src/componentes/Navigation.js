import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import $ from 'jquery';

const styles = {
  header_nav: css({
    "listStyle": "none"
  }),
  header_nav_link:css({
    "textDecoration": "none",
    "fontFamily": Globals.fonts.regular,
    "fontSize": "18px",
    "lineHeight": "1.67",
    "textAlign": "right",
    "color": Globals.colors.white,
    "paddingLeft": "20px",
    "paddingRight": "20px",
    cursor: 'pointer',
    '&:hover':{
    	"color": Globals.colors.red
    },
    display: 'none',
		'@media(min-width: 1024px)':{
			display: 'inline-block',
		},
    '&:last-child':{
	    "padding": "5px 20px",
	    "borderRadius": "20px",
	    "border": "solid 2px " + Globals.colors.white,
			display: 'inline-block',
			'&:hover':{
	    	"border": "solid 2px " + Globals.colors.red,
	    	background: Globals.colors.red,
	    	color: Globals.colors.white
	    },
    }
  })
}

const navItens = [
	{section: 'o evento', link: '#evento'},
	{section: 'palestrantes', link:'#palestrantes'},
	{section: 'apresentador', link:'#apresentador'},
	// {section: 'programação', link:'#programacao'},
	{section: 'local', link:'#local'},
	{section: 'contato', link:'#contato'},
	{section: 'INSCREVA-SE', link:'https://www.sympla.com.br/front-in-sampa-2018__193402'}
]

function goTo(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top},
        'slow');
}

export default class Navigation extends Component {

	render(){
		return(
			<nav {...styles.nav}>
        <ul {...styles.header_nav}>
        	{navItens.map((navItem, index) => {
            return (
		          <li key={index} {...styles.header_nav_link}>
		          	<a onClick={() => goTo(`${navItem.link}`)}>{navItem.section}</a>
		          </li>
		        )
		      })}
        </ul>
      </nav>
		)
	}
}