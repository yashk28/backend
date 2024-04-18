import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// This line sets up middleware to parse incoming requests with
//  JSON payloads. It's telling Express to use the built-in express.json() 
//  middleware function, which parses JSON-encoded request bodies.
app.use(express.json({limit: "100kb;"}));

// This line sets up middleware to parse incoming requests with URL-encoded payloads. 
// It's telling Express to use the built-in express.urlencoded() middleware function, 
// which parses URL-encoded request bodies. The extended option specifies whether the values can be any 
// type (true allows for rich objects and false allows only string or array), 
// and the limit option specifies the maximum request body size, also set to 16 kilobytes ("16kb").
app.use(express.urlencoded( { extended : true, limit: "16kb" }));

// This line sets up middleware to serve static files. 
// It's telling Express to serve static files located in the public directory. 
// This is commonly used to serve CSS, JavaScript, images, and other static resources.
app.use(express.static('public'));

// This line sets up middleware to parse cookies attached to incoming requests. 
// It's telling Express to use the cookieParser() middleware function, 
// which parses cookies and populates req.cookies with an object keyed by the cookie names.
app.use(cookieParser());

// Routes import
import userRouter from './routes/user.routes.js';

// Routes declaration
app.use('/api/v1/users', userRouter)

export {app};