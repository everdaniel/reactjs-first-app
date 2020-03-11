import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// R1
// const title = React.createElement('h1', null, 'Welcome to React')
// ReactDOM.render(title, document.getElementById('root'));

// const JSXTitle = (
//   <div>
//     <h1>Welcome to React!</h1>
//   </div>
//   );
// ReactDOM.render(JSXTitle, document.getElementById('root'));


/**
 R2
 **/

// R2-1
// const Button = (props) => {
//   return <button>This is a button</button>;
// }

// const App = (
//   <div>
//     <Button />
//     <Button />
//     <Button />
//   </div>
//   );
// ReactDOM.render(App, document.getElementById('root'));

// R2-2
// const CustomParagraph = (props) => {
//   const { color, text } = props
//   const style = {
//     color
//   }
//   return <p style={style}>{text}</p>;
// }

// const App = (
//   <div>
//     <CustomParagraph color="red" text="Hello World" />
//     <CustomParagraph color="#5c6ac4" text="My custom colored paragraph" />
//   </div>
//   );
// ReactDOM.render(App, document.getElementById('root'));

// R2-3
// const Profile = ({firstName, lastName, age, profession}) => <p>{firstName} {lastName}, {age}, {profession}</p>;

// const App = (
//   <div>
//     <Profile firstName="Jorge" lastName="Gonzales" age="18" profession="Programmer" />
//     <Profile firstName="Penelope" lastName="Cruz" age="22" profession="Actor" />
//     <Profile firstName="Elton" lastName="John" age="68" profession="Singer" />
//   </div>
//   );
// ReactDOM.render(App, document.getElementById('root'));


/**
 R3
 **/

// R3-1
const Button = ({onCustomEvent, text}) => {
  console.log(onCustomEvent, text)
  return <button onClick={onCustomEvent}>{text}</button>
};

const App = props => {
  const handleFirstButton = () => console.log('handling First Button event')
  const handleSecondButton = () => console.log('handling Second Button event')
  return (
      <div>
          <Button onCustomEvent={handleFirstButton} text="First Button" />
          <Button onCustomEvent={handleSecondButton} text="Second Button" />
      </div>
  );
}
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
