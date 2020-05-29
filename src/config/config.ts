export const config = {
  dev: {
    username: "postgres",
    password: "database1234",
    database: "cloud-1",
    host: "database-1.codule2i5xcb.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "gameimagestorage",
  },
  prod: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "postgres",
  },
};
