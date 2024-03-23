import { Container } from "@mui/material";

const FoodItem = ({id}) => {

    
    return (
        <Container> 
            <h1>Food Item</h1>
            <p>{id}</p>
        </Container>
    )
}

export default FoodItem;