/**
 * The Kpop Unicorn
 *
 * Component - Footer
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

export class FooterComponent extends Component {
  render() {
    return (
      <div>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Contact</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='We need you' />
                  <List link inverted>
                    <List.Item as='a'>Contribute</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>The Kpop Unicorn</Header>
                  <p>Promoting kpop bands in France.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}