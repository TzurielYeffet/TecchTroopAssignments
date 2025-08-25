const { log } = require("console");
const http = require("http");

const contact ={
    name:"Tzuriel Yeffet",
    phone:"0528680013"
}
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    switch(req.url){
        case "/":{

            res.write("Welcome to my server!")
            console.log("Welcome to my server!");
            break;
        }

        case "/about":{

            res.write("This is the about page")
            console.log("This is the about page");
            break;
        
        }

        case "/contact":
            {

                res.write(JSON.stringify(contact))
                console.log(JSON.stringify(contact));
            break;
        
            }
            
        default:{

            res.statusCode = 404;
            res.write("404 - Page not found")
            console.log(JSON.stringify("404 - Page not found"));
            break;
        
        }

    }
    res.end()
})

const port = 3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})