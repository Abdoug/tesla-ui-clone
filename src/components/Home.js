import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux"

function Home() {
    const cars = useSelector(selectCars);

    return (
        <Container>
            {cars && cars.map((car, index) => (
                <Section
                    key={index}
                    title={car.title}
                    description={car.description}
                    backgroundImage={car.backgroundImage}
                    leftBtnText={car.leftBtnText}
                    rightBtnText={car.rightBtnText}
                />
            ))}
        </Container>
    )
}
 
const Container = styled.div`
    height: 100vh;
`

export default Home