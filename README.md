# Simple ToDoList Application

This is a simple todolist system implemented with local json-server and React's frontend.

Learning Materials:

[React Todo List App Tutorial - React JS Project Tutorial for Beginners](https://www.youtube.com/watch?v=LoYbN6qoQHA)

[Set Up Fontawesome with React](https://fontawesome.com/docs/web/use-with/react/)

[Npm uuid Docs](https://www.npmjs.com/package/uuid)

## Set Up

### install uuid

`npm i uuid`

### install fontawesome

1. Add SVG

   `npm i --save @fortawesome/fontawesome-svg-core`
2. Add Icon Packages

   ```
   npm i --save @fortawesome/free-solid-svg-icons
   npm i --save @fortawesome/free-regular-svg-icons
   npm i --save @fortawesome/free-brands-svg-icons
   ```
3. Add the React Component

   `npm i --save @fortawesome/react-fontawesome@latest`

### install json-server

`npm install -g json-server`

### Create JSON File

 For example:  db.json

```
[
  {
    "id": "25764d33-5f68-4c0f-998c-61345531282b",
    "task": "simple task1",
    "completed": false,
    "isEditing": false
  },
  {
    "id": "cf452be3-cafe-4dfe-8a0b-88179c9ba51a",
    "task": "simple task2",
    "completed": false,
    "isEditing": false
  }
]
```


## Run

### npm start

### Run JSON-Server

`json-server --watch db.json --port 8000`
