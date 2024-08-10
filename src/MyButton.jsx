import { useState } from "react";

export default function MyButton(){
    const currTime = new Date();
    const t = currTime.getTime();
    const result = [{position:'', left: '', top:''},0];
    const initialStyle = {position: 'absolute',
        left: '500px',
        top: '500px'};
    const [style,setStyle]= useState(initialStyle);

    const setCoordinates = (clickTime) => {
        const diff = clickTime-t;
        result[0].position = 'absolute';
        result[0].top = Math.floor(Math.random()*1000)+`px`;
        result[0].left = Math.floor(Math.random()*1000)+`px`;
        result[1] = diff;
        return result;
    }

    const handleClick = () => {
        const clickTime = new Date();
        const newStyle = setCoordinates(clickTime.getTime());
        setStyle(newStyle[0]);
        const test = document.querySelector('#timediff');
        test.innerHTML = newStyle[1]/1000;
        test.style.marginLeft = '1000px';
        // test.style.top = newStyle[0].top + 100;
        // test.style.left = newStyle[0].left;
        // test.style.position = newStyle[0].position;
    }

    return (
        <div>
            <p>{result[0].top}</p>
            <button style={style} onClick={handleClick}>Button</button><h2 id="timediff"></h2>
            </div>
    )
}