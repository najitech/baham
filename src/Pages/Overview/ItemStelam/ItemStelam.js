import React from 'react'
import RadioItemStelam from './RadioItemStelam/RadioItemStelam'

function ItemStelam(props) {
  return (
    <div className='itemEstelamOp'>
    <div className={['titleBoxEstelamOp',props.blue?'blueThemOp':props.red?'redThemOp':''].join(" ")}><span>{props.title}</span></div>
    <div className={['radioBoxItemEstelam',props.blue?'blueThemOp1':props.red?'redThemOp1':'greenThemOp1'].join(" ")}>
      <div>
        {props.children}
      </div>
    </div>
  </div>
  )
}

export default ItemStelam