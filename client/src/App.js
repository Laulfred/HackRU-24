import logo from "./logo.svg";
import "./App.css";
import StorePage from "./StorePage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import FoodItem from "./FoodItem";

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

    const [items, setItems] = useState([
        {
            UPC: 1903031544014,
            Description: "brussels sprouts",
            Department: "Produce",
            Price: "$15.97",
            "Store Discount": "",
            "Loyalty Discount": "",
            "Digital Coupon": "$1.15",
        },
        {
            UPC: 7075792421200,
            Description: "sausages",
            Department: "Meat",
            Price: "$5.49",
            "Store Discount": "$3.52",
            "Loyalty Discount": "",
            "Digital Coupon": "",
        },
        {
            UPC: 2864646372952,
            Description: "brazil nuts",
            Department: "Grocery",
            Price: "$13.02",
            "Store Discount": "$4.59",
            "Loyalty Discount": "$2.73",
            "Digital Coupon": "$3.44",
        },
        {
            UPC: 2015108670094,
            Description: "trout",
            Department: "Seafood",
            Price: "$8.66",
            "Store Discount": "$3.62",
            "Loyalty Discount": "",
            "Digital Coupon": "$3.50",
        },
        {
            UPC: 2334608035251,
            Description: "cocoa powder",
            Department: "Grocery",
            Price: "$10.20",
            "Store Discount": "",
            "Loyalty Discount": "$3.55",
            "Digital Coupon": "",
        },
        {
            UPC: 4050112146065,
            Description: "mustard",
            Department: "Grocery",
            Price: "$5.81",
            "Store Discount": "",
            "Loyalty Discount": "",
            "Digital Coupon": "$2.05",
        },
        {
            UPC: 5620805255816,
            Description: "tuna",
            Department: "Grocery",
            Price: "$1.87",
            "Store Discount": "$0.25",
            "Loyalty Discount": "$0.25",
            "Digital Coupon": "$0.25",
        },
        {
            UPC: 2654586974934,
            Description: "sage",
            Department: "Produce",
            Price: "$4.99",
            "Store Discount": "",
            "Loyalty Discount": "$0.75",
            "Digital Coupon": "$0.99",
        },
        {
            UPC: 5983968397508,
            Description: "Worcestershire sauce",
            Department: "Grocery",
            Price: "$9.08",
            "Store Discount": "$1.94",
            "Loyalty Discount": "$2.92",
            "Digital Coupon": "",
        },
        {
            UPC: 7530592120376,
            Description: "dried leeks",
            Department: "Produce",
            Price: "$13.08",
            "Store Discount": "$2.08",
            "Loyalty Discount": "$1.74",
            "Digital Coupon": "$0.96",
        },
    ]);
        

    return (
        <Switch>
            <Route
                path="/store/:id"
                render={(props) => {
                    return (
                        <StorePage
                            store={stores.filter(
                                (store) => store.Store == props.match.params.id
                            )}
                        />
                    );
                }}
            />
            <Route
                path="/item/:id"
                render={(props) => <FoodItem item={items.filter(
                    (item) => item.UPC == props.match.params.id
                )} />}      
                
            />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default App;
