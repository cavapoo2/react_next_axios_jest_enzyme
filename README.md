Note
----

I tested and developed this with ubuntu 16.04, I have not tested on windows or mac osx. 
I also used both firefox and chrome browsers to test, some decent level of manual testing for the UI.
Node and npm need to be installed of course, I downloaded from here the LTS : https://nodejs.org/en/download/
node --version v8.12.0
npm --version

I used Jest and Enzyme for testing, mainly testing the more complicated code parts (the decoder and the input 
validation). As mentioned quite a bit of manual testing was done for the UI. I'd be interested if you break
the app and letting me know how.
I used express for the server, and morgan for seeing traces on the server.
Note with next.js, the only code that exposed to the public if deployed is in static folder (not used)
and the pages folder, all other files are hidden.
   

Setup
-----
(1) if you want to run the app in dev mode do (in the terminal)

npm run dev

(2) with browser go to http://localhost:3000, here you can play with the app

(3) if you want to create a production build do (in the terminal) 

npm run build
npm run start

(4) with browser go to http://localhost:3000, here you can play with the app

(65 in production mode, you can specify the port number like this

PORT_NUM=8000 npm run start

you can then use the app at http://localhost:8000

(7) if you want to deploy the app, see the now zeit and install now. once now is installed, then do

now


(8) if you want to test the app do 

npm run test


Possible Improvements
----------------------

(1) better layout with flex or grids.
(2) make server use async
(3) investigate the state on refresh more, any better alternatives
(4) any way to optimize the data being sent from client to server. 
