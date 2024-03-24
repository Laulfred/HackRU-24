const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;
const { getSustainability, items } = require("./itemsHardCode");

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/api/stores", (req, res) => {
    axios
        .get("https://apimdev.wakefern.com/mockexample/V1/getStoreDetails", {
            headers: {
                "Content-Type": "application/json",
                "ocp-apim-subscription-key": "4ae9400a1eda4f14b3e7227f24b74b44",
            },
        })
        .then((response) => {
            res.send(response.data);
        });
});

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const isSustainable = getSustainability(parseInt(id));
    // console.log(isSustainable)

    res.json({ isSustainable});

});

app.get("/api/store/:id/products", (req, res) => {
    const id = req.params.id;
    //choose 10 random items to return
    const randomItems = items.sort(() => Math.random() - Math.random()).slice(0, 10);
    res.json(randomItems);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
