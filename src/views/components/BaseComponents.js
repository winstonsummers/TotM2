import React, { Component, PureComponent } from 'react';

/**
 * A base class for views.
 * @extends {PureComponent}
 * @staticMethod getNextId - This method returns a unique id, useful for lists of components.
 * @method renderView - instead of render for built in error handling.
 */
export class ViewComponent extends PureComponent {
  /**
   * @private 
   */
  static currentId = 0;

  /**
   * @returns {number} New id, useful for keys in lists of components
   */
  static getNextId() {
    return ++ViewComponent.currentId;
  }

  /**
   * Do not use this to render unless you want to override the error handling it offers
   */
  render() {
    if(this.props.errors.length > 0){
      const {errors, ...theRest} = this.props;
      return (
        <div className="view-component-error">
          <h1>Well this seems to be broken...</h1>
          <p>Sorry for the inconvience, Please let us know about this at [insert support email here]</p>
          <pre>{...errors}</pre>
          <pre>{...theRest}</pre>
        </div>
      );
    } else { return this.renderView() }
  }
}

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