let vehiculoCount = 0;

function agregarVehiculo() {
    vehiculoCount++;
    const vehiculosContainer = document.getElementById('vehiculosContainer');
    
    const vehiculoDiv = document.createElement('div');
    vehiculoDiv.classList.add('vehiculo-entry');
    vehiculoDiv.dataset.id = vehiculoCount;
    vehiculoDiv.innerHTML = `
        <label for="vehiculo${vehiculoCount}">Vehículo ${vehiculoCount}:</label>
        <input type="text" id="vehiculo${vehiculoCount}" name="vehiculo${vehiculoCount}" placeholder="Por confirmar" required>
        <label for="placa${vehiculoCount}">Placa ${vehiculoCount}:</label>
        <input type="text" id="placa${vehiculoCount}" name="placa${vehiculoCount}" placeholder="Por confirmar" required>
    `;
    vehiculosContainer.appendChild(vehiculoDiv);
}

function eliminarUltimoVehiculo() {
    if (vehiculoCount > 0) {
        const vehiculosContainer = document.getElementById('vehiculosContainer');
        const ultimoVehiculo = document.querySelector(`.vehiculo-entry[data-id='${vehiculoCount}']`);
        if (ultimoVehiculo) {
            vehiculosContainer.removeChild(ultimoVehiculo);
            vehiculoCount--;
        }
    }
}

function generarReporte() {
    const form = document.getElementById('alertForm');
    const datos = new FormData(form);
    let vehiculosReporte = '';
    
    for (let i = 1; i <= vehiculoCount; i++) {
        let vehiculo = datos.get(`vehiculo${i}`) || "(POR CONFIRMAR)";
        let placa = datos.get(`placa${i}`) || "(POR CONFIRMAR)";
        vehiculosReporte += `
*VEHÍCULO ${i}:* ${vehiculo} (POR CONFIRMAR)
*PLACA${i}:* ${placa} (POR CONFIRMAR)`;
    }

    const tipoAlerta = datos.get('tipoAlerta') || "ALERTA DE ACCIDENTE";
    let fechaConocimiento = datos.get('fechaConocimiento') || "(POR CONFIRMAR)";
    if (fechaConocimiento !== "(POR CONFIRMAR)") {
        const fechaObj = new Date(fechaConocimiento);
        const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit', hour12: false };
        const fechaFormateada = fechaObj.toLocaleDateString('es-PE', opcionesFecha);
        const horaFormateada = fechaObj.toLocaleTimeString('es-PE', opcionesHora);
        fechaConocimiento = `${horaFormateada} horas del ${fechaFormateada.replace(/\//g, '/')}`;
    }
    const consecuencias = datos.get('consecuencias') ? `${datos.get('consecuencias')} (POR CONFIRMAR)` : "(POR CONFIRMAR)";
    const fallecidos = datos.get('fallecidos') ? `${datos.get('fallecidos')} (POR CONFIRMAR)` : "(POR CONFIRMAR)"; 
    const heridos = datos.get('heridos') ? `${datos.get('heridos')} (POR CONFIRMAR)` : "(POR CONFIRMAR)"

    const reporte = `
*${tipoAlerta} – CGM ${datos.get('codigoAlerta') || "(POR CONFIRMAR)"} REPORTE INICIAL🔵*
*CONSECUENCIAS:* ${consecuencias}
*FALLECIDOS:* ${fallecidos}
*HERIDOS:* ${heridos}
*MODALIDAD:* ${datos.get('modalidad') || "(POR CONFIRMAR)"}
*HORA/FECHA DE CONOCIMIENTO:* ${fechaConocimiento}
*FUENTE DE CONOCIMIENTO:* ${datos.get('fuenteConocimiento') || "(POR CONFIRMAR)"}
*LUGAR:* ${datos.get('lugar') || "(POR CONFIRMAR)"}
${vehiculosReporte}

Atte. 
*${datos.get('operador') || "(POR CONFIRMAR)"}*
*Centro de Gestión y Monitoreo - ${datos.get('ubicacion')}* 
*SUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA*
    `;
    document.getElementById('resultado').textContent = reporte;
}

function limpiarFormulario() {
    const form = document.getElementById('alertForm');
    form.reset();
    const vehiculosContainer = document.getElementById('vehiculosContainer');
    vehiculosContainer.innerHTML = '<h2>Vehículos Involucrados</h2>';
    vehiculoCount = 0;
}

//boton copiar
function copiarContenido() {
    const resultado = document.getElementById('resultado').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = resultado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('El contenido ha sido copiado al portapapeles.');
}
//PLANTILLAS
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-container button");
    const forms = document.querySelectorAll(".form-container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const formId = this.getAttribute("data-form");
            forms.forEach(form => form.style.display = "none");
            document.getElementById(formId).style.display = "block";
        });
    });

    document.getElementById("submitTrafficForm").addEventListener("click", function () {
        submitTrafficForm();
    });

    document.getElementById("submitTransmissionsForm").addEventListener("click", function () {
        submitTransmissionsForm();
    });

    document.getElementById("submitOficioForm").addEventListener("click", function () {
        submitOficioForm();
    });
});

function submitTrafficForm() {
    const operatorName = document.getElementById("operatorName").value.trim();
    const zone = document.getElementById("zoneSelector").value;
    const cgm = document.getElementById("cgmSelector").value;

    if (!operatorName) {
        alert("Por favor, ingrese el nombre del operador.");
        return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("es-PE");
    const formattedTime = currentDate.getHours().toString().padStart(2, "0") + ":" +
        currentDate.getMinutes().toString().padStart(2, "0");

    const zoneMessages = {
        "Zona Norte": `MONITOREO DE TRÁFICO ZONA NORTE\n\nSiendo las ${formattedTime} Horas del ${formattedDate}, se realiza el monitoreo del tráfico a través del GOOGLE MAPS en ZONA NORTE con código de RUTA PE-1N, PE-02, PE-1NJ, PE-1NK, PE-04, PE-02A. Se mantiene monitoreando en todo momento. Todo transcurre con normalidad.\n\nAtte\n${operatorName}\nCentro de Gestión y Monitoreo – ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`,
        "Zona Sur": `MONITOREO DE TRÁFICO ZONA SUR\n\nSiendo las ${formattedTime} Horas del ${formattedDate}, se realiza el monitoreo del tráfico a través del Google Maps en la ZONA SUR, vías con código de RUTA PE-1S, PE-3S, PE-28A, PE-30C, PE-38, observándose al momento tráfico normal. Se continuará monitoreando.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo - ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`,
        "Zona Centro": `MONITOREO DE TRÁFICO ZONA CENTRO\n\nSiendo las ${formattedTime} Horas del ${formattedDate}, se lleva a cabo el monitoreo del tráfico a través de Google Maps en la ZONA CENTRO, incluyendo las vías con códigos RUTA PE-22, PE-3S, PE-22B, PE-24A, PE-5N, PE-18A, PE-20A, PE-3N. Hasta el momento, se observa que el tráfico vehicular es moderado en la vía PE-22 Lima - La Oroya - Huancayo; así mismo, se continuará monitoreando el tráfico vehicular de la zona.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo - ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`
    };

    document.getElementById("outputMessage").value = zoneMessages[zone];
        document.getElementById('resultado').textContent = zoneMessages[zone];
}

function submitTransmissionsForm() {
    const operatorName = document.getElementById("operatorNameTransmissions").value.trim();
    const cgm = document.getElementById("cgmSelectorTransmissions").value;

    if (!operatorName) {
        alert("Por favor, ingrese el nombre del operador.");
        return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("es-PE");
    const formattedTime = currentDate.getHours().toString().padStart(2, "0") + ":" +
        currentDate.getMinutes().toString().padStart(2, "0");

    document.getElementById("outputTransmissionsMessage").value =
        `REPORTE DE TRANSMISIÓN-SCMF\n\nSiendo las ${formattedTime} horas del ${formattedDate}, se informa la actualización de estado de Transmisiones de Vehículos de Pasajeros y Mercancías.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo - ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`;
        document.getElementById("resultado").textContent =
        `REPORTE DE TRANSMISIÓN-SCMF\n\nSiendo las ${formattedTime} horas del ${formattedDate}, se informa la actualización de estado de Transmisiones de Vehículos de Pasajeros y Mercancías.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo - ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`;
}

function submitOficioForm() {
const oficioNumber = document.getElementById("oficioNumber").value.trim();
const alertNumber = document.getElementById("alertNumber").value.trim();
const alertType = document.getElementById("alertType").value;
const operatorName = document.getElementById("operatorNameOficio").value.trim();
const cgm = document.getElementById("cgmSelectorOficio").value;

if (!oficioNumber || !alertNumber || !operatorName) {
    alert("Por favor, complete todos los campos requeridos.");
    return;
}

const currentDate = new Date();
const year = currentDate.getFullYear();

document.getElementById("resultado").textContent =
    `Se realizó el OFICIO N° R${oficioNumber}-${year}-SSE, correspondiente a la ALERTA CGM${alertNumber} REPORTE ${alertType}.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo - ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`;
}

document.getElementById("submitOficioForm").addEventListener("click", submitOficioForm);

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("submitShiftForm").addEventListener("click", submitShiftForm);
});

function submitShiftForm() {
const shiftType = document.getElementById("shiftType").value;
const modality = document.getElementById("modality").value;
const operatorName = document.getElementById("operatorNameShift").value.trim();
const cgm = document.getElementById("cgmSelectorShift").value;

if (!operatorName) {
alert("Por favor, ingrese el nombre del operador.");
return;
}

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("es-PE");

const nextDay = new Date();
nextDay.setDate(currentDate.getDate() + 1);
const formattedNextDay = nextDay.toLocaleDateString("es-PE");

let message = "";

if (shiftType === "Tarde") {
message = `INICIO DEL TURNO AMANECIDA ${modality.toUpperCase()}\n\nBuenas noches, se da inicio al turno amanecida en la modalidad ${modality.toLowerCase()} desde las 19:00 horas del ${formattedDate} hasta las 07:00 horas del ${formattedNextDay}.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`;
} else {
const formattedTime = currentDate.getHours().toString().padStart(2, "0") + ":" +
    currentDate.getMinutes().toString().padStart(2, "0");
message = `INICIO/FIN DE TURNO\n\nSiendo las ${formattedTime} horas del ${formattedDate}, el operador ${operatorName} ha registrado el turno ${shiftType} en modalidad ${modality}.\n\nCentro de Gestión y Monitoreo - ${cgm}`;
}

document.getElementById("outputShiftMessage").value = message;
}



document.addEventListener("DOMContentLoaded", function () {
document.getElementById("submitShiftForm").addEventListener("click", submitShiftForm);
});

function submitShiftForm() {
const shiftType = document.getElementById("shiftType").value;
const modality = document.getElementById("modality").value;
const operatorName = document.getElementById("operatorNameShift").value.trim();
const cgm = document.getElementById("cgmSelectorShift").value;

if (!operatorName) {
alert("Por favor, ingrese el nombre del operador.");
return;
}

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("es-PE");

const nextDay = new Date();
nextDay.setDate(currentDate.getDate() + 1);
const formattedNextDay = nextDay.toLocaleDateString("es-PE");

let message = "";

if (shiftType === "Tarde") {
message = `INICIO DEL TURNO AMANECIDA ${modality.toUpperCase()}\n\nBuenas noches, se da inicio al turno amanecida en la modalidad ${modality.toLowerCase()} desde las 19:00 horas del ${formattedDate} hasta las 07:00 horas del ${formattedNextDay}.\n\nAtte.\n${operatorName}\nCentro de Gestión y Monitoreo ${cgm}\nSUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA`;
} else {
const formattedTime = currentDate.getHours().toString().padStart(2, "0") + ":" +
    currentDate.getMinutes().toString().padStart(2, "0");
message = `INICIO/FIN DE TURNO\n\nSiendo las ${formattedTime} horas del ${formattedDate}, el operador ${operatorName} ha registrado el turno ${shiftType} en modalidad ${modality}.\n\nCentro de Gestión y Monitoreo - ${cgm}`;
}

document.getElementById("outputShiftMessage").value = message;
}