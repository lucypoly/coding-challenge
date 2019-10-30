import React from 'react'
import { connect } from 'react-redux'
import { toggleMoving } from 'actions/actions'

import { Train, Color } from 'constants/types'

interface Props {
  trains: ReadonlyArray<Train>;
  toggleMoving(color: Color): void;
}

class Navigation extends React.PureComponent<Props> {
  componentDidMount() {
    console.log(this.props.trains)
    this.props.toggleMoving(Color.red)
    console.log(this.props.trains)
  }

  render() {
    return <>Hi!</>
  }
}

const mapStateToProps = state => ({
  trains: state.trains,
})

const mapDispatchToProps = dispatch => ({
  toggleMoving: (color: Color) => dispatch(toggleMoving(color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
