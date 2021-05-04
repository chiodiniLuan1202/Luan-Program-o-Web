const express = require('express');
const app = express();

app.get("/",(request,response) => {
    console.log(request.query);
    return response.send('Ola mundo');
    });

    app.get("/produto",(request,response) => {
        return response.json({
            id:1,
            nome:'Jaqueta'},
            { 
            id:2,
            nome:'Tenis'
        });
    });

    app.get("/produto",(request,response) => {
       console.log(request.body);
        return response.json({
            id:1,
            nome:'Tenis',
            id:2,
            nome:'Jaqueta'
        });
    });

    app.get("/produto/:id",(request,response) => {
       console.log(request.params);
        return response.json({
                       
            id:1,
            nome:'Jaqueta',
    

        });
    });
    

app.get("/usuario",(request,response) => {
    return response.json({
           
        id: 1,
        name: "Matheus",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }

        
    
    });
    
});


app.listen(3334);