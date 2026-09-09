// =======================================
// FIREBASE IRIGOYEN EXCHANGE
// =======================================


import { 
initializeApp 
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";


import { 
getFirestore,
doc,
getDoc,
updateDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";



// =======================================
// CONFIGURACIÓN FIREBASE
// =======================================


const firebaseConfig = {


apiKey: "AIzaSyCTrgcPU2wj2ult9bWUF-om1FxJa76sg0U",

authDomain: "irigoyenexchange.firebaseapp.com",

projectId: "irigoyenexchange",

storageBucket: "irigoyenexchange.firebasestorage.app",

messagingSenderId: "192387847923",

appId: "1:192387847923:web:01702a2176ee67c616c986",

measurementId: "G-ZQHFR1GTQC"


};



// =======================================
// INICIALIZAR FIREBASE
// =======================================


export const app = initializeApp(firebaseConfig);


const db = getFirestore(app);






// =======================================
// OBTENER USDT
// =======================================


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






// =======================================
// OBTENER USD / GUARANÍ
// =======================================


export async function obtenerUSD(){


const referencia = doc(
db,
"cotizaciones",
"USD"
);



const resultado = await getDoc(referencia);



if(resultado.exists()){


return resultado.data();


}


return null;


}







// =======================================
// OBTENER CONFIGURACIÓN CRYPTO
// =======================================


export async function obtenerConfiguracionCrypto(){


const referencia = doc(
db,
"cotizaciones",
"configuracion"
);



const resultado = await getDoc(referencia);



if(resultado.exists()){


const datos = resultado.data();


return datos.crypto || null;


}


return null;


}







// =======================================
// OBTENER COTIZACIONES ADMIN
// =======================================


export async function obtenerCotizacionesAdmin(){


const usdtRef = doc(
db,
"cotizaciones",
"USDT"
);



const usdRef = doc(
db,
"cotizaciones",
"USD"
);




const usdtSnap = await getDoc(usdtRef);


const usdSnap = await getDoc(usdRef);




return {


USDT:

usdtSnap.exists()
?
usdtSnap.data()
:
null,



USD:

usdSnap.exists()
?
usdSnap.data()
:
null



};



}







// =======================================
// ACTUALIZAR USDT / USD
// =======================================


export async function actualizarCotizacion(
moneda,
compra,
venta
){



const referencia = doc(
db,
"cotizaciones",
moneda
);



await updateDoc(
referencia,
{

compra:Number(compra),

venta:Number(venta),

ultimaActualizacion: serverTimestamp()

}

);



}








// =======================================
// OBTENER MÁRGENES CRYPTO
// =======================================


export async function obtenerMargenesCrypto(){


const referencia = doc(
db,
"cotizaciones",
"configuracion"
);



const resultado = await getDoc(referencia);



if(resultado.exists()){


const datos = resultado.data();


return datos.crypto || null;


}



return null;


}








// =======================================
// ACTUALIZAR MÁRGENES CRYPTO
// =======================================


export async function actualizarMargenesCrypto(
compra,
venta
){



const referencia = doc(
db,
"cotizaciones",
"configuracion"
);



await updateDoc(
referencia,
{

crypto:{

margenCompra:Number(compra),

margenVenta:Number(venta)

},

ultimaActualizacion: serverTimestamp()

}

);



}
