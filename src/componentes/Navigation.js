import React, { Component } from 'react'
import {css} from 'glamor'
import Globals from './../Globals'

import $ from 'jquery';
import Button from './Button'

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
		'@media(min-width: 1024px)':{
			display: 'inline-block',
		}
  })
}

const navItens = [
	{section: 'o evento', link: '#evento'},
	// {section: 'palestrantes', link:'#palestrantes'},
	{section: 'apresentador', link:'#apresentador'},
	{section: 'patrocinadores', link:'#patrocinadores'},
	// {section: 'programação', link:'#programacao'},
	{section: 'local', link:'#local'},
	{section: 'contato', link:'#contato'}
]

function goTo(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top},
        'slow');
}

export default class Navigation extends Component {

  contextMenuListener=function(menu) {
    var button=(document.querySelector("[data-check]"), document.querySelector("[data-menu-mobile]"));
    menu.addEventListener("click", function() {
        button.click()
    })
  }

  clickMenu() {
    for(var taskItems=document.querySelectorAll("[data-menu-link]"), i=0, len=taskItems.length;
    i<len;
    i++) {
        var taskItem=taskItems[i];
        this.contextMenuListener(taskItem)
    }
  }


  contextMenuListener(menu) {
      var button=(document.querySelector("[data-check]"), document.querySelector("[data-menu-mobile]"));
      menu.addEventListener("click", function() {
          button.click()
      }
      )
  }

	render(){
		return(
      <div>
      <input tabIndex={1} data-check aria-label="Se estiver em um dispositivo móvel, selecione este item, para exibir o Menu de navegação" type="checkbox" name="menu-control" className="menu-control" id="menu-control" />
			<nav className="menu">
        <label htmlFor="menu-control" className="menu-button" data-menu-mobile role="button">
          <svg viewBox="0 0 24 24" className="icon-menu" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" role="img">
            <title>Ícone para exibir Menu</title>
            <path d="M21.7,1.2H2.3C1,1.2,0,2.2,0,3.5s1,2.3,2.3,2.3h19.4c1.3,0,2.3-1,2.3-2.3S23,1.2,21.7,1.2z" />
            <path d="M21.7,9.7H2.3C1,9.7,0,10.7,0,12s1,2.3,2.3,2.3h19.4c1.3,0,2.3-1,2.3-2.3S23,9.7,21.7,9.7z" />
            <path d="M21.7,18.2H2.3c-1.3,0-2.3,1-2.3,2.3c0,1.3,1,2.3,2.3,2.3h19.4c1.3,0,2.3-1,2.3-2.3C24,19.2,23,18.2,21.7,18.2z" />
          </svg>
          <svg viewBox="0 0 32 32" className="icon-close-menu" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" role="img">
            <title>Ícone para fechar o menu</title>
            <path d="M21.419 16l9.471-9.471c1.497-1.497 1.497-3.923 0-5.419s-3.923-1.497-5.419 0l-9.471 9.471-9.471-9.497c-1.497-1.497-3.923-1.497-5.419 0s-1.497 3.923 0 5.419l9.471 9.497-9.497 9.471c-1.497 1.497-1.497 3.923 0 5.419 0.748 0.748 1.729 1.135 2.71 1.135s1.961-0.361 2.71-1.135l9.497-9.471 9.471 9.471c0.748 0.748 1.729 1.135 2.71 1.135s1.961-0.361 2.71-1.135c1.497-1.497 1.497-3.923 0-5.419l-9.471-9.471z" />
          </svg>
        </label>
        <label htmlFor="menu-control" className="menu-overlay" />
        <ul data-menu role="menubar">
        	{navItens.map((navItem, index) => {
            return (
		          <li key={index} {...styles.header_nav_link}>
		          	<a tabIndex="2" onClick={() => goTo(`${navItem.link}`)} role="menuitem">{navItem.section}</a>
		          </li>
		        )
		      })}
		      <li {...styles.header_nav_link}>
		      	<Button tabIndex="3" type={'outline'} label="INSCREVA-SE" link="https://www.sympla.com.br/front-in-sampa-2018__193402" target={'_blank'}/>
          </li>
        </ul>
      </nav>
      </div>
		)
	}
}