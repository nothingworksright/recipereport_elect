const {app, BrowserWindow, ipcMain} = require(`electron`)
const path = require(`path`)
const url = require(`url`)
const pug = require(`electron-pug`)({pretty: true})

let win

app.on(`window-all-closed`, () => app.quit())

app.on(`ready`, () => {
  win = new BrowserWindow({
      height: 600,
      width: 800,
      autoHideMenuBar: true,
      icon: `./public/images/favicon.ico`
  })
  win.loadURL(url.format({
    pathname: path.join(__dirname, `./views/index.pug`),
    protocol: `file:`,
    slashes: true
  }))
  win.focus()
})


ipcMain.on('loginFormSubmit', (event, email, password) => {
    console.log(`${email} ${password}`)
});
