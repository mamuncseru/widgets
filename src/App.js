import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
// import Accordion from './components/Accordion';
// import Search from './components/Search';


// const items = [
//     {
//         title: 'what is React?',
//         content: 'React is a front end javascript framework'
//     },
//     {
//         title: 'why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setshowDropdown] = useState(true);
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <button onClick={() => setshowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}    
            
                /> : null
            }
        </div>
    )
};