# About the app: 

#### This is a Redux app with Node.js as backend that is able to register products.


# Getting started
 Have node.js installed locally.

#### Set up a Mongo remote DB and get your connection key ready

## Use it in here:

         mongoose.connect("YOUR MONGO DB CONNECTION KEY")

    file: server/index.js, line 26

### Now open a terminal in both client and server directories and run **npm install**


### Have your localhost 3000 and 5000 ports ready and run **npm start** on both client and 
server


## Obs: use http://localhost:5000/items/actions/mock to **create mock products**
##      use http://localhost:5000/items/actions/removeAll to **remove all products**
##      use http://localhost:5000/items/actions/removeAll to **remove all items**
##      use route (front-end) http://localhost:3000/addItems to **Add an specific item**