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
    
    // Convertir la fecha y hora a formato deseado sin a.m. o p.m.
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
    
    // Resetear también el contenedor de vehículos
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
