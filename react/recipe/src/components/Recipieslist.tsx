import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { recepes } from './recepes';

const spaced = {
  margin: "10px",
}
const hide = {
  maxHeight: "0px",
  transition: "500ms ease-out",
}
const show = {
  maxHeight: "300px",
  transition: "500ms ease-in",
}
export default function Recipieslist() {
  const [selected, setSelected] = useState(-1);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <>
      <h1>Recipies List</h1>
      <br />
      <div className="container">
        {recepes.map((element, index) =>
          <>
            <div key={index} style={spaced} className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to={index.toString()} className="btn btn-light btn-lg px-6 gap-3" >{element.name}</Link>&nbsp;
              <button type="button" className="btn btn-light mt-0 btn-lg px-4"
                onClick={() => { setSelected((selected !== index) ? index : -1) }}
              >{(selected !== index) ? "Show" : "Hide"}</button>
            </div>
            <div className='overflow-hidden' style={(selected === index) ? show : hide}>{element.description}</div>
          </>
        )
        }
      </div>
    </>);
}
