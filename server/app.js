const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/api/products", (req, res) => {
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
