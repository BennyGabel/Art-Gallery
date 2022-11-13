# Art-Gallery


## Purpose
A website that offers users the opportunity to comment and express appreciation of art objects in the Metropolitan Museum of Art


## Website
N/A -- backend available only


## Technical Information
### Routes available/implemented
* USER
  - GET - Extract User(s)
  - POST- Create a new user - User sign up
* COMMENT
  - GET - Extract Comments - by item - per user
  - POST- Add Comments - by item - per user
* ITEMS - Piece of Art
  - Only GET requests
    - View all Items
      *(Sort option available   Ascending/Descending)*
      1. Title *(title)*
      2. Department *(department)*
      3. Culture *(culture)*
      4. Artist nation *(artistnation)*
      5. Year art was completed *(endby)*  
    - View Item (filtered) by Id - individual
    - View item (filtered) by Culture 
      *(Sort option available   Ascending/Descending)*
      1. Title *(title)*
      2. Department *(department)*
      3. Artist nation *(artistnation)*
      4. Year art was completed  *(endby)*  
    - View Item (filtered) by Culture and year of completion

    *NOTE* When sorting, *A or *D can be added to select/indicate the direction (**Ascending**/**Descending**). *A or *D will only work if they are identified as the last two characters


## Contributors
Made with ❤️ by Benny Gabel and Jen Hano


## Github
Github Repository:  (https://github.com/BennyGabel/Art-Gallery)


## Screenshots available  
./public/assets/screenshots/