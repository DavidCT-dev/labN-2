import React from 'react'
//import ''

const ItemKeyComponent = (props) => {
  console.log(props)
    return (
    <div className={props.state ? "disablediv" : ""}
        onClick={()=>{props.handlerClick(props.key)}}
    >
      {props.myKey}
    </div>
  )
}
export default ItemKeyComponent