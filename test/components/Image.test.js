/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { assetsUrl } from '../../config'
import { id, name } from '../../config/testConfig'
import { Image } from '../../components/'


describe('Image', () => {
  context('Returns correct list items', () => {
    const component = shallow(<Image id={id} name={name} />)
    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
    it('Has correct src attribute', () => {
      expect(component.find('img').props().src).to.equal(`${assetsUrl}/${id}.jpg`)
    })
    it('Has correct alt attribute', () => {
      expect(component.find('img').props().alt).to.equal(name)
    })
  })

  context('Falls over gracefully', () => {
    const component = shallow(<Image />)

    it('No JS error from empty props', () => {
      expect(component).to.be.ok()
    })
  })
})
