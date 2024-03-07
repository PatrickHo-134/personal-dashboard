## How to start a new app under django-api/api
- Create a new folder named NEW_APP under django-api/api
- Run the following command `python manage.py startapp NEW_APP ./api/NEW_APP`
- After finishing the setup for the new app. To apply new changes to the database, run
    + `python manage.py makemigrations`
    + `python manage.py migrate`

