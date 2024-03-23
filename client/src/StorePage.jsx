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

const StorePage = ({ store }) => {
    const storeData = store[0];

    const items = [
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
    ];
    return (
        <Container>
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
    );
};

export default StorePage;
