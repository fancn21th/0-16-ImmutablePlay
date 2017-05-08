import Immutable from 'immutable'
import _ from 'lodash'

const createObjectTodos = (numTodos) => {
  const obj = {}
  _.range(numTodos).forEach((index) => {
    const todoSequence = String(index + 1)
    obj[`TODO${todoSequence}`] = {
      title: `TODO ${todoSequence}`,
      value: `Make ${todoSequence} happen`,
    }
  })
  return obj
}

describe('Immutable Map Sample Test', () => {
  it('should create Map with matching keys', () => {
    const data = {
      TODO1: {
        title: 'TODO 1',
        value: 'Make it happen',
      },
      TODO2: {
        title: 'TODO 2',
        value: 'Make it happen',
      },
    }

    const map = Immutable.Map(data)
    expect(map.get('TODO1').title).toEqual('TODO 1')
  })

  it('should create Map with keys from array tuples', () => {
    const map = Immutable.Map([['TODO1', { title: 'TODO 1' }]])
    expect(map.get('TODO1').title).toEqual('TODO 1')
  })

  it('should create Map with matching size to number of keys', () => {
    const map = Immutable.Map(createObjectTodos(3))
    expect(map.size).toEqual(3)
  })
})
