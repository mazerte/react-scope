import React, {Component} from 'react'
import PropTypes from 'prop-types'

const {Provider, Consumer: ScopeConsumer} = React.createContext({
  scope: 'default',
  node: document.body,
})

export default class Scope extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const {name, children} = this.props
    const {node} = this.state
    return (
      <Provider value={ {scope: name, node} }>
        <div className={ name }>
          { children }
          <div ref={ el => {
            if (!node && el) {
              this.setState({node: el})
            }
          } } />
        </div>
      </Provider>
    )
  }
}


export {
  ScopeConsumer,
}
