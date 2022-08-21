import React from "react"
import ReactDom from "react-dom";

import UserCard from "./UserCard";
import Counter from "./Counter";

ReactDom.render(
    <div className="card">
        <h2>Hello, World!</h2>
        <hr/>
        <h3>Class max=1</h3>
        <Counter min={1} max={100}/>
        <div>Text</div>
        <UserCard name="Dmitry" text="Hi there!"/>
        <UserCard/>
        <UserCard/>
    </div>,
    document.querySelector('.app')
)
