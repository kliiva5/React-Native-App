# React-Native-App

A small todo app with react-native.

## Used guide

[A simple map app with react native](https://www.youtube.com/watch?v=6ZnfsJ6mM5c)

**NB!** The topic of the app was changed to add additional content.

## Review of the guide

The guide was fairly informative - it covered most of the react native world for newcomers (people who hadn't used react-native previously).
Since this was an old tutorial (made in 2017) then there were some minor changes in terms of the creation of the project such as:
* Project initialization
```
create-react-native-app APP NAME <-- Old version
react-native init APP NAME <-- New version
```
During the setup of the project there was also a need to clear the cache of the previously saved state in gradle (dependency confilcts which
prevented the project from building).

This guide also provided a lot of motivation in order to get back into React based development (the owner of this repository wasn't a big fan of React until
now, because of previous encounters)

## Additional content (which was added to the app)
* In addition to deleting and retrieving all todos for the user, the app also now allows the user to create new todos in a seperate form
* The form, which is used to provide functionality to add new todos, is only shown when the user wants to create a new todo (clicks the 'Create a new todo' button.

## Used technologies
* [React-Native](https://facebook.github.io/react-native/) (v 0.59.2)
* [React-Native-Cli](https://facebook.github.io/react-native/docs/getting-started) (v 2.0.1)
* [Node Package Manager - NPM](https://www.npmjs.com/) (v 6.4.1)
* [Firebase Realtime Database](https://firebase.google.com/)

**NOTE** NO additional packages were installed with npm during the completion of this assignment, since there was no need.
