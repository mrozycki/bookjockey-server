BookJockey Server
=================

This is a sharing server built for BookJockey (link below).

It's written using node.js, Express.js and MongoDB.

It's a very simple piece of software. It accepts POST requests with stringified version of a JSON object, puts it into database and returns ID of the saved file. It also serves those objects back as a file, when requested by its ID.

Installation
------------

To run it, you need node and MongoDB server.

Clone the repository

    git clone https://github.com/mrozycki/bookjockey-server
    
Install dependencies using npm

    cd bookjockey-server && npm install
    
You may want to change database connection information in app.js.

Run the server

    node app.js
    
Related repositories
--------------------

  * BookJockey: https://github.com/superlopuh/www
  * Our fork of Brackets Shell: https://github.com/dj311/brackets-shell
