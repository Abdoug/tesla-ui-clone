import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [
        {
            title: "Model S",
            description: "Order Online for Touchles Delivery",
            backgroundImage: "model-s.jpg",
            leftBtnText: "Custom Order",
            rightBtnText: "Existing invetory",
        },
        {
            title: "Model Y",
            description: "Order Online for Touchles Delivery",
            backgroundImage: "model-y.jpg",
            leftBtnText: "Custom Order",
            rightBtnText: "Existing invetory",
        },
        {
            title: "Model 3",
            description: "Order Online for Touchles Delivery",
            backgroundImage: "model-3.jpg",
            leftBtnText: "Custom Order",
            rightBtnText: "Existing invetory",
        },
        {
            title: "Model X",
            description: "Order Online for Touchles Delivery",
            backgroundImage: "model-x.jpg",
            leftBtnText: "Custom Order",
            rightBtnText: "Existing invetory",
        },
        {
            title: "Lowest Cost Solar Panels in America",
            description: "Money-back guarantee",
            backgroundImage: "solar-panel.jpg",
            leftBtnText: "Order Now",
            rightBtnText: "Learn more",
        },
        {
            title: "Solar for New Roofs",
            description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
            backgroundImage: "solar-roof.jpg",
            leftBtnText: "Order Now",
            rightBtnText: "Learn more",
        },
        {
            title: "Accessories",
            description: "",
            backgroundImage: "accessories.jpg",
            leftBtnText: "Shop now",
        },
    ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {

    }
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer