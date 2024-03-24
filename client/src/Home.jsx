import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";
import { ListItemButton, ListItemText, Container, Box } from "@mui/material";
import backgroundImage from './markus-spiske-Lq--OvaORRQ-unsplash.jpg';
import logo from './SusFoodsLogo-modifiedd.png';

const Home = () => {
    const [search, setSearch] = useState("");
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
                    transition: "all 0.3s",
                    
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
                        overscanCount={5}
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
