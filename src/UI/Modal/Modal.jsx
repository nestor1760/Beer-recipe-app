import React from 'react'
import style from './Modal.module.css'


const Modal = ({modalVisible, setModalVisible, children}) => {

  const styleModal = [style.modal]

  if(modalVisible) {
    styleModal.push(style.active)
  }

  return (
    <div className={styleModal.join(' ')} onClick={() => setModalVisible(false)}>
        <div className={style.modalContent} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}

export default Modal