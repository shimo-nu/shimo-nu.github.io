#!/bin/bash

HOSTDIR=/mnt/bigdata/00_students/shimo_nis/shimo-nu.github.io

docker run -d -v $HOSTDIR:/usr/local/apache2/htdocs -p 11188:80 httpd
