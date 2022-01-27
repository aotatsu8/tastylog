const PORT = process.env.PORT;
const path = require("path");
const logger = require("./lib/log/logger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// Express settings
app.set("view engine", "ejs");
app.disable("x-powered-by");

//Expose global method to view engine.
app.use((req, res, next) => {
    res.locals.moment = require("moment");
    res.locals.padding = require("./lib/math/math.js").padding;
    next();
});

// Static resource rooting
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Set Access log
app.use(accesslogger());

// Dynamic resource rooting
app.get("/test", async (req, res, next) => {
    const { MySQLClient } = require("./lib/databases/client.js");
    var tran;
    try{
        tran = await MySQLClient.beginTransaction();
        await tran.executeQuery(
            "UPDATE t_shop SET score=? WHERE id=?",
            [4.11, 1]
        );
        throw new Error("Test exception");
        await tran.commit();
        res.end("OK");
    }catch(err){
        await tran.rollback();
        next(err);
    }
});
app.use("/search", require("./routes/search.js"));
app.use("/shops", require("./routes/shops.js"));
app.use("/", require("./routes/index.js"));

// Set application log
app.use(applicationlogger());

// Excute web application
app.listen(PORT, () => {
    logger.application.info(`Application listening at ${PORT}`);
});