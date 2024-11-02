import Layout from "../Layout/Layout";
import HomeScreen from "../screen/HomeScreen"
import EconomicScreen from "../screen/EconomicScreen"
import PopulationScreen from "../screen/PopulationScreen"
export const mainRouter = createBrowerRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                index: true,
                path: "economic",
                element: <EconomicScreen/>
            },
            {
                index: true,
                path: "population",
                element: <HomeScreen/>
            },
            {
                index: true,
                path: "population"
                element: <PopulationScreen/>
            },
           
        ]
    }
])