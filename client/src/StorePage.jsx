import {
    Grid,
    Typography,
    Container,
    Card,
    CardContent,
    Divider,
    ListItemIcon,
    CardActions,
    Button,
} from "@mui/material/";
import { Link } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import backgroundImage from './markus-spiske-Lq--OvaORRQ-unsplash.jpg';
import logo from './SusFoodsLogo-modifiedd.png';

const StorePage = ({ store }) => {
    const storeData = store[0];
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/store/${storeData.Store}/products`)
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            });
    }, []);

    if(loading) {
        return <Container>Loading...</Container>
    }
    return (
        <div className="StorePage" style ={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
        }}>
            <Container
                sx={{
                    height: "100vh",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 10,
                    padding: 1,
                }}
            >
                <div>
                    <h1>Store #{storeData.Store}</h1>
                    <p>
                        Address: {storeData.Address}, {storeData.City},{" "}
                        {storeData.State} {storeData.Zipcode}
                    </p>
                </div>
                <Divider sx={{ my: "15px" }} />
                <Typography variant="h4">Store Inventory</Typography>
                <Divider sx={{ my: "15px" }} />
                <Grid container spacing={2}>
                    {items.map((item) => {
                        const sustainable = Math.random() < 0.5;
                        return (
                            <Grid item xs={12} sm={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5">
                                            {item.Description[0].toUpperCase() +
                                                item.Description.substring(1)}
                                        </Typography>
                                        <Typography variant="body1">
                                            Price: {item.Price}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            fontWeight="bold"
                                            sx={{
                                                color: sustainable
                                                    ? "green"
                                                    : "red",
                                            }}
                                        >
                                            {sustainable
                                                ? "Sustainable"
                                                : "Not Sustainable"}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ListItemIcon>
                                            <Button
                                                color="primary"
                                                LinkComponent={Link}
                                                to={`/item/${item.UPC}`}
                                            >
                                                Learn More
                                            </Button>
                                        </ListItemIcon>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default StorePage;
