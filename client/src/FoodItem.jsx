import { Container } from "@mui/material";
import { useState, useEffect} from "react";
import axios from "axios";

const FoodItem = ({id}) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    console.log(id)
    useEffect(() => {
        axios
            .get(`/api/products/${id}`)
            .then((response) => {
                setItem(response.data);
                setLoading(false);
            });
    }, [id]);

    if(loading) {
        return <Container>Loading...</Container>
    }

    
    return (
        <Container> 
            <h1>{item.isSustainable.foodItem.Description}</h1>
            <p>{item.isSustainable.message}</p>
        </Container>
    )
}

export default FoodItem;