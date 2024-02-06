const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://yasirujayasinghe129:PMnDsuD3qvJplzsA@cluster0.pehcar7.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // database create
    const database = client.db("itemsDB");
    const itemsCollection = database.collection("items");

    // method for sending and receiving data
    app.post("/items", async (req, res) => {
      const item = req.body;
      const result = await itemsCollection.insertOne(item);
      res.send(result);
    });

    app.get("/items", async (req, res) => {
      const cursor = itemsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.delete("/items/:id", async (req, res) => {
      const itemId = req.params.id;
      try {
        const result = await itemsCollection.deleteOne({ _id: new ObjectId(itemId) });
        if (result.deletedCount > 0) {
          res.send({ acknowledged: 1, message: "Item deleted successfully" });
        } else {
          res.status(404).send({ acknowledged: 0, message: "Item not found" });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send({ acknowledged: 0, message: "Internal server error" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Run the MongoDB connection function
run().catch(console.dir);

// Your other routes and middleware
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
