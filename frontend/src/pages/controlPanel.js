import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ControlPanel extends Component {
  static propTypes = {
    canvas: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    showFigures: PropTypes.func,
  }
  static defaultProps = {
    onChange: function () {},
    showFigures: function () {},
  }

  state = {
    brushsize: this.props,
    canDraw: true,
    brushcolor: '#ff0000',
    show: { rect: false, circle: false, image: false },
    backgroundImg: null,
  }

 

  brushSizeChange = (event) => {
    this.setState(
      { brushsize: event.target.value },
      function () {
        this.props.onChange(this.state)
      }.bind(this)
    )
  }

  canUseBrush = (event) => {
    this.setState(
      { canDraw: event.target.checked },
      function () {
        this.props.onChange(this.state)
      }.bind(this)
    )
  }

  brushColorChange = (event) => {
    console.log(event.target.value)
    this.setState(
      { brushcolor: event.target.value },
      function () {
        this.props.onChange(this.state)
      }.bind(this)
    )
  }


  render() {
    const controlPanel = {
      color: 'white',
      backgroundColor: 'Grey',
      padding: '10px',
      fontFamily: 'Arial',
    }

    return (
      <div style={controlPanel}>
        <label>
          Drawing:{' '}
          <input
            id="canDraw"
            type="checkbox"
            defaultChecked
            onChange={this.canUseBrush}
          />
        </label>
        <label>
          Color:{' '}
          <input
            id="color"
            type="color"
            defaultValue="#ff0000"
            onChange={this.brushColorChange}
          />
        </label>
        <label style={{ display: 'block' }}>
          Brush size:{' '}
          <input
            id="typeinp"
            type="range"
            min="0"
            max="1000"
            defaultValue={this.state.brushsize}
            onChange={this.brushSizeChange}
            step="1"
          />
        </label>
   

        <br />
       
      </div>
    )
  }
}

export default ControlPanel
