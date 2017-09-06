/**
 * The Kpop Unicorn
 *
 * Component - Hall
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Container,
  Image,
  List,
} from 'semantic-ui-react'
import NodeApiService from '../../services/node-api.service.js';

const src = 'http://placehold.it/64x64';

export class HallComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData('/api/halls').then((data) => {
      this.setState({data: data})
    });
  }

  render() {
    return (
      <Container>
        <h1>Concert halls in France</h1>
        <List relaxed='very' size='massive'>
          { this.state.data.map((item) => (
            <List.Item key={item.title}>
              <Image avatar src={src} />
              <List.Content>
                <List.Header>{item.title}</List.Header>
                <List.Description>{item.seats} seats</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Container>
    )
  }
}
