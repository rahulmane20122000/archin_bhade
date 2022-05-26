import React from 'react'

const Btn = () => {
    var cnt=0;
  return (
    <div>
       <div className='top'>
           <h1>count {cnt}</h1>
       </div>
        {cnt++}
        <button>Button{cnt}</button>
    </div>
  )
}

export default Btn;