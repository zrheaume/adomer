# adomer Suite
__Zach Rheaume__
_Bootcamp Project 3_

### The concept

The idea from this project came to me after experimenting with the React 16.8 update, and the concept of writing react components, both stateless and stateful, as pure function components instead of class-based ones. Through the use of React hooks ( useState, useEffect, ...), components can be further modularized for re-use. The idea behind adomer is to provide a platform for creating, analyzing, refactoring, and/or sharing 'create-react-app' style applications.

The adomer suite is comprised of three main components:
## adomer online  
   - Online application through which users must register with the service.
   Users can then install the adomer-toolkit package via npm and "hook" apps into the service using login credentials.
   An app that is "hooked" into the service will send certain data about the application to the service during the hooking
   process, mostly centered around the app directory structure and react components. Once this process has been completed,
   the user may log on to the service's web application to view individual standalone components, component tree maps, analytics
   and, if time permits implementation, view interactions between REST-api components and their respective api endpoints 
   (for apps created using `atk create`)
   - Featuring: 
      + React-powered front end (browser-routable, )
      + Passport authentication
      + User data persistance using mongo
      + Session management using socket.io & redis
      + Dynamic component rendering via react-dom
      
## adomer-toolkit
**__Note:__ "pathLike" refers to a String which, if passed to isPathLike atk function, returns true**
   
   
   - npm package which, when installed globally, allows the user to execute `atk` scripts
   - `$ atk ? <appDirectory : pathLike>` -> test appDirectory validity. Returns `ATKmap { isReactEnabled : <boolean>, ... }` (see atk docs)
   - `$ atk create <appDirectory : pathLike>` -> __IMPORTANT:__ this command is only to be used for creating a _new_ application.
      + adomer-toolkit will write a boilerplate full-stack application to the directory you pass to `atk create`
      + [ appDirectory ]<br/>
      |<br/>
      |=--> package.json <br/>
      |=--> .babelrc <br/>
      |=--> .eslint <br/>
      |=--> client<br/>
      |.....|<br/>
      |.....|=--> `$ create-react-app .` =--> package.json modified [ adds "proxy" for dev server ] <br/>
      |<br/>
      |=--> server<br/>
      ......|<br/>
      ......|=--> index.js  <br/>
      ......|=--> server.js [ express server, defaults port to process.env.PORT || 8080 ]<br/>
      ......|=--> config<br/>
      ......|.....|<br/>
      ......|.....|=--> middleware.js [  ]<br/>
      ......|<br/>
      ......|=--> routes <br/>
      ............|<br/>
      ............|=--> index.js [ default routes * to ../client/build/ ]<br/>
      + __ECMA 2017 Development Environment__
      + __Express Server__
   - `$ atk login -u <username : String> <>` -> main method of connecting an app to service
   - `$ atk hook <appDirectory : pathLike> -a <adomerAppName : String>` -> main method of uploading app data to the service. 
      + Instantiates a mapping class, which recursively calls `ATKmap.snoop()` down the app directory, producing a "tree" directory map object. ATKmap will ignore node_modules, production builds, and a number of other irrelevant files/filetypes.
      + If the app has been determined to be react-enabled, the `ATKmap` class then invokes a number of other methods which      leverage the `ATKmap.mapdata` object produced by the directory mapping process. These methods search for specific React and Express "keywords" (e.g. `ReactDOM.render()`, `app.listen()`/`http.listen()`) as well as some standard js keywords (`import`,`export`, `require`, `exports`)
      + These searching methods continue adding properties to the `ATKmap.mapdata` object with metadata on the react app, and, in certain cases, strings of code from within the codebase. __Most notably, the terms__ `class < String > extends { Component } {` *__and/or__* `function <String> (props){ ` will trigger the searching method to flag that file as containing a component at the line at which the searching regEx tests true. A seperate extracting method will then iterate over flagged files and extract those components as strings.
      + Extracted components are then iterated through, and an analysis method is applied to each. This analysis searches for keywords like `state`, `props`, `useEffect`, `useState`, and more, to produce component a dependency map.
      + Mapping, extraction, and analysis conclude by returning the `mapdata` object to the caller of the class. The caller is a worker, which verifies the user's credentials with the service before securely relaying the resultant object to the service's API, adding the analysis to the page.
   - `$ atk reel <adomerAppName : String>` -> Triggers a worker function that makes a request to the service based on user's local auth info, fetches path to app dir (can be modified) and checks to see if the adomerAppName provided is the same as that of any app previously passed to `$ atk hook` by the user executing the command. A different worker will run the `$ atk hook` routines again, and submit a `PUT` request to the service, adding to the code base any changes made since `$ atk hook` was used. *__Ideally, atk reel wil be deprecated and replaced with version-control integration so atk can attach instead to a git repo or cloudstore to eliminate the need to manually reel a codebase__*


### Organization
Trello board:
![Oops!](https://github.com/zrheaume/adomer/blob/master/docs/media/project_board.png "Trello Board")

__Note:__ *atk docs on github are currently not up to date*