# adomer Suite
__Zach Rheaume__
_Bootcamp Project 3_

### The concept

The idea from this project came to me after experimenting with the React 16.8 update, and the concept of writing react components, both stateless and stateful, as pure function components instead of class-based ones. Through the use of React hooks ( useState, useEffect, ...), components can be further modularized for re-use. The idea behind adomer is to provide a platform for creating, analyzing, refactoring, and/or sharing 'create-react-app' style applications.

The adomer suite is comprised of three main components:
* adomer online
   - Online application through which users must register with the service.
   Users can then install the adomer-toolkit package via npm and "hook" apps into the service using login credentials.
   An app that is "hooked" into the service will send certain data about the application to the service during the hooking
   process, mostly centered around the app directory structure and react components. Once this process has been completed,
   the user may log on to the service's web application to view individual standalone components, component tree maps, analytics
   and, if time permits implementation, view interactions between REST-api components and their respective api endpoints 
   (for apps created using `atk create`)
-adomer-toolkit
   +npm package which, when installed globally, allows the user to execute `atk` scripts


## adomer online   
## adomer-toolkit


