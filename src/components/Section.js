import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ backgroundImage, title, description, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonsGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {
              rightBtnText && 
                <RightButton>
                  {rightBtnText}
                </RightButton>
            }
          </ButtonsGroup>
          <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Fade>
      </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonsGroup = styled.div`
  display: flex;
  margin-bottom: 3px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animationDown infinite 1.5s;
`

const Buttons = styled.div``


export default Section