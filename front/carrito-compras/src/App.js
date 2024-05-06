import {useState} from 'react'
import './App.css';

function App() {
  const [montoValue, setMontoValue] = useState(0);

  const actualizarValorMonto = (event) =>{
    setMontoValue(event.target.value)
  }

  const irAPagarAWebpay = async () =>{
    const response = await fetch(`http://localhost:3001/create-payment-transaction?montoACobrar=${montoValue}`)
    const jsonRespuesta = await response.json()
    const formualrioAEnviar = document.getElementById('formIrAPagar')
    formualrioAEnviar.action = jsonRespuesta.url
    document.getElementById('hiddenWebpayToken').value = jsonRespuesta.token
    formualrioAEnviar.submit()
  }

  return (
    <div className="App">
      <input id='txtMonto' type='number' onChange={actualizarValorMonto} />
      <button onClick={irAPagarAWebpay}>Pagar</button>

      <form id='formIrAPagar' method='POST'>
        <input name='token_ws' type='hidden' id='hiddenWebpayToken'></input>
      </form>

    </div>
  );
}


export default App;
