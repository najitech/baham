import React from 'react'

function ItemStelam(props) {
  return (
    <div className='itemEstelamOp'>
    <div className='titleBoxEstelamOp'><span>در مسیر قنات</span></div>
    <div className='radioBoxItemEstelam'>
      <div>
        <div className='radioItemEstelamOp'>
          <div><span>قرار دارد</span></div>
          <div className='radioBtnEstelamOp'><div></div></div>
        </div>
        <div className='radioItemEstelamOp'>
          <div><span>قرار ندارد</span></div>
          <div className='radioBtnEstelamOpActive'><div></div></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemStelam