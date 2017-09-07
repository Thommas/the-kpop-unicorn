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
  Segment,
  Feed,
  Grid,
} from 'semantic-ui-react'
import NodeApiService from '../../services/node-api.service.js';

export class BandShowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: null,
        tweets: [],
        album_count: 0
      }
    };
  }

  getAlbumPercentage(data) {
    return Math.round(data.album_count / 200 * 100, 2);
  }

  getAlbumPercentageColor(percentage) {
    if (percentage < 10) {
      return 'red';
    } else if (percentage >= 10 && percentage < 50) {
      return 'orange';
    } else if (percentage >= 50 && percentage < 80) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  componentDidMount() {
    const nodeApiService = new NodeApiService();
    nodeApiService.getData(`/api/band/${this.props.match.params.title}`).then((data) => {
      data.album_percentage = this.getAlbumPercentage(data);
      data.album_percentage_color = this.getAlbumPercentageColor(data.album_percentage);
      this.setState({data: data})
    });
  }

  render() {
    return (
      <Container>
        <h1>{this.props.match.params.title}</h1>

        <h3>Tweets</h3>
        <Grid columns='three' divided>
          <Grid.Row>
            { this.state.data.tweets.map((tweet) => (
            <Grid.Column textAlign='center' key={tweet.id}>
              <Feed>
                <Feed.Event>
                  <Feed.Label image={tweet.user.profile_image_url_https} />
                  <Feed.Content>
                    <Feed.Date>{tweet.created_at}</Feed.Date>
                    <Feed.Summary>{tweet.text}</Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>

        <h3>Albums</h3>
        <Segment inverted>
          <Statistic inverted>
            <Statistic.Value>{this.state.data.album_count}</Statistic.Value>
            <Statistic.Label>Albums on Spotify</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>10</Statistic.Value>
            <Statistic.Label>Albums on MusixMatch</Statistic.Label>
          </Statistic>
          <Statistic inverted>
            <Statistic.Value>200</Statistic.Value>
            <Statistic.Label>Albums</Statistic.Label>
          </Statistic>
          <Statistic inverted color={this.state.data.album_percentage_color}>
            <Statistic.Value>{this.state.data.album_percentage}%</Statistic.Value>
            <Statistic.Label>Digital presence score</Statistic.Label>
          </Statistic>
        </Segment>
      </Container>
    )
  }
}
