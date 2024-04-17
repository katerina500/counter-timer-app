import React, {useState, useEffect, useRef} from 'react';

const MyComponents = (props) => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState('');
    const [message, setMessage] = useState('');

    const plusCounter = () => {
      setCounter(counter + 1);
    }
    const minusCounter = () => {
      setCounter(counter - 1);
    }
    
    useEffect(() => {
      const timer = setInterval(() => {
        setTimer(new Date().toLocaleTimeString())
      }, 1000);

      return () => {
        clearInterval(timer);
      }
    })

    useEffect (() => {
      const timeoutId = setTimeout(() => {
        setMessage("Время истекло!");
      }, 5000);

      return() => clearTimeout(timeoutId);
    }, [] );

    const handleKeyDown = event => {
      console.log('User pressed: ', event.key);
    };

    const ref = useRef(null);

    useEffect(() => {
    ref.current.focus();
    }, []);

    

  

    return (
        <div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            padding: "30px"
          }}>
            <p ref={ref} tabIndex={-1} 
            onKeyDown={handleKeyDown} 
            style={{
                textAlign: "center"
            }}>
                Counter : {counter}
            </p>
            <button onClick={() => minusCounter()}
            style={{
            borderRadius: "10px",
            margin: "10px",
            backgroundColor: "red",
            color: "white"
            }}
            className='btn1'>
            Уменьшить
            </button>
            <button onClick={() => plusCounter()}
            style={{
            borderRadius: "10px",
            margin: "10px",
            backgroundColor: "blue",
            color: "white"
            }}
            className='btn2'>
            Увеличить
            </button>
          </div>
          <div>
            <p ref={ref} tabIndex={-1} 
            onKeyDown={handleKeyDown}
            style={{
              paddingLeft: "35px"
            }}>
              Timer - {timer}
            </p>
           <p style={{
            paddingLeft:"35px",
            color: "red"
           }}>
           {message}
           </p>
          </div>
        </div>
    )


}

export default MyComponents;