/* global describe, it */
import { mount } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { Header } from '../../components/'


describe('Header', () => {
  context('Homepage with title', () => {
    const component = mount(<Header router={{pathname: '/'}} />)

    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
    it('has h1', () => {
      expect(component.find('h1').length).to.equal(1)
    })
    it('no back button', () => {
      expect(component.find('a').length).to.equal(0)
    })
  })
  context('Homepage with title', () => {
    const component = mount(<Header router={{pathname: 'person/id'}} />)
    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
    it('no back button', () => {
      expect(component.find('a').length).to.equal(1)
    })
  })
})
