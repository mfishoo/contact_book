A full-stack MERN App to manage contacts.

## Features ##
- Token-based registration / login / logout / validation flow
- Create / Edit / Delete / Filter / Sort contacts

## Build With ## 
- React (axios, context API, React Router v4, React transition group)
- [Express](https://expressjs.com/) - Node.js web app framework
- Express validator
- [node.bcrypt.js](https://www.npmjs.com/package/bcrypt) - password hashing
- mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js
- [nodemon](https://nodemon.io/#:~:text=Nodemon%20is%20a%20utility%20that,restart%20when%20your%20code%20changes.) - Node.js utils
- JWT



## API Endpoints ##

All contact endpoints are protected with JWT authentication and each registered user has their own contacts. 


### Register a User [POST /api/users]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

### Login with a User [POST /api/auth]

- Request: Login with credentials to recieve a JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

### Get Contacts [GET /api/contacts]

- Request: Get all contacts of a specific user

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "contacts": []
          }

### Add New Contact [POST /api/contacts]

- Request: Add a new contact

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Update Contact [PUT /api/contacts/:id]

- Request: Update existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Delete Contact [DELETE /api/contacts/:id]

- Request: Delete existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "msg": "Contact removed"
          }


## Screenshot ##
![Homepage](https://user-images.githubusercontent.com/65449903/88945253-5895fd80-d2c0-11ea-8e0a-4ec30fd11848.png)

