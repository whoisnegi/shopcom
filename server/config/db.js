import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("DB CONNECTED".cyan.underline);
    })
    .catch(error => {
        console.log(`Error connecting to database: ${error.message}`.red.underline.bold);
        process.exit(1);
    });
