import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";
import { ListItemButton, ListItemText, Container, Box } from "@mui/material";

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
        <div className="App">
            <Container maxWidth="sm">
                <Typography variant="h2"
                
                >SusFoods</Typography>
                <Typography variant="h4">
                    Helping you shop for environmentally sustainable foods
                </Typography>

                <TextField
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
                        height: 400,
                        width: 500,
                        border: 1,
                        borderColor: "divider",
                        borderRadius: 1,
                    }}
                >
                    <FixedSizeList
                        height={400}
                        width={500}
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
            </Container>
        </div>
    );
};

export default Home;
