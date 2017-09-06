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
  Image,
  Card,
  Icon,
} from 'semantic-ui-react'

const src = 'http://placehold.it/150x150';

export class RankingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: ['snsd', 'exo']
    });
  }

  render() {
    return (
      <Container>
        <h1>Popularity Ranking</h1>
        <Card.Group itemsPerRow={4}>
          { this.state.data.map((item) => (
            <Card key={item}>
              <Image src={src} />
              <Card.Content>
                <Card.Header>
                  {item}
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Joined in 2015
                  </span>
                </Card.Meta>
                <Card.Description>
                  XXX
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    )
  }
}
