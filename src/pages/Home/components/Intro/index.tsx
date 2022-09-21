import { IntroContainer, IntroContent, IntroContentInner, IntroIcon, IntroIconContainer } from "./styles"

import introImg from '../../../../assets/intro-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useTheme } from "styled-components"

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
          </section>
          <IntroContentInner>
            <IntroIconContainer>
              <IntroIcon iconBg={theme['yellow-dark']}>
                <ShoppingCart weight="fill" />
              </IntroIcon>
              <p>Compra simples e segura</p>
            </IntroIconContainer>
            <IntroIconContainer>
              <IntroIcon iconBg={theme['base-text']}>
                <Package weight="fill" />
              </IntroIcon>
              <p>Embalagem mantém o café intacto</p>
            </IntroIconContainer>
            <IntroIconContainer>
              <IntroIcon iconBg={theme['yellow']}>
                <Timer weight="fill" />
              </IntroIcon>
              <p>Entrega rápida e rastreável</p>
            </IntroIconContainer>
            <IntroIconContainer>
              <IntroIcon iconBg={theme['purple']}>
                <Coffee weight="fill" />
              </IntroIcon>
              <p>O café chega fresquinho até você</p>
            </IntroIconContainer>
          </IntroContentInner>
        </div>
        <img src={introImg}/>
      </IntroContent>
    </IntroContainer>
  )
}