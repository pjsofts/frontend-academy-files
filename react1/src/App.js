import React from 'react';
import { createRoot } from 'react-dom/client';

const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ]);
};
const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt me'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'Havenese',
        }),
        React.createElement(Pet, {
            name: 'Nemo',
            animal: 'Fish',
            breed: 'Shark',
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cockatiel',
        }),
    ]);
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
