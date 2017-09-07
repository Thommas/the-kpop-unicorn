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
        slug: null,
        tweets: [],
        album_count: 0
      }
    };
  }

  getPercentageColor(percentage) {
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
    nodeApiService.getData(`/api/band/${this.props.match.params.slug}`).then((data) => {
      data.album_percentage = Math.round(data.spotify_album_count / data.nautiljon_album_count * 100, 2);
      data.album_percentage_color = this.getPercentageColor(data.album_percentage);
      data.song_percentage = Math.round(data.spotify_song_count / data.nautiljon_song_count * 100, 2);
      data.song_percentage_color = this.getPercentageColor(data.song_percentage);
      this.setState({data: data})
    });
  }

  render() {
    return (
      <Container>
        <h1>{this.state.data.title}</h1>

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
          <Statistic.Group widths='four'>
            <Statistic inverted>
              <Statistic.Value>{this.state.data.spotify_album_count}</Statistic.Value>
              <Statistic.Label>Spotify</Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>10</Statistic.Value>
              <Statistic.Label>MusixMatch</Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>{this.state.data.nautiljon_album_count}</Statistic.Value>
              <Statistic.Label>Nautiljon</Statistic.Label>
            </Statistic>
            <Statistic inverted color={this.state.data.album_percentage_color}>
              <Statistic.Value>{this.state.data.album_percentage}%</Statistic.Value>
              <Statistic.Label>Digital presence score</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>

        <h3>Songs</h3>
        <Segment inverted>
          <Statistic.Group widths='four'>
            <Statistic inverted>
              <Statistic.Value>{this.state.data.spotify_song_count}</Statistic.Value>
              <Statistic.Label>Spotify</Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>10</Statistic.Value>
              <Statistic.Label>MusixMatch</Statistic.Label>
            </Statistic>
            <Statistic inverted>
              <Statistic.Value>{this.state.data.nautiljon_song_count}</Statistic.Value>
              <Statistic.Label>Nautiljon</Statistic.Label>
            </Statistic>
            <Statistic inverted color={this.state.data.song_percentage_color}>
              <Statistic.Value>{this.state.data.song_percentage}%</Statistic.Value>
              <Statistic.Label>Digital presence score</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
      </Container>
    )
  }
}
