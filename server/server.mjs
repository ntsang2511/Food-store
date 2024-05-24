import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import fakeData from "./fakeData/index.js";
import mongoose, { mongo } from "mongoose";
import "dotenv/config";
import { resolvers } from "./resolvers/index.js";
import { typeDefs } from "./schemas/index.js";
import "./firebaseConfig.js";
import { getAuth } from "firebase-admin/auth";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
// import { nodemailer} from 'nodemailer';
const app = express();
const httpServer = http.createServer(app);


const option = {
    service: 'gmail',
    auth: {
        user: 'tansang25112003@gmail.com', // email hoặc username
        pass: 'Sanggamer25112003.' // password
    }
};
// var transporter = nodemailer.createTransport(option);

// transporter.verify(function(error, success) {
//     // Nếu có lỗi.
//     if (error) {
//         console.log(error);
//     } else { //Nếu thành công.
//         console.log('Kết nối thành công!');
//         var mail = {
//             from: 'tansang25112003@gmail.com', // Địa chỉ email của người gửi
//             to: 'nts25112003@gmail.com', // Địa chỉ email của người gửi
//             subject: 'Thư được gửi bằng Node.js', // Tiêu đề mail
//             text: 'Toidicode.com học lập trình online miễn phí', // Nội dung mail dạng text
//         };
//         //Tiến hành gửi email
//         transporter.sendMail(mail, function(error, info) {
//             if (error) { // nếu có lỗi
//                 console.log(error);
//             } else { //nếu thành công
//                 console.log('Email sent: ' + info.response);
//             }
//         });
//     }
// });

// Connect to DB
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xdvxh7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = process.env.PORT || 5000;
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if app.use
  // serves expressMiddleware at a different path
  path: "/",
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

// Change the file into mjs to use await without a function
await server.start();

const authorizationJWT = async (req, res, next) => {
  console.log(
    "authorization !!!@#21312321" + { authorization: req.headers.authorization }
  );
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    const accessToken = authorizationHeader.split(" ")[1];
    getAuth()
      .verifyIdToken(accessToken)
      .then((decodedToken) => {
        console.log({ decodedToken });
        res.locals.uid = decodedToken.uid;
        next();
      })
      .catch((err) => {
        console.log({ err });
        return res.status(403).json({ message: "Forbidden", error: err });
      });
  } else {
    next();
    // return res.status(401).json({message: 'Unauthorized'});
  }
};

// Use cors for fix the error
app.use(
  cors(),
  authorizationJWT,
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      return { uid: res.locals.uid };
    },
  })
);
mongoose.set("strictQuery", false);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to DB");
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log("🚀 Server ready at http://localhost:5000");
  });
