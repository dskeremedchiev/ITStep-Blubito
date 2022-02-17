import React, { useState, useMemo } from "react";

export default function TestUseMemo() { 
    const [count, setCount] = useState(1000);

    function returnValue(inputValue:number) {
        console.log("Execution");
      return inputValue + 10;
    }

    var calculatedValue = useMemo(() => returnValue(10), [10]);
    var calculatedValue = returnValue(10);

    setTimeout(() => {
        setCount(count + 1);
    }, 1000)

  return (
    <div>
      <p>You clicked {count} times</p>

      <b>Random Value: {calculatedValue}</b><br></br><br></br>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}