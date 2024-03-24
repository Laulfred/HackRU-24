import logo from "./logo.svg";
import "./App.css";
import StorePage from "./StorePage";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import axios from "axios"
import { Typography, Container } from "@mui/material";

function App() {


    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);
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
     
    useEffect(() => {
        axios.get("/api/stores", {
        }).then((res) => {
            setStores(res.data)
            setLoading(false)
        }
        )
    }, [])
    
    if(loading) {
        return (
            <Container>
                <Typography variant="h3">Loading...</Typography>``
            </Container>
        )
    }

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
                render={(props) => <FoodItem id={props.match.params.id} />}      
                
            />
            <Route path="/" exact render={() => <Home stores={stores} />} />
        </Switch>
    );
}

export default App;
