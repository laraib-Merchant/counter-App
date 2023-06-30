import Button from "./Button";
import React, { useContext } from "react";
import { counterContext } from "../Context/CounterHolder";

function Counter() {
    const {count, changeHandler} = useContext(counterContext);
    return (
        <>
            <Button counterValue='-' event={()=> changeHandler(count-1)}/>
            <div className="Counter">{count}</div>
            <Button counterValue='+' event={() => changeHandler(count+1)}/>
        </>
    );
  }
  
  export default Counter;
  