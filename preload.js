const { readFileSync } = require('fs');

window.readConfig = async function () {
  const path = await utools.getPath('home');
  console.log(path);
}
window.hideMainWindow = function () {
  utools.hideMainWindow()
}
window.showNotification = function () {
  utools.showNotification('HI, rubick')
}
utools.onPluginReady((e) => {
  console.log('ready', e)
})
utools.onPluginEnter((e) => {
  console.log('enter', e)
})
