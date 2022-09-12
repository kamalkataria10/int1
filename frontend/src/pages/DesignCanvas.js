import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ControlPanel from './controlPanel.js'

const fabric = window.fabric

class DesignCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 600,
    height: 300,
  }

  canvas = new fabric.Canvas(this.c)

  state = {
    mousecursor: null,
    show: { rect: false, circle: false, image: false },
    backgroudImg: null,
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas(this.c)
    this.canvas.freeDrawingBrush.width = 10
    this.canvas.isDrawingMode = true
    this.canvas.freeDrawingBrush.color = '#ff0000'
  }

  updatedCanvas = (newCanvas) => {
    this.canvas = newCanvas
  }

  onControlChange = (data) => {
    this.canvas.freeDrawingBrush.width = data.brushSize
    this.canvas.isDrawingMode = data.canDraw
    this.canvas.freeDrawingBrush.color = data.brushcolor
  }

  showFigures = (data) => {
    this.setState({ show: data })
  }


  clear = (e) => {
    const show = { rect: false, circle: false, image: false }
    e.preventDefault()
    this.canvas.clear()
    this.setState({ show })
  }

  canvasStyle = {
    borderStyle: 'solid',
    marginTop: '5px',
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        canvas: this.canvas,
        updatedCanvas: this.updatedCanvas,
      })
    })
    const { width, height } = this.props
    return (
      <Fragment>
        <ControlPanel
          canvas={this.canvas}
          onChange={this.onControlChange}
          showFigures={this.showFigures}
          addBackgroudImg={this.addBackgroudImg}
        />

        <canvas
          ref={(c) => (this.c = c)}
          width={width}
          height={height}
          style={this.canvasStyle}
        />
        {this.canvas && children}
        <br />
        <button onClick={(e) => this.clear(e)}>Clear Canvas</button>
      </Fragment>
    )
  }
}

export default DesignCanvas
