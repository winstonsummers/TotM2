import React, { Component } from 'react';

/**
 * A base class for containers. 
 * @initialState { loading: true, errors: [] }
 * @method render Renders this.props.children, can be overridden if needed
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
   * Renders this.props.children, can be overridden if needed
   */
  render() { return this.props.children }
}