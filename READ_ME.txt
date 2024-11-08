Views === Pages 
home.ejs === index.ejs
_____________________________________

EXPLANATION ABOUT: 
const path = require("path"); 
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

EXPLANATION:

path module: The path module is used 
to work with file and directory paths in a platform-independent way
 (so it works both on Windows and Unix-based systems).

express.static(): This line makes the public
 directory available for static file serving (CSS, JS, images). 
 It tells Express to look for files inside public and serve them to the client when requested.

app.set("views"): This tells Express where to find your view (EJS template) files.
 The views directory is where all your EJS files (like home.ejs) should be stored.
 
.....................................

REMINEDRS:

-flex only works on containers

-usualy we can use % for max-height OR max-wiedht 
EXP:
  max-width: 40%;
  max-height: 600px;


-"name" THIS IS what the data will be send under, right when that post request is sent off.
    <input type="text" placeholder="username" name="username" /> EXP: name: David
    

-Form has only get and post requset methods


-(req, res) => {...}:
This is the callback function (also called a controller) that runs when the route is triggered by a GET request.


 -let { id } = req.params; // the :id part means that the property called "id"
  //For example if you have the route /user/:name , then the "name" from the URL path wil be available as req.params.name