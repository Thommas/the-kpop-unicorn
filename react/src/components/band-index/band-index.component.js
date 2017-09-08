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
  Segment,
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
import NodeApiService from '../../services/node-api.service.js';
import { NodeApiErrorComponent, NodeApiLoaderComponent } from '../';

export class BandIndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData('/api/bands')
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
          <h1>Kpop bands</h1>
          <Card.Group itemsPerRow={4}>
            { this.state.data.map((band) => (
              <Card key={band.title}>
                <div style={{height: '150px'}}>
                  <Image src={band.image} shape='circular' width={150} height={150}
                         style={{margin: '0 auto', 'object-fit': 'cover'}}/>
                </div>
                <Card.Content>
                  <Card.Header>
                    <Link to={`/band/${band.slug}`}>{band.title}</Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    content='See more'
                    label={{ basic: true, pointing: 'right', content: band.popularity }}
                    labelPosition='left'
                    as={Link}
                    to={`/band/${band.slug}`}
                  />
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Segment>
        : null }
        { this.state.error ? <NodeApiErrorComponent/> : null }
      </Container>
    )
  }
}
