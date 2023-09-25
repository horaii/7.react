import React from 'react'

function header() {
    const  handler = (text) =>{
        console.log(text)
    }
    
  return (
    // 한줄주석
    <header>
    
        {/* 안쪽주석 */}
        <h1 className='title'>
            logo
        </h1>
        <p onClick={() => handler('hello')}>링크</p>
    </header>
  )
}

export default header