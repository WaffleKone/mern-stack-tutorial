# MERN-Stack-Tutorial
This project is a tutorial made by [MongoDB](https://www.mongodb.com/languages/mern-stack-tutorial)


## How To Run
Create a MongoAtlas URI connection parameter in `mern/server/config.env` with your Atlas URI:

```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

### Start The Server
```
cd mern/server
npm i
npm start
```

### Start The Web Server
```
cd mern/client
npm i
npm start
```

MongoDB automatically creates collections for you, so there is no need to set up collections prior to running the app.