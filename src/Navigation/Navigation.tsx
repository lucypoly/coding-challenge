import React from 'react'
import { connect } from 'react-redux'
import { toggleMoving } from 'actions/actions'

import { Line, Color } from 'constants/types'

interface Props {
  lines: ReadonlyArray<Line>;
  toggleMoving(color: Color): void;
}

class Navigation extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.toggleMoving(Color.red)
  }

  render() {
    return <>Hi!</>
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  toggleMoving: (color: Color) => dispatch(toggleMoving(color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
