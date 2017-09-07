/**
 * The Kpop Unicorn
 *
 * Component - BandIndex
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Button,
  Container,
  Image,
  Card,
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
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
          { this.state.data.map((band) => (
            <Card key={band.title}>
              <Image src={band.image} size='small' wrapped/>
              <Card.Content>
                <Card.Header>
                  {band.title}
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button
                  content='See more'
                  icon='empty star'
                  label={{ basic: true, pointing: 'right', content: band.popularity }}
                  labelPosition='left'
                  as={Link}
                  to={`/band/${band.slug}`}
                />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    )
  }
}
