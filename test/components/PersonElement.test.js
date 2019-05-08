/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { personObject } from '../../config/testConfig'
import { PersonElement } from '../../components/'


describe('Person', () => {
  context('Mounts correctly', () => {
    const component = shallow(<PersonElement person={personObject} />)

    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
  })

  context('Each item is rendered correctly when all information present', () => {
    const component = shallow(<PersonElement person={personObject} />)
    // shallow mounting for more accurate results but requires specific classes.
    it('Renders name', () => {
      expect(component.find('.name').contains(personObject.name)).to.equal(true)
    })
    it('Renders gender', () => {
      expect(component.find('.gender').contains(personObject.gender)).to.equal(true)
    })
    it('Renders hairColor', () => {
      expect(component.find('.hairColor').contains(personObject.hairColor)).to.equal(true)
    })
    it('Renders height', () => {
      expect(component.find('.height').contains(personObject.height)).to.equal(true)
    })
    it('Renders Species', () => {
      expect(component.find('.species').contains(personObject.species.name)).to.equal(true)
    })
    it('Renders homeWorld', () => {
      expect(component.find('.homeWorld').contains(personObject.homeworld.name)).to.equal(true)
    })
  })

  context('If no vehicles films or starships available, feed it back to user', () => {
    personObject.vehicleConnection.vehicles = []
    personObject.filmConnection.films = []
    personObject.starshipConnection.starships = []
    const component = shallow(<PersonElement person={personObject} />)
    // shallow mounting for more accurate results but requires specific classes.
    it('no vehicleConnections', () => {
      expect(component.find('.noVehicles').length).to.equal(1)
    })
    it('no filmConnections', () => {
      expect(component.find('.noFilms').length).to.equal(1)
    })
    it('no starshipConnections', () => {
      expect(component.find('.noStarships').length).to.equal(1)
    })
  })
})
