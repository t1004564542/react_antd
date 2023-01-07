const defaultState = {
  inputValue: 'Write Something',
  list: [
    'one',
    'two'
  ],
}

const reducer =(previousProps = defaultState, action) => {
  let newStatus = JSON.parse(JSON.stringify(defaultState))
  if(action.type === 'changeName') {
    newStatus.inputValue = action.value
  }
  return newStatus
}

export default reducer
