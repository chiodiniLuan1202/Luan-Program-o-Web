const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(request,response) => {
    console.log(request.query);
    return response.json({
        id: 1,
        nome: "João da Silva",
        username: "Joãozinho",
        email: "joaodasilva@gmail.com",
        endereco: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems"
            }    
    });
});

app.get('/usuario',(request,response) => {
    console.log(request.query);
    return response.json({
        id: 2,
        nome: "João da Silva",
        username: "Joãozinho"
    });
});

app.get('/produto',(request,response) => {
    console.log(request.body);
    return response.json({
        id: 3,
        nome: "camisa"
    });
});

app.listen(3333);