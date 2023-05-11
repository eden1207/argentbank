## How to run the project locally :


### Clone the projet:

In order to install the project locally, please, fork the repository:

```
https://github.com/eden1207/argentbank
```

Then,

```
git clone https://github.com/eden1207/argentbank.git
```

### Go to the project directory :

For the back-end part, all details are given in the READ.ME of the Back-end folder but usually, when all dependencies are installed, go to the back-end folder,

```
cd back-end
```

### Run the API :

and run the API as described in the back-end README

### Access to the front-end part :

When you are in the project folder, please, go the the front-end folder,

```
cd front-end
```

### The .env file :

There is in the front-end folder a .env file. This is in order to enter the number of
the port of the back-end. In this project, the back-end can be read on the port 3001. Consequently,
the environment constant is:

```
REACT_APP_PORT='http://localhost:3001/api/v1'
```

If you need to work on another port, please, change here the port number.

### Run the project :

Then, run the project by using the following command,

```
npm start
```

### Go to a user profile :

When the project is loaded, you are landing to the home page.

For authentation, you need to enter the user email and password. Here:

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

or,

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

You will be able to see my proposal added for the back-end work of the second part of the project.