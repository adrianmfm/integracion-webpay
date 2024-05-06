const express = require('express');
const transbankSDK = require('transbank-sdk');
const webpay = transbankSDK.WebpayPlus
const cors = require('cors');

const app = express();
const port = 3001;
const contadorNumerosOrden = 0
app.use(cors());


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.get('/create-payment-transaction', async (request, response) => {
    const numeroAUsar = contadorNumerosOrden+1
    const numeroOrden = `TEST-NRO-ORDER-${numeroAUsar}`
    const idSesion = `SESION-ID-${numeroAUsar}`
    const montoACobrar = Number(request.query.montoACobrar)
    const urlRetorno = `http://localhost:3001/confirmar-transaccion`

    const transaccionWebpay = await (new webpay.Transaction()).create(
        numeroOrden, idSesion, montoACobrar, urlRetorno
    )
    console.log(transaccionWebpay)

    response.json({
        token: transaccionWebpay.token,
        url: transaccionWebpay.url
    })
})

app.post('/confirmar-transaccion', async(request, response) =>{
    
    const tokenWebpay = request.body.TDK_TOKEN

    if(tokenWebpay !== null){
        const resultadoConfirmacion = await (new webpay.Transaction().commit(token))
        if(resultadoConfirmacion.response_code === 0){
            response.redirect('/exito')
        } else{
            response.redirect('/fracaso')
        }
    }
    else{
        response.redirect('/fracaso')
    }
})

app.get('/confirmar-transaccion', async(request, response) =>{
    
    const tokenWebpay = request.query.token_ws
    if(tokenWebpay !== null){
        const resultadoConfirmacion = await (new webpay.Transaction().commit(tokenWebpay))
        console.log(resultadoConfirmacion)
        if(resultadoConfirmacion.response_code === 0){
            response.redirect('/exito')
        } else{
            response.redirect('/fracaso-sin-response-code')
        }
    }
    else{
        response.redirect('/fracaso')
    }
})