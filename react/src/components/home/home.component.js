/**
 * The Kpop Unicorn
 *
 * Component - Home
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React, { Component } from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <h1>THE KPOP UNICORN</h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}><FormattedMessage id='home.header1.title'/></Header>
                <p style={{ fontSize: '1.33em' }}><FormattedMessage id='home.header1.description'/></p>
                <Header as='h3' style={{ fontSize: '2em' }}><FormattedMessage id='home.header2.title'/></Header>
                <p style={{ fontSize: '1.33em' }}><FormattedMessage id='home.header2.description'/></p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  size='large'
                  src='https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge' as={Link} to='/ranking'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}