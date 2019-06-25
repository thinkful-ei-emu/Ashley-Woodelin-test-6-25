// make React available
// import React from 'react';
import Card from './card'

import React from 'react';

import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';




describe('<Card />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(<Card  className="Card" />,div);

        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});

