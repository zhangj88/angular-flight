#!/bin/bash
bower install --allow-root
forever start -c "node app/js/server/server.js" ./
forever start -c "npm start" ./
gulp