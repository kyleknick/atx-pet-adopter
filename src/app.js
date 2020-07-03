import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Boba" animal="Dog" breed="Labador Retriver" />
        <Pet name="Cisco" animal="Hamster" breed="Russian" />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
