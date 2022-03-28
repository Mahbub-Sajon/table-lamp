import React from 'react';

const Answer = () => {
    return (
        <div>
            <h3>Question: How React Works?</h3>
            <p>Answer: As we all know react is a javascript library that is used for building the ui. React works with the components. Basically we divide the ui into small parts which is components which is actually the piece of ui. Basically App.js is the root component where every single components are connected. Single components can also have a child component. We can send data to the components through props. In the components we can have states which can be changed while user interacting with something and there is another thing called rendering. Rendering is how the ui should look like. React creates a virtual dom every time and when something is changed then it compares with the previous states and update that single thing to the real dom. That's why it works fast.</p>
            <h3>Question: Differences between props and state.</h3>
            <p>Answer: props -- props is the short form of properties which is basically used for sending data from one component to another component. We can not modify or change the props after getting from a component. We can send any types of data available in javascript through props.
                State -- The main objective of state is to determine the changes occur while user is doing something. State is changeable. As the data is passed within the component only so we can modify state. Data can be read and also be write in states.  
            </p>
        </div>
    );
};

export default Answer;