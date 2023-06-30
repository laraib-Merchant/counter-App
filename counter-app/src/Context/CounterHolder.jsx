import React, {useState} from "react";
import { createContext } from "react";
const counterContext = createContext();

export default function CounterHolder(props) {
    const [count, setCount] = useState(0);

    const changeHandler = (newCount) => {
        setCount(newCount);
    }
    return (
      <counterContext.Provider value={{count, changeHandler}}>
          {props.children}
      </counterContext.Provider>
    );
}

export {counterContext};
