import { HeaderButton, HeaderContainer } from "./styles";
import appLogo from '../../assets/app-logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  const cartQuantity = 0;
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={appLogo}/>
      </NavLink>
      <nav>
        <HeaderButton className="btn-purple">
          <MapPin size={20} weight="fill"/>
          Denver, CO
        </HeaderButton>
        <NavLink to="/order">
          <HeaderButton className="btn-yellow">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill"/>
          </HeaderButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}