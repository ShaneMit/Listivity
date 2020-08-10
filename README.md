# listivity 
This interactive activity saver allows a user to write, save and delete activities with in the application.
<br>
<br>
App link:  https://radiant-woodland-54871.herokuapp.com/

## Installation
The software used to create this generator include: Javascript, Node.js, Animation.CSS, Sequelize, ENV and Express.  

**Please use 'npm init -y' followed by npm-i to install the NPM dependencies. Upon installation, confirm that all the packages were installed and appear in your package.json file.**
<br>
<br> 
If the dependencies listed above did not appear in your package.json file after running npm init-i, please run the following commands:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL: npm i sequelize
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENV: npm i dotenv
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS: npm i express
<br>

## Usage
Listivity is an application that tracks social activity ideas for users. As they think of them, users will input their data for social activities they don’t want to forget. 

When a user signs-up or logs in, they are presented with three categories: Activities, Dining and Entertain. When a user submits their inputs in a given field, their idea will be saved as a card under that tab. Each activity is able to be edited and deleted, using assigned buttons at the bottom of each card. 

If user's to do not want to select an activity themselves, they are able to click the "shuffle" button at the top of the page. The site will sort through the user's stored data and present them with an activity. 

The user's inputs are stored in a MYSQL database and retrieved the next time a user logs into their account. 

## Demo

![Listivity Gif](./public/assets/images/listivity.gif)

<br>

## Future Development
In the future, the application will grow to include a search function for the user. Instead of user input, the user can search for a restaurant, recipe, activity or movie and save it to their profile. 

Additional functionality, like a "share" button, will be created that allows users to share their activity list with friends. 
