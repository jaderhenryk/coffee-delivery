import { BenefitsContainer, HomeContainer, InfoCard, InfoIcon, IntroContainer, IntroContent } from "./styles"

import introImg from '../../assets/intro-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <div>

            <section>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
            </section>
            <BenefitsContainer>
              <InfoCard>
                <InfoIcon className="bg-yellow-dark">
                  <ShoppingCart weight="fill"/>
                </InfoIcon>
                <p>Compra simples e segura</p>
              </InfoCard>
              <InfoCard>
                <InfoIcon>
                  <Package weight="fill"/>
                </InfoIcon>
                <p>Embalagem mantém o café intacto</p>
              </InfoCard>
              <InfoCard>
                <InfoIcon className="bg-yellow">
                  <Timer weight="fill"/>
                </InfoIcon>
                <p>Entrega rápida e rastreável</p>
              </InfoCard>
              <InfoCard>
                <InfoIcon className="bg-purple">
                  <Coffee weight="fill"/>
                </InfoIcon>
                <p>O café chega fesquinho até você</p>
              </InfoCard>
            </BenefitsContainer>
          </div>
        </IntroContent>

        <img src={introImg}/>
      </IntroContainer>
    </HomeContainer>
  )
}