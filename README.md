## SECOND ANGULAR 2 APP

- installation

clone repo and then navigate to the directory. Execute this command to install
the components

`~> quickstart git:(master) npm install`

Run the application with this command

`quickstart git:(master) ~> npm start` 

- Note:

If you see that there are some problems with lite-server, if you are running linux
modify this file `~> /etc sysctl.conf` and add this lines
```
# Lite Server for Angular 2 expand memory 
 62 fs.inotify.max_user_watches = 524288
```
