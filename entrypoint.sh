#!/bin/bash

sleep 10

python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0:8000
