// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.remote.BrowserWindow

const path = require('path')
const url = require('url')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  let win = new BrowserWindow({width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'modal1.html'),
    protocol:"file",
    slashes : true}))
  win.show()
            })

function myFunction() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;

  let win = new BrowserWindow({width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'modal.html'),
    protocol:"file",
    slashes : true}))
  win.show()
        }

function myFunction2() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
   var win = new BrowserWindow({ width: 200, height: 200 });
    }
