import {useEffect, useState} from 'react';


export default function Counters (props){

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter((Math.floor((props.time) - +new Date()))/1000)
    }, [props.time]);

    useEffect(() => {
        if (counter <= 0) return undefined;

        const timer = setTimeout(() => setCounter(prevState => prevState - 1), 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [counter]);


    let out;

    if(counter>0){
        out = `days:
        ${Math.floor(counter / (60 * 60 * 24))}, hours:
        ${Math.floor((counter % (60 * 60 * 24)) / (60 * 60))}, minuts:
        ${Math.floor((counter % (60 * 60)) / (60))}, seconds:
        ${Math.floor((counter % (60)) / 1)}`
    } if (counter===0){
        out = <h5>the event started!</h5>
    }if(counter<0){
        out = <h5>the event is happened!</h5>
    }

return(
    <div>
        {out}
    </div>
);
}