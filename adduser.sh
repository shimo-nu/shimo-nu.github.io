#!/bin/bash
USERNAME=shimo_nis
GROUPNAME=shimo_nis
PASSWD=shimo_nis

USERID=5024
GROUPID=5024


if [ `whoami` != "root"  ]; then
	echo "Please run by root user"
	exit 1
fi



# create user
useradd -m $USERNAME -s /bin/bash

# change userid
usermod -u $USERID $USERNAME 

# change groupid
groupmod -g $GROUPID $GROUPNAME

# set passwd
echo "${PASSWD}\n${PASSWD}\n" | passwd ${USERNAME}
