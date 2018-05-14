#!/bin/sh

# MySQL DB to operate appointments microservice.
echo "Starting DB..."
docker run --name appointment -d \
  -e MYSQL_ROOT_PASSWORD=appointment \
  -e MYSQL_DATABASE=appointment -e MYSQL_USER=appointment -e MYSQL_PASSWORD=appointment \
  -p 3307:3306 \
  mysql:5.6

  # Wait for the database service to start up.
  echo "Waiting for Appointments microservice DB to start up..."
  docker exec appointment mysqladmin --silent --wait=30 -uappointment -pappointment ping || exit 1