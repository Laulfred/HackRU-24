import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";
import { ListItemButton, ListItemText, Container, Box } from "@mui/material";
import backgroundImage from './markus-spiske-Lq--OvaORRQ-unsplash.jpg';
import logo from './SusFoodsLogo-modifiedd.png';

const Home = ({stores}) => {
    const [search, setSearch] = useState("");
    const [filteredStores, setFilteredStores] = useState(stores);

    const filter = (search) => {
        const filtered = stores.filter((store) => {
            return (
                store.City.toLowerCase().includes(search.toLowerCase()) ||
                store.Zipcode.includes(search)
            );
        });
        setFilteredStores(filtered);
    };
    return (
        <div className="App" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",

        }}>
            <Container maxWidth="sm"
                sx={{
                    height: "100vh",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 10,
                    padding: 6,
                    
                }}
            >
                <img src={logo} alt="SusFoods Logo" style={{ 
                    border: "3px solid #ddd",
                    backgroundColor: "white",
                    height: "125px", 
                    padding: "20px",
                    mt: "150px",
                    marginBottom: "20px",
                }} />
                <Typography variant="h4"
                    sx={{
                        ml: "10px",
                        mr: "10px",
                        fontFamily: "Roboto",
                        fontSize: "1.5rem",
                        fontSmooth: "auto",
                        fontStyle: "italic"

                    }}
                >'Helping you shop for environmentally sustainable foods!'
                </Typography>
                
            <Box className="home-content-background"
                sx={{
                    display: "flex", 
                    flexDirection: "column",
                }}
            >
                <TextField
                    sx={{
                        mt: 3,
                        backgroundColor: "background.paper",
                        border: 2,
                        borderRadius: 2,
                        borderColor: "divider",
                    }}
                    id="outlined-basic"
                    label="Search by town or zip code"
                    variant="outlined"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        filter(e.target.value);
                    }}
                />
                <Box
                    sx={{
                        height: 500,
                        width: 550,
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 2,
                        backgroundColor: "background.paper",
                    }}
                >
                    <FixedSizeList
                        height={500}
                        width={550}
                        itemSize={46}
                        itemCount={filteredStores.length}
                        overscanCount={15}
                    >
                        {({ index }) => {
                            const store = filteredStores[index];
                            // console.log(store)
                            return (
                                <ListItemButton
                                    LinkComponent={Link}
                                    to={`/store/${store.Store}`}
                                    key={store.Store}
                                >
                                    <ListItemText
                                        primary={`Store #${store.Store}`}
                                        secondary={`${store.Address}, ${store.City}, ${store.State} ${store.Zipcode}`}
                                    />
                                </ListItemButton>
                            );
                        }}
                    </FixedSizeList>
                </Box>
            </Box>
            </Container>
        </div>
    );
};

export default Home;
