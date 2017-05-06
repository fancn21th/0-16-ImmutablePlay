import Immutable from 'immutable'

describe('Immutable Map Sample Test', function () {
  it('should create Map with matching keys', function () {
    const data = {
      "TODO1" : {
        title: 'TODO 1',
        value: 'Make it happen'
      },
      "TODO2" : {
        title: 'TODO 2',
        value: 'Make it happen'
      },
    }

    let map = Immutable.Map(data)
    expect(map.get("TODO1").title).toEqual("TODO 1")
  })
})
