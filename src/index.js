import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Application extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
};


ReactDOM.render(<Application />, document.querySelector('#root'));
