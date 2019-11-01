import React from 'react'
import { connect } from 'react-redux'
import { Train, Color } from 'constants/types'
import MoveButton from 'MoveButton'

interface Props {
  trains: ReadonlyArray<Train>;
  startMoving(color: Color): void;
  stopMoving(color: Color): void;
}

class Navigation extends React.PureComponent<Props> {
  render() {
    const { trains } = this.props

    return (
      <>
        {trains.length &&
          trains.map(train => (
            <MoveButton
              key={`button-${train.color}`}
              color={train.color}
              moving={train.moving}
            />
          ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  trains: state.trains,
})

export default connect(mapStateToProps)(Navigation)
