/**
 * The Kpop Unicorn
 *
 * Component - Shared - Node API Loader
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

export class NodeApiLoaderComponent extends Component {
  render() {
    return (
      <Loader active inline='centered' />
    );
  }
}
