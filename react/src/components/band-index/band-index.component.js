/**
 * The Kpop Unicorn
 *
 * Component - BandIndex
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Container,
  Image,
  Card,
  Icon,
} from 'semantic-ui-react'
import NodeApiService from '../../services/node-api.service.js';

export class BandIndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData('/api/bands').then((data) => {
      this.setState({data: data})
    });
  }

  render() {
    return (
      <Container>
        <h1>Kpop bands</h1>
        <Card.Group itemsPerRow={4}>
          { this.state.data.map((item) => (
            <Card key={item.title}>
              <Image src={item.image} size='small' wrapped/>
              <Card.Content>
                <Card.Header>
                  {item.title}
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='spotify' />
                  {item.popularity}
                </a>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    )
  }
}
