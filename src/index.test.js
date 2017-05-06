import Immutable from 'immutable'
import _ from 'lodash'

const createObjectTodos = numTodos => {
  let obj = {}
  _.range(numTodos).forEach( index => {
    const todoSequence = String(index + 1)
    obj['TODO' + todoSequence] = {
      title: 'Todo ' + todoSequence,
      value: `Make ${todoSequence} happen`
    }
  })
  return obj
}

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

  it('should create Map with keys from array tuples', function () {
    let map = Immutable.Map([["TODO1", {title: 'TODO 1'}]])
    expect(map.get('TODO1').title).toEqual("TODO 1")
  })

  it('should create Map with matching size to number of keys', function () {
    let map = Immutable.Map(createObjectTodos(3))
    expect(map.size).toEqual(3)
  })
})
