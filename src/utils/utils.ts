export const replaceObjState = (
  oldState: Dictionary = {},
  newState: Dictionary = {}
) => {
  Object.keys(newState).forEach((name) => {
    oldState[name] = newState[name]
  })
}
