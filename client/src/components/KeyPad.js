import React, { useEffect, useState } from 'react'

export default function KeyPad({ text, setText }) {
  const [input, setInput] = useState('')
  const [clicks, setClicks] = useState(0)
  const [button, setButton] = useState('')

  let timer
  useEffect(() => {
    clearTimeout(timer)

    if (clicks > 0) {
      timer = setTimeout(() => {
        addCharacter()
      }, 700)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [clicks])

  const buttons = {
    b1: {
      single: '1',
    },
    b2: {
      single: '2',
      double: 'a',
      triple: 'b',
      quadruple: 'c',
    },
    b3: {
      single: '3',
      double: 'd',
      triple: 'e',
      quadruple: 'f',
    },
    b4: {
      single: '4',
      double: 'g',
      triple: 'h',
      quadruple: 'i',
    },
    b5: {
      single: '5',
      double: 'j',
      triple: 'j',
      quadruple: 'l',
    },
    b6: {
      single: '6',
      double: 'm',
      triple: 'n',
      quadruple: 'o',
    },
    b7: {
      single: '7',
      double: 'p',
      triple: 'q',
      quadruple: 'r',
      quintuple: 's',
    },
    b8: {
      single: '8',
      double: 't',
      triple: 'u',
      quadruple: 'v',
    },
    b9: {
      single: '9',
      double: 'w',
      triple: 'x',
      quadruple: 'y',
      quintuple: 'z',
    },
    b0: {
      single: '0',
      double: ' ',
    },
    ba: {
      single: '*',
      double: '+',
    },
    bb: {
      single: '#',
    },
  }

  function handleClick(e, button) {
    const num = e.detail
    if (num > clicks) {
      setClicks(num)
      setButton(button)
    }
  }

  function addCharacter() {
    if (clicks === 1) {
      setText(text + buttons[button].single)
    } else if (clicks === 2) {
      if (buttons[button].double) setText(text + buttons[button].double)
    } else if (clicks === 3) {
      if (buttons[button].triple) setText(text + buttons[button].triple)
    } else if (clicks === 4) {
      if (buttons[button].quadruple) setText(text + buttons[button].quadruple)
    } else if (clicks === 5) {
      if (buttons[button].quintuple) setText(text + buttons[button].quintuple)
    }
    setClicks(0)
  }

  return (
    <div className="">
      {/* <p>{input}</p>{' '} */}
      {/*  here's where your text message gets displayed for now */}
      <div className="">
        <div className="">
          <button onClick={(e) => handleClick(e, 'b1')}>1</button>
          <button onClick={(e) => handleClick(e, 'b2')}>
            <span>2</span> a b c
          </button>
          <button onClick={(e) => handleClick(e, 'b3')}>
            <span>3</span> d e f
          </button>
        </div>
        <div className="">
          <button onClick={(e) => handleClick(e, 'b4')}>
            <span>4</span> g h i
          </button>
          <button onClick={(e) => handleClick(e, 'b5')}>
            <span>5</span> j k l
          </button>
          <button onClick={(e) => handleClick(e, 'b6')}>
            <span>6</span> m n o
          </button>
        </div>
        <div className="">
          <button onClick={(e) => handleClick(e, 'b7')}>
            <span>7</span> p q r s
          </button>
          <button onClick={(e) => handleClick(e, 'b8')}>
            <span>8</span> t u v
          </button>
          <button onClick={(e) => handleClick(e, 'b9')}>
            <span>9</span> w x y z
          </button>
        </div>
        <div className="">
          <button onClick={(e) => handleClick(e, 'ba')}>*</button>
          <button onClick={(e) => handleClick(e, 'b0')}>0 _</button>
          <button onClick={(e) => handleClick(e, 'bb')}>#</button>
        </div>
      </div>
    </div>
  )
}
