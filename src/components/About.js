import React from 'react';
import Fig from './Figures';
function About() {
    return (
        <div className="fig-container">
            <Fig
                width={300}
                height={300}
                image={"todo.jpg"}
                caption={"Todo List"}
            />
            <Fig
                width={300}
                height={300}
                image={"yoga.jpg"}
                caption={"Habit"}
            />
            <Fig
                width={300}
                height={300}
                image={"happy.jpg"}
                caption={"Habit"}
            />
        </div>
    );
}






export default About;
