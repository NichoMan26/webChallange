import cls from './Photos.module.css'
import { useState } from 'react'
import Cross from '../../../../Common/Cross/Cross'
const Photos = (props) => {

    return (
        <div className={cls.wrapper}>
          <div className={cls.header}>
            <Cross setPhotosActive={props.setPhotosActive}/>
          </div>
          <h1 className={cls.dev}>In developing...</h1>
        </div>
    )
      
}
export default Photos