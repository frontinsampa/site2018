import React, { Component } from 'react'
import $ from 'jquery';

const $ = window.$;

export default class Chosen extends Component {
  componentDidMount() {
    this.$ = $(this.el);
    this.$.chosen();
  }
  
  componentWillUnmount() {
    this.$.chosen('destroy');
  }
  
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}