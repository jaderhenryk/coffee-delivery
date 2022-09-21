import { HeaderButton, HeaderContainer } from "./styles";
import appLogo from '../../assets/app-logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  // TODO get quantity from CART
  const cartQuantity = 0;
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={appLogo}/>
        </NavLink>
        <nav>
          <HeaderButton variant="purple">
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