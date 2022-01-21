const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ItemModel = require("./models/item");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/admin"
);

app.post("/insert", async (req, res) => {
    const itemName = req.body.itemName;
    const itemPrice = req.body.itemPrice;
    const calCount = req.body.calCount;
    const itemCategory = req.body.itemCategory
    const item = new ItemModel({itemName: itemName, itemPrice: itemPrice, calCount: calCount, itemCategory: itemCategory});

    try {
        await item.save();
        res.send("Item inserted succesfully!");
    } catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    ItemModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        }

        res.send(results);
    });
});

app.put("/update", async (req, res) => {
    console.log(req)
    const id = req.body.id;
    const itemName = req.body.itemName;
    const calCount = req.body.calCount;
    const itemPrice = req.body.itemPrice;
    const itemCategory = req.body.itemCategory;
    try {
        await ItemModel.findById(id, (err, updateItem) => {
            updateItem.itemName = itemName;
            updateItem.calCount = calCount;
            updateItem.itemPrice = itemPrice;
            updateItem.itemCategory = itemCategory;
            updateItem.save();
            res.send("Item updated succesfully!");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await ItemModel.findByIdAndRemove(id).exec();
    res.send("Item deleted succesfully!");
});

app.listen(3004, () => {
    console.log("server runnig on port 3004");
});
