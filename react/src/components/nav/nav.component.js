/**
 * The Kpop Unicorn
 *
 * Component - Nav
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

import React from 'react'
import {
  Container,
  Menu
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'
import { FormattedMessage } from 'react-intl';
import './nav.component.css';

export const NavComponent = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as={Link} to="/">
        <FormattedMessage id="nav.home"/>
      </Menu.Item>
      <Menu.Item as={Link} to="/ranking">Popularity ranking</Menu.Item>
      <Menu.Item as={Link} to="/bands">Kpop bands</Menu.Item>
      <Menu.Item as={Link} to="/halls">Concert halls</Menu.Item>
    </Container>
  </Menu>
)
