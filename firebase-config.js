// Firebase Irigoyen Exchange

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import { 
getFirestore,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


// Configuración Firebase

const firebaseConfig = {

apiKey: "AIzaSyCTrgcPU2wj2ult9bWUF-om1FxJa76sg0U",

authDomain: "irigoyenexchange.firebaseapp.com",

projectId: "irigoyenexchange",

storageBucket: "irigoyenexchange.firebasestorage.app",

messagingSenderId: "192387847923",

appId: "1:192387847923:web:01702a2176ee67c616c986",

measurementId: "G-ZQHFR1GTQC"

};


// Inicializar

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Función para obtener USDT

export async function obtenerUSDT(){

const referencia = doc(
db,
"cotizaciones",
"USDT"
);


const resultado = await getDoc(referencia);


if(resultado.exists()){

return resultado.data();

}


return null;

}
