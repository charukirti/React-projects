import { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import "./App.css";

/* ###### L A T E R ##### */

// const initialState = {
//   length : 0,
//   numberAllowed: false,
//   charAllowed: false,
//   password: '',
// }

/* function reducer(state, action) {
  switch(action.type) {
    case 'SET_LENGTH': 
      return 
    case 'SET_NUMBER_ALLOWED: 
      return 
    case 'SET_CHAR_ALLOWED:
      return
    Default :
      return state
  }
} */

export default function App() {
  //states
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  const passwordRef = useRef(null);

  // Logic part

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  // To run genrator function multiple times

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  // To copy generated string and display a message as password gets copied

  function copyPassword() {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setIsPasswordCopied((prev) => !prev);

    setTimeout(() => {
      setIsPasswordCopied(false);
    }, 1000);
  }

  return (
    <div className="bg-green-300 w-96 p-2 rounded-md flex flex-col">
      <div className="flex justify-between p-3 border-2 border-transparent  bg-gray-300 rounded-sm mb-4">
        <input
          className="text-xl tracking-widest  outline-none bg-transparent"
          ref={passwordRef}
          value={password}
          readOnly
        />
        <button onClick={copyPassword}>
          <FontAwesomeIcon icon={faCopy} className="text-xl" />
        </button>
      </div>

      {isPasswordCopied && (
        <p className="text-center mb-4 transition-all">
          Password got copied :){" "}
        </p>
      )}

      <div className="strength_bars flex justify-around mb-4">
        <div
          className={`strength_bar border-2 border-black w-24 h-3 rounded-xl 
            ${length < 7 ? "low" : ""} 
            ${length >= 7 ? "medium" : ""} 
          ${length >= 17 ? "good" : ""}`}
        ></div>
        <div
          className={`strength_bar border-2 border-black w-24 h-3 rounded-xl ${
            length < 7 ? "low" : ""
          } 
          ${length >= 7 || length <= 16 ? "medium" : ""}
        ${length >= 17 ? "good" : ""}`}
        ></div>
        <div
          className={`strength_bar border-2 border-black w-24 h-3 rounded-xl ${
            length < 7 ? "low" : ""
          } 
          ${length >= 7 || length <= 16 ? "medium" : ""} 
        ${length >= 17 ? "good" : ""}`}
        ></div>
      </div>

      <div className=" mb-4">
        <div className=" flex justify-between mb-1">
          <label htmlFor="length">Length ({length})</label>
          <input
            type="range"
            id="length"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className=" flex justify-between mb-1">
          <label htmlFor="numbers">Add Numbers</label>
          <input
            type="checkbox"
            id="numbers"
            className="cursor-pointer"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div className=" flex justify-between mb-1">
          <label htmlFor="characters">Add characters</label>
          <input
            type="checkbox"
            id="characters"
            className="cursor-pointer"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>

      {/* <button className="text-center bg-violet-500 p-2 rounded-md">
        Generate
      </button> */}
    </div>
  );
}
