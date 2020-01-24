// add core Node.js modules
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = require("electron");

// Keep a global reference of the window object, if you
// don't, the window will be closed automatically when
// the JavaScript object is garbage collected.
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 640,
    height: 480
  });
  win.loadURL;

  // use url and path to make loading of main.html
  // platform independent
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file",
      slashes: true
    })
  );

  // Emitted when the window is closed.
  // Dereference the window object, usually you would store windows
  // in an array if your app supports multi windows, this is the time
  // when you should delete the corresponding element.
  win.on("closed", function() {
    win = null;
  });

  // ('file://' + __dirname + '/main.html')
}

app.on("ready", createWindow);

// Quit when all windows are closed.
// On OS X it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})