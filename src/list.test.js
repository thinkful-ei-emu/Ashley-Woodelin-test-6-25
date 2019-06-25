// make React available
// import React from 'react';
import List from './list'

import React from 'react';

import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import Card from './card';




describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(<List header="anything" cards="cardOne" />,div);

        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<List />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});

