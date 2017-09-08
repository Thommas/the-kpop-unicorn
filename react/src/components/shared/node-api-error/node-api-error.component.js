/**
 * The Kpop Unicorn
 *
 * Component - Shared - Node API Error
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

export class NodeApiErrorComponent extends Component {
  render() {
    return (
      <Message
        negative
        icon='warning sign'
        header='Cannot retrieve data.'
        content='Make sure the API is available.'
      />
    );
  }
}
