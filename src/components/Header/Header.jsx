import React, { useState } from 'react';
import classes from './Header.module.css'
import Modal from '../../UI/Modal/Modal';
import Recipe from '../Recipe/Recipe';

const Header = ({recipe, filterRecipe}) => {
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setModalVisible(true)
  }

  (modalVisible) 
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'auto'

  return (
    <div className={classes.headerContainer}>
        <button onClick={openModal} className={classes.headerBtn}>Recipe</button>
        <Modal 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible}
        >
          <Recipe recipe={recipe} setModalVisible={setModalVisible} filterRecipe={filterRecipe}/>
        </Modal>
    </div>
  )
}

export default Header;