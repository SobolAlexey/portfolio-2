import React from 'react'
import './popup.scss'

const Popup = ({active, setActive, children}) => {
    return(
        <div className='popup' onClick={() => setActive(false)}>
            <div className='popup__inner' onClick={e => e.stopPropagation()}>
                <button className='btn-close' onClick={() => setActive(false)}>
                    x
                    </button>
                {children}
            </div>
        </div>
    )
}
export default Popup