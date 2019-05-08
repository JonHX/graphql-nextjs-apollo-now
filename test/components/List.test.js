/* global describe, it */
import { shallow } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { listItemsArray, slug } from '../../config/testConfig'
import { List } from '../../components/'


describe('List', () => {
  context('Returns correct list items', () => {
    const component = shallow(<List listItems={listItemsArray} slug={slug} />)

    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
    it('Returns amount of list items passed in', () => {
      expect(component.find('li').length).to.equal(2)
    })
  })

  context('Falls over gracefully', () => {
    const component = shallow(<List />)

    it('No JS error from empty array', () => {
      expect(component).to.be.ok()
    })
  })
})
