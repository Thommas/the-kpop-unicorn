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
  <Menu size='large'>
    <Container>
      <Menu.Item as={Link} to='/'><FormattedMessage id='nav.home'/></Menu.Item>
      <Menu.Item as={Link} to='/ranking'><FormattedMessage id='nav.ranking'/></Menu.Item>
      <Menu.Item as={Link} to='/band'><FormattedMessage id='nav.band'/></Menu.Item>
      <Menu.Item as={Link} to='/hall'><FormattedMessage id='nav.hall'/></Menu.Item>
    </Container>
  </Menu>
)
