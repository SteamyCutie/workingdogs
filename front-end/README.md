# Getting Started with WORKING DOGS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Please feel free to ask any questions to me at anytime through (https://t.me/kritical0613).

## Customizing the Menu

Just go into the `**/src/configs/menu.json**` and customize the array of "menu-item" field.\
Change the 5 links in the file to your community links.

## Customizing the Roadmap

Just go into the `**/src/configs/roadmap.json**` and add or remove more items with the following format.


  {\
    "name": "NEW ROADMAP NAME",\
    "image": "Image File Name",   // Just the new filename in the `**/src/assets/img/roadmap/[newfilename].png**`\
    "description": "Next Working Dog Breed will be voted on by the community, developed and released.",\
    "loaded": 50,                 // Complete percentage of the phase (upto 100)\
    "progress": "Lorem ipsum"     // Progress Name\
  }


## Customizing the Gallery

Just go into the `**/src/configs/gallery.json**` and add or remove more image file names.\
Make sure that new images are located in `**/src/assets/img/gallery**`


## Customizing the Team

Just go into the `**/src/configs/team.json**` and add or remove more items with the following format.\


  {\
    "role": "NEW ROLE",           // New Role name of the new team member\
    "photo": "Image File Name"    // Just the new member's photo in the `**/src/assets/img/team/[newfilename].png**`\
  }


## Customizing the Rarity Values

Just go into the `**/src/configs/rarity.json**` and only customize the current values (**Do not add or remove**).


## Customizing the FAQ

Just go into the `**/src/configs/faq.json**` and add or remove the new values.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
