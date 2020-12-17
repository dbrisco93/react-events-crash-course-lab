import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let mouseX = event.clientX
    let mouseY = event.clientY
    drawChromeBoiAtCoords(mouseX, mouseY)
  }
  
  handleCycle = (event) => {
    toggleCycling(event)
  }


   scaleImage = (event) => {
     resize(event)
   }
   
  
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove} 
        onClick={this.handleCycle}
        onKeyDown={this.scaleImage}

        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
