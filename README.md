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

# S3 setup

You will need an S3 bucket on [AWS](https://aws.amazon.com) to persist [GUN](https://github.com/amark/gun) in production.

Follow [this guide](http://gun.js.org/docs/Using-Amazon-S3-for-Storage)

For development you can persist to file.

# Installation alternatives

## 1. Run on host

### Install

Nodejs >= 8.9.4 and npm must be installed.

```sh
git clone https://github.com/telemark/portalen
cd portalen
npm i
```

### Edit config

See [config.js](config.js)

```sh
vim config.js
```

## License

[MIT](LICENSE)
