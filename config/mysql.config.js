module.exports = {
    HOST: process.env.MYSQL_HOST || "127.0.0.1",
    PORT: process.env.MYSQL_PORT || "3306",
    USERNAME: process.env.MYSQL_USERNAME || "admin",
    PASSWORD: process.env.MYSQL_PASSWORD || "password",
    DATABASES: process.env.MYSQL_DATABASES || "tastylog"
};