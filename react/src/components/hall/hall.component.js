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
  Segment,
  Divider,
} from 'semantic-ui-react'
import NodeApiService from '../../services/node-api.service.js';
import { NodeApiErrorComponent, NodeApiLoaderComponent } from '../';

const src = 'http://placehold.it/64x64';

export class HallComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData('/api/halls')
      .then((data) => {
        this.setState({data: data})
      })
      .catch((err) => {
        this.setState({error: err});
      });
  }

  render() {
    return (
      <Container>
        { !this.state.data && !this.state.error ? <NodeApiLoaderComponent/> : null }
        { this.state.data ? 
        <Segment>
          <h1>Concert halls in France</h1>
          <List size='large'>
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

          <Divider />
        </Segment>
        : null }
        { this.state.error ? <NodeApiErrorComponent/> : null }
      </Container>
    )
  }
}
