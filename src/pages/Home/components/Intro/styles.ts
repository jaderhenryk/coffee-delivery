import styled from "styled-components";

import bannerBackground from '../../../../assets/banner-background.png'

export const IntroContainer = styled.section`
  width: 100%;
  height: 36rem;
  background: ${() => `url(${bannerBackground}) no-repeat center`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  section > h1 {
    font-size: 3rem;
    font-family: ${props => props.theme['font-title']};
    font-weight: bold;
    line-height: 3.5rem;
    color: ${props => props.theme['base-title']};
  }

  section > h3 {
    color: ${props => props.theme['font-regular']};
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 400;
  }
`;

export const IntroContentInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const IntroIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`;

interface IntroIconProps {
  iconBg: string
}

export const IntroIcon = styled.div<IntroIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({iconBg}) => iconBg};
  color: ${(props => props.theme['white'])};
  display: flex;
  align-items: center;
  justify-content: center;
`;