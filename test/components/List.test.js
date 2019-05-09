/* global describe, it */
import { shallow, mount } from 'enzyme'
import React from 'react'
import expect from 'expect.js'
import { listItemsArray, listItemsArrayLarge, slug } from '../../config/testConfig'
import { List } from '../../components/'


describe('List', () => {
  context('Returns correct list items', () => {
    const component = shallow(<List listItems={listItemsArray} slug={slug} />)

    it('Returns ok with set props', () => {
      expect(component).to.be.ok()
    })
    it('Returns amount of list items passed in + seeMore', () => {
      expect(component.find('li').length).to.equal(2)
    })
  })

  context('Shows see more button', () => {
    const component = shallow(<List listItems={listItemsArrayLarge} slug={slug} />)

    it('More then 10 items', () => {
      expect(component.find('li').length).to.equal(11)
    })
  })

  context('See more button', () => {
    const component = mount(<List listItems={listItemsArrayLarge} slug={slug} />)
    component.find('.showMore').simulate('click')
    it('Shows all items', () => {
      expect(component.find('li').length).to.equal(13)
    })
  })

  context('Falls over gracefully', () => {
    const component = shallow(<List />)

    it('No JS error from empty array', () => {
      expect(component).to.be.ok()
    })
  })
})
