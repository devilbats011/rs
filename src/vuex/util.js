// eslint-disable-next-line no-unused-vars
function initSetHeightMask () {
  const section = window.document.querySelector('#alog-container')
  // eslint-disable-next-line prefer-const
  let sectionHeight = section.offsetHeight
  const mask = window.document.querySelector('#alog-mask')
  mask.style.height = sectionHeight + 'px'
}
function setChildToParentHeight (parentId, childId) {
  const section = window.document.querySelector(`#${parentId}`)
  // eslint-disable-next-line prefer-const
  let sectionHeight = section.offsetHeight
  const mask = window.document.querySelector(`#${childId}`)
  mask.style.height = sectionHeight + 'px'
}
// function hw (val) {
//   console.log(val, 'get val')
// }

export { initSetHeightMask, setChildToParentHeight }
