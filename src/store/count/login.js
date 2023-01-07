const defaultState = {
  userInfo: JSON.parse(window.localStorage.getItem('userinfo')) || {}
}

const reducer =(previousProps = defaultState, action) => {
  let newStatus = JSON.parse(JSON.stringify(defaultState))
  if(action.type === 'saveUserInfo') {
    newStatus.userInfo = action.value
    window.localStorage.setItem('userinfo', JSON.stringify(action.value))
  }
  if(action.type === 'loginOut') {
    newStatus.userInfo = {}
    window.localStorage.removeItem('userinfo')
  }
  return newStatus
}

export default reducer
