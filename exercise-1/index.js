import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <div className="listItem">
            <img src="img/pikachu-2.svg" alt="Pikachu" title="Pikachu"/>
            <h3 className="listItem__name">Pikachu</h3>
            <div className="listItem__price">
              <div className="listItem__priceTxt">
                $40
              </div>
            </div>
            <div className="listItem__addButton">Add to Cart</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);