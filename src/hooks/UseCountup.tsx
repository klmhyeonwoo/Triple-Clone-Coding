import { spawn } from 'child_process';
import {useState, useEffect } from 'react';

interface Item {
    start :number;
    end :number;
    duration : number;
}

const UseCountup = ({start, end, duration} :Item) => {
    const [num, Setnum] = useState(0);

    useEffect(()=> {
        const time = Math.abs(Math.floor(duration / (end - start)));
            let now = end;
            let currentNumber = start;
            const counter = setInterval(() => {
                    if (end >= 300) {
                        let step = Math.ceil(now / 100);
                        now -= step;
                    }
                    else {
                        let step = Math.ceil(now / 10);
                        now -= step;
                    }

                    currentNumber = end - now ;
                    Setnum(currentNumber);
                                
                if (currentNumber == (end - 4)) {
                    Setnum(currentNumber);
                    clearInterval(counter)
                    const semi_counter = setInterval(()=> {
                        currentNumber += 1;
                        Setnum(currentNumber);
                        if (currentNumber === end) {
                            Setnum(end)
                            clearInterval(semi_counter)
                        }
                    }, 70);
                }

            }, time);
    }, [])

    return (
        <span> {num} </span>
    )
        
}

export default UseCountup;