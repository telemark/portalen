[![Build Status](https://travis-ci.org/telemark/portalen.svg?branch=master)](https://travis-ci.org/telemark/portalen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# portalen

Forsiden på intranettet vårt

# Azure authentication setup

Sign in to the [Azure portal](https://portal.azure.com/)

In the left-hand navigation pane go to *Azure Active Directory* -> *App registrations* -> *New application registration* and register the app with following settings

| Setting | value |
| ------- | ----- |
| Name    | Your app name |
| Application type | Web app / API |
| Sign-on URL | https://your-domain.com/api/callback |

Go to *Settings* -> *Keys* in your registered app and type inn a Key description and value.

Go to *Settings* -> *Required permissions* in your registered app and add "Microsoft Graph" and choose the permission *Read all users' full profiles*. Add the same permission under *Windows Azure Active Directory*. Then click *Grant Permissions*

Follow the link after "Managed application in local directory" in your registered app and *Users and groups*, click *Add user* and add user(s) you want to grant access to the app.

See [microsoft docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-integrating-applications)


## Development

Add a local .env file

```
MOA_DOMAIN=http://localhost:3000
MOA_TENANT_ID=your-tenant-id
MOA_CLIENT_ID=your-client-id
MOA_CLIENT_SECRET=your-client-secret
TASKS_JWT_SECRET=secret-for-task-service
TASKS_SERVICE=url-for-task-service
DATABASE_URI=uri-for-mongodb-database
```

Start the development environment

```
$ npm run dev
```

## Deploy to ZEIT/Now

Configure [now.json](now.json) to match your environment.

Run deployment script

```
$ npm run deploy
```

## License

[MIT](LICENSE)
