/**
 * The Kpop Unicorn
 *
 * Component - Band Show
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Container,
  Statistic,
} from 'semantic-ui-react'

export class BandShowComponent extends Component {
  render() {
    return (
      <Container>
        <h1>[Band name here]</h1>
        <Statistic>
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>Downloads</Statistic.Label>
        </Statistic>

        <Statistic value='5,500' label='Downloads' />
      </Container>
    )
  }
}