import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import s from './header.module.scss'
import ItemBlock from '../../blocks/itemBlock/ItemBlock';
import { HOME_ROUTE, GALLERY_ROUTE, ABOUT_ROUTE, CATALOG_ROUTE } from '../../../consts/consts';

const Header = () => {

  return (

    <header>
      <div className={s.hedWrap}>
      <NavLink className={s.logo} to={HOME_ROUTE}>Закажи Мебель</NavLink>
      
        <nav className={s.navigation}>
          <ul>
            <NavLink className={s.link} to={HOME_ROUTE}>Главная</NavLink>
            <NavLink className={s.link} to={CATALOG_ROUTE}>Каталог</NavLink>
            <NavLink className={s.link} to={ABOUT_ROUTE}>О нас</NavLink>
            <NavLink className={s.link} to={GALLERY_ROUTE}>Наши работы</NavLink>
            <NavLink className={s.link} to={ABOUT_ROUTE}>Контакты</NavLink>
            {/* <NavLink className={s.link} to={ADMIN_ROUTE}>Админка</NavLink> */}
          </ul>
        </nav>
        <a className={s.phone} href="tel:+79822239061">+7 (982) 223 90 61</a>
      </div>

    </header>
  )
}

export default Header