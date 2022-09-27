import { NavLink } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import appLogo from '../../assets/app-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderButton, HeaderContainer } from "./styles";
import { useEffect, useState } from "react";

export function Header() {
  const { cartQuantity } = useCart();
  const [ headerBackground, setHeaderBackground ] = useState('')
  const listenScrollEvent = () => {
    return window.scrollY < 70 ? setHeaderBackground('') : setHeaderBackground('base-background')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])
  return (
    <HeaderContainer className={headerBackground}>
      <div className="container">
        <NavLink to="/">
          <img src={appLogo}/>
        </NavLink>
        <nav>
          <HeaderButton variant="purple" disabled>
            <MapPin size={20} weight="fill"/>
            Denver, CO
          </HeaderButton>
          <NavLink to="/order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}