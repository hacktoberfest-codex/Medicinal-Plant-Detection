import { useEffect, useState } from 'react';

const Typewriter = ({text, delay}) => {
    const [currText, setCurrText] = useState("");
    const [currIndex, setCurrIndex] = useState(0);
    
    useEffect(()=>{
        if(currIndex < text.length){
            const timeout = setTimeout(()=>{
                setCurrText(prevText => prevText + text[currIndex]);
                setCurrIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currIndex, delay, text]);

    return ( 
        <span>{currText}</span>
     );
}
 
export default Typewriter;