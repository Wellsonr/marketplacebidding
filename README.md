# Cara Jalanin (Node V23.7)
1. Pastikan PORT mangodb ada di ::27017
2. Yarn terlebih dahulu untuk ambil library yang terbaru (pastikan node yang digunakan adalah v23.7)
3. $ENV:NODE_OPTIONS="--openssl-legacy-provider" -> paste ini diterminal. Supaya ignore webpack diff version
4. yarn start (diterminal 1)
5. yarn dev (diterminal 2)
6. pastikan proxy di package.json sama seperti port server.js
   
# MERN Marketplace

An online marketplace application with seller accounts, product search and suggestions, shopping cart, order management, payment processing with Stripe, and live auction with Socket.io - developed using React, Node, Express and MongoDB. 

![MERN Marketplace](https://mernbook.s3.amazonaws.com/git+/marketplace-bidding.png "MERN Marketplace")

### [Live Demo](http://marketplace2.mernbook.com/ "MERN Marketplace")

#### What you need to run this code
1. Node (13.12.0)
2. NPM (6.14.4) or Yarn (1.22.4)
3. MongoDB (4.2.0)
4. Stripe account with test data

####  How to run this code
1. Make sure MongoDB is running on your system 
2. Clone this repository
3. Update config/config.js with your test values for Stripe API keys and Stripe Connect Client ID 
4. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ``` or ``` yarn ```
   - To run the application for development, run ```  npm run development  ``` or ``` yarn development ```
5. Open [localhost:3000](http://localhost:3000/) in the browser
---- 
