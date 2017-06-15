import Immutable from 'immutable'

describe('Immutable Training Test', () => {
  describe('Map and List Test On Training Course', () => {
    it('should set nested props against map', () => {
      const aMap = Immutable.Map({
        key: 'key',
        subObject: Immutable.Map({
          subKey: 'subKey',
          subSubObject: null,
        }),
      })
      expect(aMap.get('key')).toEqual('key')
      expect(aMap.getIn(['subObject', 'subKey'])).toEqual('subKey')

      const bMap = aMap.setIn(['subObject', 'subSubObject'], Immutable.Map({
        subSubKey: 'subSubKey',
      }))
      expect(bMap.getIn(['subObject', 'subSubObject', 'subSubKey'])).toEqual('subSubKey')
    })
    it('should set nested props against map with fromJS', () => {
      const aMap = Immutable.fromJS({
        key: 'key',
        subObject: {
          subKey: 'subKey',
          subSubObject: {
            subSubKey: 'subSubKey',
          },
        },
      })
      expect(aMap.getIn(['subObject', 'subSubObject', 'subSubKey'])).toEqual('subSubKey')
    })
  })
})
