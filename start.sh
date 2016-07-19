#!/bin/bash
forever start -c "node app/js/server/server.js" ./
forever start -c "npm start" ./
gulp