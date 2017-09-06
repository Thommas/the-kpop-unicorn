/**
 * The Kpop Unicorn
 *
 * Services - Hall
 *
 * @module services/hall
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const STATIC_HALLS_DATA = [
  {
    'title': 'Parc des Princes',
    'seats': 54000,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Accor Hotel Arena - Palais Omnisports de Paris-Bercy',
    'seats': 17000,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Zénith',
    'seats': 6400,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Grand Rex',
    'seats': 2650,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Locomotive',
    'seats': 2500,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'L’Olympia',
    'seats': 2000,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Salle Pleyel',
    'seats': 1913,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Elysée Montmartre',
    'seats': 2000,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Bataclan',
    'seats': 1500,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Cigale',
    'seats': 1389,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Trabendo',
    'seats': 700,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Gibus',
    'seats': 600,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Bellevilloise',
    'seats': 600,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le New Morning',
    'seats': 500,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Divan du Monde',
    'seats': 500,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Flèche d’or',
    'seats': 490,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Café de la Danse',
    'seats': 450,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Réservoir',
    'seats': 400,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Le Nouveau Casino',
    'seats': 380,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Scène Bastille',
    'seats': 350,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Boule Noire',
    'seats': 300,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'La Maroquinerie',
    'seats': 300,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Batofar',
    'seats': 300,
    'img': 'http://placehold.it/64x64'
  },
  {
    'title': 'Point Ephemere',
    'seats': 300,
    'img': 'http://placehold.it/64x64'
  }
];

/**
 * Retrieve halls
 */
exports.getHalls = () => {
  return Promise.resolve(STATIC_HALLS_DATA);
}
