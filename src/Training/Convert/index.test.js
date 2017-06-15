import Immutable from 'immutable'

describe('Immutable Training Test', () => {
  describe('Map and List Conversion Training Course', () => {
    it('should convert list to map', () => {
      const list = Immutable.List.of('First Item', 'Second Item')
      const convertedMap = list.toMap()
      const keys = convertedMap.keys()
      expect(keys.next().value).toEqual(0)
      expect(convertedMap.first()).toEqual('First Item')
    })
    it('should convert map to javascript array', () => {
      const map = Immutable.Map({
        key1: 'key1',
        key2: 'key2',
        key3: {
          key4: 'key4',
        },
      })
      const arr = map.toArray()
      expect(arr[0]).toEqual('key1')
      expect(arr[2].key4).toEqual('key4')
    })
    it('should convert map to JSON', () => {
      const map = Immutable.Map({
        key1: 'key1',
        key2: 'key2',
        key3: {
          key4: 'key4',
        },
      })
      const json = map.toJSON()
      expect(json.key1).toEqual('key1')
      expect(json.key3.key4).toEqual('key4')
    })
  })
})
