/**
 * The Kpop Unicorn
 *
 * Component - Ranking
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Container,
  List,
  Segment,
  Image,
  Label,
  Icon,
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
import NodeApiService from '../../services/node-api.service.js';
import { NodeApiErrorComponent, NodeApiLoaderComponent } from '../';

export class RankingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData('/api/bands?sort=popularity')
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
          <h1>Popularity ranking</h1>
          <List divided verticalAlign='middle' size='massive'>
            { this.state.data.map((band, index) => (
            <List.Item>
              <List.Content floated='right' verticalAlign='middle'>
                <Icon name='spotify'/>
                {band.popularity}
              </List.Content>
              <Label circular color='green' size='massive'>{index + 1}</Label>
              <Image avatar src={band.image} />
              <List.Content verticalAlign='middle'>
                <List.Header as={Link} to={`/band/${band.slug}`}>{band.title}</List.Header>
              </List.Content>
            </List.Item>
            ))}
          </List>
        </Segment>
        : null }
        { this.state.error ? <NodeApiErrorComponent/> : null }
      </Container>
    )
  }
}
