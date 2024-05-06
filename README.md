# Integración de Webpay para Pagos en Línea.
Este proyecto es una integración completa de Webpay de Transbank utilizando Node.js con Express en el backend y React en el frontend. Permite realizar pagos en línea de manera segura y eficiente, utilizando la API de Webpay para procesar transacciones de forma fluida

## Uso del proyecto:
### 1. Configuración inicial:
- Clona este repositorio en tu máquina local.
- Asegúrate de tener Node.js y npm instalados en tu sistema.
### 2. Frontend de React:
### a. Inicia el servidor de desarrollo:
- Abre una terminal en la carpeta frontend del proyecto.
- Ejecuta el comando npm install para instalar las dependencias.
- Luego, ejecuta el comando npm start para iniciar el servidor de desarrollo de React en localhost:3000.
### b. Interfaz de usuario:
- Accede a localhost:3000 en tu navegador para ver la interfaz de usuario del proyecto.
- En la página, encontrarás un formulario donde puedes ingresar el valor a pagar y proceder con el pago utilizando Webpay.
## 3. Backend de Node.js con Express:
### a. Inicia el servidor de la API:
- Abre otra terminal en la carpeta raíz del proyecto.
- Navega a la carpeta backend utilizando el comando cd backend.
- Ejecuta el comando npm install para instalar las dependencias del backend.
- Luego, ejecuta el comando npm start para iniciar el servidor de la API en localhost:3001.
### b. Configuración de la API:
- La API estará lista para recibir solicitudes del frontend de React en localhost:3001.
- La integración con Webpay se encuentra implementada en la API para procesar los pagos.
## 4. Proceso de pago:
- Una vez que el frontend y la API estén en ejecución, ingresa un valor en el formulario del frontend y procede con el pago utilizando Webpay.
- La API manejará la comunicación con Webpay y procesará la transacción de forma segura.
- ¡Disfruta explorando la integración de Webpay y realizando pagos en línea de manera sencilla!
