# Node_Assessment

## Controllers
All controllers are present in Controller Folder
1.blogAuth
  In this all the authentication is present when the user singup  post/auth/singup the token generation takes place and same token generation takes place when the user try to log in by post/auth/login.

2. blogController 
    In this controller all the request are send from the user end after getting authorised, mainly here we are dealing with the blog content like add, delete, update, view blogs.
    
 3.bookmarkController
    In this all the blogs got added in the bookmark db when the user select the particular blog for view
    
 ## Database
 all the database connectivity takes place at db.js file and we have three models.
 1. user
    in this all the user are present.
 2. blog
    all the blogs are present in this model.
 3. bookmarkBlog
    here all the blogs which is bookmarked are present
   
 ## Utlity
 in this folder we have utility files.
 1. token
    here the token generation takes place & the filter user without password function are also there
 
 ## Main File  
  our main file is index.js from where the server running takes place
