import logo from "./logo.svg";
import "./App.css";
import StorePage from "./StorePage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [stores, setStores] = useState([
        {
            Store: 185,
            Address: "71 Silver Spear Ave",
            City: "New Brunswick",
            State: "NJ",
            Zipcode: "08901",
            Phone: "368-204-9105",
        },
        {
            Store: 186,
            Address: "43 Dunbar Drive",
            City: "Normandy Beach",
            State: "NJ",
            Zipcode: "08739",
            Phone: "561-206-3394",
        },
        {
            Store: 187,
            Address: "272 South Coffee Dr",
            City: "Closter",
            State: "NJ",
            Zipcode: "07624",
            Phone: "191-102-8429",
        },
        {
            Store: 188,
            Address: "9237 Valley View St",
            City: "Florham Park",
            State: "NJ",
            Zipcode: "07932",
            Phone: "939-501-7716",
        },
        {
            Store: 189,
            Address: "8731 Wagon Ave",
            City: "Medford",
            State: "NJ",
            Zipcode: "08055",
            Phone: "563-326-8776",
        },
        {
            Store: 190,
            Address: "8283 Circus Street",
            City: "Somerdale",
            State: "NJ",
            Zipcode: "08083",
            Phone: "801-100-2632",
        },
    ]);

    return (
        <Switch>
            <Route
                path="/store/:id"
                render={(props) => {
                    
                    return (
                    <StorePage store={stores.filter((store) => store.Store == props.match.params.id)} />
                )}}
            />
            <Route path="/" component={Home} />
        </Switch>
    );
}

export default App;
