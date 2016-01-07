const Menu = require("menu");

module.exports = {
    setMenu: (app: any, browserWindow: any) => {
        if (process.platform === "darwin") {
            var template = [
                {
                    label: "Black Screen",
                    submenu: [
                        {
                            label: "About Black Screen",
                            selector: "orderFrontStandardAboutPanel:"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "separator"
                        },
                        {
                            label: "Hide Black Screen",
                            accelerator: "Command+H",
                            selector: "hide:"
                        },
                        {
                            label: "Hide Others",
                            accelerator: "Command+Shift+H",
                            selector: "hideOtherApplications:"
                        },
                        {
                            label: "Show All",
                            selector: "unhideAllApplications:"
                        },
                        {
                            type: "separator"
                        },
                        {
                            label: "Quit",
                            accelerator: "Command+Q",
                            click: function () {
                                app.quit();
                            }
                        }
                    ]
                },
                {
                    label: "Edit",
                    submenu: [
                        {
                            label: "Undo",
                            accelerator: "Command+Z",
                            selector: "undo:"
                        },
                        {
                            label: "Redo",
                            accelerator: "Shift+Command+Z",
                            selector: "redo:"
                        },
                        {
                            type: "separator"
                        },
                        {
                            label: "Cut",
                            accelerator: "Command+X",
                            selector: "cut:"
                        },
                        {
                            label: "Copy",
                            accelerator: "Command+C",
                            selector: "copy:"
                        },
                        {
                            label: "Paste",
                            accelerator: "Command+V",
                            selector: "paste:"
                        },
                        {
                            label: "Select All",
                            accelerator: "Command+A",
                            selector: "selectAll:"
                        }
                    ]
                },
                {
                    label: "View",
                    submenu: [
                        {
                            label: "Reload",
                            accelerator: "Command+R",
                            click: function () {
                                browserWindow.reload();
                            }
                        },
                        {
                            label: "Toggle Full Screen",
                            accelerator: "Ctrl+Command+F",
                            click: function () {
                                browserWindow.setFullScreen(!browserWindow.isFullScreen());
                            }
                        },
                        {
                            label: "Toggle Developer Tools",
                            accelerator: "Alt+Command+I",
                            click: function () {
                                browserWindow.toggleDevTools();
                            }
                        }
                    ]
                },
                {
                    label: "Window",
                    submenu: [
                        {
                            label: "Minimize",
                            accelerator: "Command+M",
                            selector: "performMiniaturize:"
                        },
                        {
                            label: "Close",
                            accelerator: "Command+W",
                            selector: "performClose:"
                        },
                        {
                            type: "separator"
                        },
                        {
                            label: "Bring All to Front",
                            selector: "arrangeInFront:"
                        }
                    ]
                },
                {
                    label: "Help",
                    submenu: [
                        {
                            label: "GitHub Repository",
                            click: function () {
                                require("shell").openExternal("https://github.com/shockone/black-screen")
                            }
                        }
                    ]
                }
            ];

            let menu = Menu.buildFromTemplate(template);
            Menu.setApplicationMenu(menu);
        } else {
            template = [
                {
                    label: "&View",
                    submenu: [
                        {
                            label: "&Reload",
                            accelerator: "Ctrl+R",
                            click: function () {
                                browserWindow.reload();
                            }
                        },
                        {
                            label: "Toggle &Full Screen",
                            accelerator: "F11",
                            click: function () {
                                browserWindow.setFullScreen(!browserWindow.isFullScreen());
                            }
                        },
                        {
                            label: "Toggle &Developer Tools",
                            accelerator: "Alt+Ctrl+I",
                            click: function () {
                                browserWindow.toggleDevTools();
                            }
                        }
                    ]
                },
                {
                    label: "Help",
                    submenu: [
                        {
                            label: "GitHub Repository",
                            click: function () {
                                require("shell").openExternal("https://github.com/shockone/black-screen")
                            }
                        }
                    ]
                }
            ];

            let menu = Menu.buildFromTemplate(template);
            browserWindow.setMenu(menu);
        }
    }
};
