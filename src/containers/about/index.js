import React from 'react';

export default = () => (
  <div>
    <h1>About us</h1>
    <p>Hello Medium!</p>
  </div>
)

/* 
4. Rendering our app 
The time has come to mount our application 

We need to tell react-dom to render our application with the correcct store and browser history data. We do this by using the ConnectedRouter export given to us by React Router v4. ConnectedRouter has access to the store given to Provider so you don't need to worry about passing data through any additional props.

React Router magic !

*/