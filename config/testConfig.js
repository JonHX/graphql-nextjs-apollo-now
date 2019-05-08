module.exports = {
  id: 'testID',
  name: 'testName',
  listItemsArray: [
    { id: 'cGVvcGxlOjE=', name: 'Luke Skywalker' },
    { id: 'cGVvcGxlOjI=', name: 'C-3PO' },
  ],
  slug: 'testSlug',
  personObject: {
    name: 'Luke Skywalker',
    id: 'cGVvcGxlOjE=',
    gender: 'male',
    height: 172,
    birthYear: '19BBY',
    hairColor: 'blond',
    species: {
      name: 'Human',
    },
    homeworld: {
      name: 'Tatooine',
    },
    filmConnection: {
      films: [{
        id: 'ZmlsbXM6MQ==',
        title: 'A New Hope',
      }],
    },
    vehicleConnection: {
      vehicles: [{
        id: 'dmVoaWNsZXM6MTQ=',
        name: 'Snowspeeder',
      }],
    },
    starshipConnection: {
      starships: [{
        id: 'c3RhcnNoaXBzOjEy',
        name: 'X-wing',
      }],
    },
  },
  vehicleObject: {
    name: 'Snowspeeder',
    passengers: '0',
    vehicleClass: 'airspeeder',
    manufacturers: [
      'Incom corporation',
    ],
    maxAtmospheringSpeed: 650,
    id: 'dmVoaWNsZXM6MTQ=',
    model: 't-47 airspeeder',
    filmConnection: {
      films: [
        {
          id: 'ZmlsbXM6Mg==',
          title: 'The Empire Strikes Back',
        },
      ],
    },
    pilotConnection: {
      pilots: [
        {
          name: 'Luke Skywalker',
          id: 'cGVvcGxlOjE=',
        },
      ],
    },
    crew: '2',
    cargoCapacity: 10,
  },
}
