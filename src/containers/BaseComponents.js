import React, { Component } from 'react';

/**
 * A base class for containers. 
 * @initialState { loading: true, errors: [] }
 * @method render method should be overridden and use React.cloneElement(this.props.children, [props], [...children]) https://reactjs.org/docs/react-api.html#cloneelement
 */
export class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // assumed that the container will need to load something out the gate
      errors: [],    // someplace to put errors if they show up
    }
  }

  /**
   * @abstract Must be overridden
   */
  render() { return null }
}