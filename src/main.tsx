import { startApp } from './.app/app';

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

startApp()

postMessage({ payload: 'removeLoading' }, '*')
