/**
 * The Kpop Unicorn
 *
 * App
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { addLocaleData, IntlProvider } from 'react-intl';
import './App.css';
import {
  HomeComponent,
  NavComponent,
  FooterComponent
} from './components';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';

let frLocaleData = require('react-intl/locale-data/fr');
let jaLocaleData = require('react-intl/locale-data/ja');

addLocaleData(frLocaleData);
addLocaleData(jaLocaleData);

addLocaleData([...en, ...fr, ...ja]);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
      messages: en
    };
  }

  componentWillMount() {
    const locale = navigator.language.substring(0, 2);
    let messages = en;
    if (locale === 'fr') {
      messages = fr;
    } else if (locale === 'ja') {
      messages = ja;
    }
    this.setState({
      locale: locale,
      messages: messages
    });
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <Router>
          <div>
            <NavComponent></NavComponent>
            <Route exact path="/" component={HomeComponent}/>
            <FooterComponent></FooterComponent>
          </div>
        </Router>
      </IntlProvider>
    )
  }
}