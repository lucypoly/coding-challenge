import React from 'react'
import { connect } from 'react-redux'

import { Color } from 'constants/types'
import { startMoving, stopMoving } from 'actions/actions'

import * as styled from 'MoveButton/MoveButton.styled'

interface Props {
  color: Color;
  moving: boolean;
  startMoving(color: Color): void;
  stopMoving(color: Color): void;
}

export class MoveButton extends React.PureComponent<Props> {
  interval: number

  handleMoving = () => {
    const { moving, startMoving, color, stopMoving } = this.props

    if (moving) {
      stopMoving(color)
      window.clearInterval(this.interval)
    } else {
      startMoving(color)
      this.interval = window.setInterval(() => startMoving(color), 2000)
    }
  }

  render() {
    const { color, moving } = this.props

    return (
      <styled.Button color={color} onClick={this.handleMoving}>
        {moving ? 'STOP' : 'START'}
      </styled.Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startMoving: (color: Color) => dispatch(startMoving(color)),
  stopMoving: (color: Color) => dispatch(stopMoving(color)),
})

export default connect(
  null,
  mapDispatchToProps
)(MoveButton)
