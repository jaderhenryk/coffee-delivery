import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 10rem;
`
export const IntroContainer = styled.section`
  width: 100%;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  section h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    line-height: 3.5rem;
    color: ${props => props.theme['base-title']};
  }

  section h3 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 400;
  }
`
export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4rem;
`

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`
export const InfoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.theme['base-text']};
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
`