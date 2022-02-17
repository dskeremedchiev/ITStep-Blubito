import React, { useMemo, useState } from 'react';
import { arrayBuffer } from 'stream/consumers';
// 2 -> Слаб (2) 3 -> Среден(3)
const toVocal = (mark: number) => {
    console.log(`function call ${mark}`);
    if (mark === 6) return "Отличен 6";
    if (mark === 5) return "Мн.Добър 5";
    if (mark === 4) return "Добър 4";
    if (mark === 3) return "Среден 3";
    if (mark === 2) return "Слаб 2";
}

export default function Usememoopt() {
    const [mark, setMark] = useState(4);
    const [clicks, setClicks] = useState(0); 
    //let calculated = toVocal(mark);
    let calculated = useMemo(() => toVocal(mark),[mark]);
    return (  
        <div>
            
            {/* <button onClick={() => {(mark>2)?setMark(mark - 1):2}}>-</button> */}
            <button onClick={() => setClicks(clicks - 1)}>-</button>
            {calculated} {clicks}
            {/* <button onClick={() => {(mark<6)?setMark(mark + 1):6}}>+</button> */}
            <button onClick={() => setClicks(clicks + 1)}>+</button>

        </div>
    );
}
