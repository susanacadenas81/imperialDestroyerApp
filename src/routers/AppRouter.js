import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ErrorScreen } from "../components/error/ErrorScreen";
import { PeopleScreen } from "../components/people/PeopleScreen";
import { PlanetsScreen } from "../components/planets/PlanetsScreen";
import { StarShipsScreen } from "../components/starships/StarShipsScreen";
import { Navbar } from "../components/ui/Navbar";
import { VehiclesScreen } from "../components/vehicles/VehiclesScreen";


export const AppRouter = () => {
    return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<PlanetsScreen />} />
            <Route path="/starships" element={<StarShipsScreen />} />
            <Route path="/people" element={<PeopleScreen />} />
            <Route path="/vehicles" element={<VehiclesScreen />} />
            <Route path="/errorPage" element={<ErrorScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
