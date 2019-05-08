/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { vehicleObject } from '../../config/testConfig'
import { VehicleElement } from '../../components/'


describe('Vehicle', () => {
  context('Mounts correctly', () => {
    const component = shallow(<VehicleElement vehicle={vehicleObject} />)

    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
  })

  context('Each item is rendered correctly when all information present', () => {
    const component = shallow(<VehicleElement vehicle={vehicleObject} />)
    // shallow mounting for more accurate results but requires specific classes.
    it('Renders name', () => {
      expect(component.find('.name').contains(vehicleObject.name)).to.equal(true)
    })
    it('Renders model', () => {
      expect(component.find('.model').contains(vehicleObject.model)).to.equal(true)
    })
    it('Renders class', () => {
      expect(component.find('.class').contains(vehicleObject.vehicleClass)).to.equal(true)
    })
    it('Renders crew/Passengers', () => {
      expect(component.find('.crewPassengers').contains(vehicleObject.crew)).to.equal(true)
      expect(component.find('.crewPassengers').contains(vehicleObject.passengers)).to.equal(true)
    })
    it('Renders cargoCapacity', () => {
      expect(component.find('.cargoCapacity').contains(vehicleObject.cargoCapacity)).to.equal(true)
    })
    it('Renders speed', () => {
      expect(component.find('.speed').contains(vehicleObject.maxAtmospheringSpeed)).to.equal(true)
    })
  })

  context('If no films or pilot connections available, feed it back to user', () => {
    vehicleObject.filmConnection.films = []
    vehicleObject.pilotConnection.pilots = []
    const component = shallow(<VehicleElement vehicle={vehicleObject} />)
    // shallow mounting for more accurate results but requires specific classes.
    it('no vehicleConnections', () => {
      expect(component.find('.noPilots').length).to.equal(1)
    })
    it('no filmConnections', () => {
      expect(component.find('.noFilms').length).to.equal(1)
    })
  })
})
