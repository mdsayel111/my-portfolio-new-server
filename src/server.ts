/* eslint-disable no-console */
import { IncomingMessage, Server, ServerResponse } from "http";
import app from "./app";
import { config } from "./app/config";
import { connect } from "mongoose";

// handle uncaugth exeption
process.on("uncaughtException", async () => {
  // stop current process
  process.exit(1)
})

// handle unhandle rejection stop server gracefully
process.on("unhandledRejection", async () => {
  // close all connections
  server.closeAllConnections()

  // closing server
  server.close(() => {
    console.log("Server closing gracefully!")
  })

  // stop current process
  process.exit(1)
})

// here the app starts listening
let server: Server<typeof IncomingMessage, typeof ServerResponse>;;

// create main function for start server and connection with database
const main = async () => {
  await connect(config.dbUrl as string);
  server = app.listen(config.port, () => {
    console.log("server start");
  })
}

main()
