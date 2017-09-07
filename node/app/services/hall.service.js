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
    'img': 'http://placehold.it/64x64',
    'score_required': 95
  },
  {
    'title': 'Accor Hotel Arena - Palais Omnisports de Paris-Bercy',
    'seats': 17000,
    'img': 'http://placehold.it/64x64',
    'score_required': 70
  },
  {
    'title': 'Le Zénith',
    'seats': 6400,
    'img': 'http://placehold.it/64x64',
    'score_required': 60
  },
  {
    'title': 'Le Grand Rex',
    'seats': 2650,
    'img': 'http://placehold.it/64x64',
    'score_required': 50
  },
  {
    'title': 'La Locomotive',
    'seats': 2500,
    'img': 'http://placehold.it/64x64',
    'score_required': 45
  },
  {
    'title': 'L’Olympia',
    'seats': 2000,
    'img': 'http://placehold.it/64x64',
    'score_required': 42
  },
  {
    'title': 'La Salle Pleyel',
    'seats': 1913,
    'img': 'http://placehold.it/64x64',
    'score_required': 37
  },
  {
    'title': 'Elysée Montmartre',
    'seats': 2000,
    'img': 'http://placehold.it/64x64',
    'score_required': 40
  },
  {
    'title': 'Bataclan',
    'seats': 1500,
    'img': 'http://placehold.it/64x64',
    'score_required': 35
  },
  {
    'title': 'La Cigale',
    'seats': 1389,
    'img': 'http://placehold.it/64x64',
    'score_required': 33
  },
  {
    'title': 'Trabendo',
    'seats': 700,
    'img': 'http://placehold.it/64x64',
    'score_required': 31
  },
  {
    'title': 'Le Gibus',
    'seats': 600,
    'img': 'http://placehold.it/64x64',
    'score_required': 29
  },
  {
    'title': 'La Bellevilloise',
    'seats': 600,
    'img': 'http://placehold.it/64x64',
    'score_required': 27
  },
  {
    'title': 'Le New Morning',
    'seats': 500,
    'img': 'http://placehold.it/64x64',
    'score_required': 25
  },
  {
    'title': 'Le Divan du Monde',
    'seats': 500,
    'img': 'http://placehold.it/64x64',
    'score_required': 22
  },
  {
    'title': 'La Flèche d’or',
    'seats': 490,
    'img': 'http://placehold.it/64x64',
    'score_required': 20
  },
  {
    'title': 'Le Café de la Danse',
    'seats': 450,
    'img': 'http://placehold.it/64x64',
    'score_required': 18
  },
  {
    'title': 'Réservoir',
    'seats': 400,
    'img': 'http://placehold.it/64x64',
    'score_required': 15
  },
  {
    'title': 'Le Nouveau Casino',
    'seats': 380,
    'img': 'http://placehold.it/64x64',
    'score_required': 12
  },
  {
    'title': 'La Scène Bastille',
    'seats': 350,
    'img': 'http://placehold.it/64x64',
    'score_required': 10
  },
  {
    'title': 'La Boule Noire',
    'seats': 300,
    'img': 'http://placehold.it/64x64',
    'score_required': 8
  },
  {
    'title': 'La Maroquinerie',
    'seats': 300,
    'img': 'http://placehold.it/64x64',
    'score_required': 6
  },
  {
    'title': 'Batofar',
    'seats': 300,
    'img': 'http://placehold.it/64x64',
    'score_required': 4
  },
  {
    'title': 'Point Ephemere',
    'seats': 300,
    'img': 'http://placehold.it/64x64',
    'score_required': 2
  }
];

/**
 * Retrieve halls
 */
exports.getHalls = () => {
  return Promise.resolve(STATIC_HALLS_DATA);
}
