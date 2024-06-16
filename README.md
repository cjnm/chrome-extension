# chrome-extension
Refer to the url for full reference to get started: https://docs.google.com/document/d/1lPFYRsUo63pdXKyMVWnuTjfnLGnZcl9Vc9TuF5bSecY/edit?usp=sharing
Chrome Extension Backend Repo URL: https://github.com/cjnm/chrome-extension-backend
Chrome Extension Backend Dashboard: https://chrome-extension-backend-phi.vercel.app/

## Download URL
https://github.com/cjnm/chrome-extension/releases/download/v1.0.0/v1.0.0.zip

## Introduction

The chrome extension has been created with React and Vite, using Manifest V3 api.
The user need to first login to the backend (https://chrome-extension-backend-phi.vercel.app/), navigate to `Chrome Extension` page, copy the token and paste it to the extension for auth. The token is the validated with the backend and the user is ready to go.
The user can navigate it to any daraz.com.np product page, grab the product with the extension and save it to backend.

All the backend request are authenticated and the user have an option to logout and authenticate with different token for different user account.

The features of the Extension are:

- User Authentication, login and logout
- Authenticated Requests
- Success and error messages
- Message when the extension is not being used in correct page
- Feature to navigate to dashboard to view recently saved product


## Setup

### Prerequisite

- Chrome Browser

### Building From Scratch


- Install dependency

```
yarn
```


- Build the project

```
yarn build
```

The built files cound be accessed from `/dist` directory. Prebuilt package cound be downloaded form, https://github.com/cjnm/chrome-extension/releases/download/v1.0.0/v1.0.0.zip, extracted and added to chrome.

## Adding to Chrome
- Navigate to `chrome://extensions/`
- Enable `Developer Mode` from top right side of the page
- Load the Extension from `Load Unpacked` button on top left.

## Using app
- Login to the app backend (https://chrome-extension-backend-phi.vercel.app)
- Navigate to `Chrome Extension`
- Copy the token and paste it to extension to login
- Navigate to daraz.com.np product page and start grabbing products
