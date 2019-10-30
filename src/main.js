// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');
const Sentry = require('@sentry/node');
const { autoUpdater } = require("electron-updater");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
const log = require("electron-log")
const express = require('express');
const appExpress = express();

let mainWindow
const notifier = require('node-notifier');
Sentry.init({ dsn: 'https://8839572e21fe429bb5f080d732e169af@sentry.io/1776203' });
autoUpdater.logger = log
log.transports.file.level = "debug"
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.on('checking-for-update', () => {
    // Object
    /* notifier.notify({
        title: 'Update',
        message: 'Checking for update...'
    }); */
})
autoUpdater.on('update-available', (info) => {
    // Object
    /* notifier.notify({
        title: 'Update',
        message: 'Update available.'
    }); */
})
autoUpdater.on('update-not-available', (info) => {
    // Object
    /* notifier.notify({
        title: 'Update',
        message: 'Actualizaciones no disponibles'
    }); */
})
autoUpdater.on('error', (err) => {
    // Object
    /* notifier.notify({
        title: 'Update',
        message: 'Error in auto-updater. ' + err
    }); */
})
autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    /* notifier.notify({
        title: 'RRHH-LEGAJO-ACTUALIZACION',
        message: 'Descarga: ' + log_message
    }); */
})
autoUpdater.on('update-downloaded', (info) => {
    // Object
    notifier.notify({
        title: 'RRHH-LEGAJO-ACTUALIZACION',
        message: 'Actualizacion descargada, Reinicia la aplicacion para instalarla automaticamente.'
    });
});

function createWindow() {
    // Create the browser window.

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        /*  frame: false, */
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.removeMenu()
    //mainWindow.setIgnoreMouseEvents(true)
    // and load the index.html of the app.
    //mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    autoUpdater.checkForUpdatesAndNotify()
    
    appExpress.use(Sentry.Handlers.errorHandler());
    appExpress.use(express.static(path.join(__dirname, '../build')));

    appExpress.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
    appExpress.listen(9000);
    mainWindow.loadURL('http://localhost:9000/')
    /*   const startUrl =
          process.env.ELECTRON_START_URL ||
          url.format({
              pathname: path.join(__dirname, "/../build/index.html"),
              protocol: "file:",
              slashes: true
          })
      mainWindow.loadURL(startUrl) */

    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})
/* "win": {
    "publish": [
        "github"
    ]
}, */
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.