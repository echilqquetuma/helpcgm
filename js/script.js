/* Contadores y Función para agregar vehículos */
let contadorVehiculos = 0;
let contadorFuentes = 0;
let contadorFuentesActual = 0;
let contadorFallecidos = 0;
let contadorHeridos = 0;

function addVehicle(type) {
    contadorVehiculos++;
    var vehicleSection = document.createElement('div');
    vehicleSection.classList.add('vehicle-section');
    vehicleSection.id = `vehiculo${contadorVehiculos}`;

    if (type === 'mercancias') {
        vehicleSection.innerHTML = `
            <h4>Vehículo de Mercancías ${contadorVehiculos}</h4>

            <label for="tipoVehiculo${contadorVehiculos}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculo${contadorVehiculos}" name="tipoVehiculo${contadorVehiculos}" required>
            <option value="Camion Furgon">Camión Furgón</option>
            <option value="Semirremolque">Semirremolque</option>
            </select>

            <select class="styled-select" id="categoria" name="categoria" required>
            <option value="N2">N2</option>
            <option value="N3">N3</option>
            </select>

            <select class="styled-select" id="permisomtc" name="permisomtc" required>
            <option value="CNG">CNG</option>
            <option value="MRP">MRP</option>
            </select>

                    <button class="addButton" onclick="addCarreta(this, ${contadorVehiculos})" type="button">
                    <img src="img/semi.svg" alt="" width="30px" height="30px" class="addCarreta">
                    <span class="tooltip">Agregar Carreta</span>
                    </button>

                    <button class="deleteButton" onclick="removeCarreta(this, ${contadorVehiculos})" type="button">
                    <img src="img/eliminar.svg" alt="" width="30px" height="30px" class="removeCarreta">
                    <span class="tooltip">Eliminar Carreta</span>
                    </button><br><br>
                    
            <label for="placa">PLACAformulario${contadorVehiculos}</label>
            <input class="input" type="text" name="PLACA${contadorVehiculos}"><br><br>
            <label for="ett">ETT${contadorVehiculos}</label>
            <input class="input" type="text" name="ETT${contadorVehiculos}"><br><br>
            <label for="habilitacion">HABILITACION${contadorVehiculos}</label>
            <input class="input" type="text" name="HABILITACION${contadorVehiculos}"><br><br>
            <label for="itv">ITV${contadorVehiculos}</label>
            <input class="input" type="text" name="ITV${contadorVehiculos}"><br><br>
            <label for="soat">SOAT${contadorVehiculos}</label>
            <input class="input" type="text" name="SOAT${contadorVehiculos}"><br><br>
            <label for="uso">USO${contadorVehiculos}</label>
            <input class="input" type="text" name="USO${contadorVehiculos}"><br><br>
            <label for="gps">GPS${contadorVehiculos}</label>
            <input class="input" type="text" name="GPS${contadorVehiculos}"><br><br>
            <label for="sentido">SENTIDO${contadorVehiculos}</label>
            <input class="input" type="text" name="SENTIDO${contadorVehiculos}">
            <div id="carretaContainer${contadorVehiculos}"></div>


        `;
    } else if (type === 'pasajeros') {
        vehicleSection.innerHTML = `
            <h3>Vehículo de Pasajeros ${contadorVehiculos}</h3>
                    
            <label for="tipoVehiculoPasajeros${contadorVehiculos}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculoPasajeros${contadorVehiculos}" name="tipoVehiculoPasajeros${contadorVehiculos}" required>
            <option value="Microbus">Microbús</option>
            <option value="Omnibus">Ómnibus</option>
            </select>

            <select class="styled-select" id="categoria" name="categoria" required>
            <option value="N2">N2</option>
            <option value="N3">N3</option>
            </select>

            <select class="styled-select" id="permisomtc" name="permisomtc" required>
            <option value="PNT">PNT</option>
            <option value="PNW">PNW</option>
            </select><br><br>

            <label for="HOJA DE RUTA">HOJA DE RUTA${contadorVehiculos}:</label>
            <input class="input" type="text" name="HOJA DE RUTA${contadorVehiculos}" required><br><br>
            <label for="placa">Placa${contadorVehiculos}:</label>
            <input class="input" type="text" name="placa${contadorVehiculos}" required><br><br>
            <label for="ett">ETT${contadorVehiculos}:</label>
            <input class="input" type="text" name="ett${contadorVehiculos}" required><br><br>
            <label for="habilitacion">HABILITACION${contadorVehiculos}:</label>
            <input class="input" type="text" name="habilitacion${contadorVehiculos}" required><br><br>
            <label for="itv">ITV${contadorVehiculos}:</label>
            <input class="input" type="text" name="itv${contadorVehiculos}" required><br><br>
            <label for="soat">SOAT${contadorVehiculos}:</label>
            <input class="input" type="text" name="soat${contadorVehiculos}" required><br><br>
            <label for="uso">USO${contadorVehiculos}:</label>
            <input class="input" type="text" name="uso${contadorVehiculos}" required><br><br>
            <label for="gps">GPS${contadorVehiculos}:</label>
            <input class="input" type="text" name="gps${contadorVehiculos}" required><br><br>
            <label for="sentido">SENTIDO${contadorVehiculos}:</label>
            <input class="input" type="text" name="sentido${contadorVehiculos}" required><br><br>
        `;
    } else if (type === 'particular') {
        vehicleSection.innerHTML = `
            <h3>Vehículo Particular ${contadorVehiculos}</h3>
            <label for="tipoVehiculoParticular${contadorVehiculos}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculoParticular${contadorVehiculos}" name="tipoVehiculoParticular${contadorVehiculos}" required>
            <option value="Automovil">Automóvil</option>
            <option value="Motocicleta">Motocicleta</option>
            </select>

            <select class="styled-select" id="categoria" name="categoria" required>
            <option value="N2">N2</option>
            <option value="N3">N3</option>
            </select><br><br>

            <label for="vehiculo">Vehículo${contadorVehiculos}:</label>
            <input class="input" type="text" name="vehiculo${contadorVehiculos}" required><br><br>
            <label for="placa">Placa${contadorVehiculos}:</label>
            <input class="input" type="text" name="placa${contadorVehiculos}" required><br><br>
            <label for="propietario">PROPIETARIO${contadorVehiculos}:</label>
            <input class="input" type="text" name="propietario${contadorVehiculos}" required><br><br>
            <label for="marca">MARCA${contadorVehiculos}:</label>
            <input class="input" type="text" name="marca${contadorVehiculos}" required><br><br>
            <label for="color">COLOR${contadorVehiculos}:</label>
            <input class="input" type="text" name="color${contadorVehiculos}" required><br><br>
            <label for="itv">ITV${contadorVehiculos}:</label>
            <input class="input" type="text" name="itv${contadorVehiculos}" required><br><br>
            <label for="soat">SOAT${contadorVehiculos}:</label>
            <input class="input" type="text" name="soat${contadorVehiculos}" required><br><br>
            <label for="uso">USO${contadorVehiculos}:</label>
            <input class="input" type="text" name="uso${contadorVehiculos}" required><br><br>
            <label for="sentido">SENTIDO${contadorVehiculos}:</label>
            <input class="input" type="text" name="sentido${contadorVehiculos}" required><br><br>
        `;
    } else if (type === 'internacional') {
        vehicleSection.innerHTML = `
            <h3>Vehículo Internacional ${contadorVehiculos}</h3>
            <label for="tipoVehiculoInternacional${contadorVehiculos}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculoInternacional${contadorVehiculos}" name="tipoVehiculoInternacional${contadorVehiculos}" required>
            <option value="Mercancias">Mercancías</option>
            <option value="Pasajeros">Pasajeros</option>
            <option value="Tren">Tren</option>
            </select>

            <select class="styled-select" id="categoria" name="categoria" required>
            <option value="N2">N2</option>
            <option value="N3">N3</option>
            </select><br><br>

            <label for="vehiculo">Vehículo${contadorVehiculos}:</label>
            <input class="input" type="text" name="vehiculo${contadorVehiculos}" required><br><br>
            <label for="placa">Placa${contadorVehiculos}:</label>
            <input class="input" type="text" name="placa${contadorVehiculos}" required><br><br>
            <label for="ett">ETT${contadorVehiculos}:</label>
            <input class="input" type="text" name="ett${contadorVehiculos}" required><br><br>
            <label for="sentido">SENTIDO${contadorVehiculos}:</label>
            <input class="input" type="text" name="sentido${contadorVehiculos}" required><br><br>
            <div id="carretaContainer${contadorVehiculos}"></div>
            <input type="button" value="Agregar Carreta" onclick="addCarreta(this, ${contadorVehiculos})">
            <input type="button" value="Eliminar Carreta" onclick="removeCarreta(this, ${contadorVehiculos})"><br><br>
        `;
    }

    vehicleSection.innerHTML += `
        <div id="conductorContainer"></div>
        <input type="button" value="Agregar Conductor" onclick="addConductor(this)">
        <input type="button" value="Eliminar Conductor" onclick="removeConductor(this)">
        <input type="button" value="Eliminar Vehículo" onclick="removeVehicle(this)"><br><br>
    `;

    document.getElementById('vehicleContainer').appendChild(vehicleSection);
}
/* Funciones para agregar y eliminar carretas */
function addCarreta(button, vehiculoId) {
    const carretaContainer = document.getElementById(`carretaContainer${vehiculoId}`);
    const carretaCount = carretaContainer.querySelectorAll('.carreta-section').length + 1;
    const carretaSection = document.createElement('div');
    carretaSection.classList.add('carreta-section');
    carretaSection.id = `carreta${vehiculoId}.${carretaCount}`;
    carretaSection.innerHTML = `
        <label for="tipoVehiculo${vehiculoId}.${carretaCount}">Tipo de Vehículo:</label>
        <select class="styled-select" id="tipoVehiculo${vehiculoId}.${carretaCount}" name="tipoVehiculo${vehiculoId}.${carretaCount}" required>
            <option value="CAMION">CAMION</option>
            <option value="FURGON">FURGON</option>
            <option value="REMOLCADOR">REMOLCADOR</option>
            <option value="PLATAFORMA">PLATAFORMA</option>
            <option value="BARANDA">BARANDA</option>
            <option value="CISTERNA">CISTERNA</option>
            <option value="VOLQUETE">VOLQUETE</option>
            <option value="CAÑERO">CAÑERO</option>
            <option value="CIGUEÑA">CIGUEÑA</option>
            <option value="BOMBONA">BOMBONA</option>
            <option value="CAMION GRUA">CAMION GRUA</option>
            <option value="COMPACTADOR">COMPACTADOR</option>
            <option value="PICK UP">PICK UP</option>
        </select>

        <label for="categoria${vehiculoId}.${carretaCount}">Categoría:</label>
        <select class="styled-select" id="categoria${vehiculoId}.${carretaCount}" name="categoria${vehiculoId}.${carretaCount}" required>
            <option value="O1">O1</option>
            <option value="O2">O2</option>
            <option value="O3">O3</option>
            <option value="O4">O4</option>
        </select><br><br>
        <!-- Campo para capturar los valores seleccionados en los selects -->
        <label for="seleccion${vehiculoId}.${carretaCount}">Selección:</label>
        <input class="input" type="text" id="seleccion${vehiculoId}.${carretaCount}" name="seleccion${vehiculoId}.${carretaCount}" readonly><br><br>
        <label for="vehiculo">Vehículo ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="vehiculo${vehiculoId}.${carretaCount}" required><br><br>
        <label for="placa">Placa ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="placa${vehiculoId}.${carretaCount}" required><br><br>
        <label for="ett">ETT ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="ett${vehiculoId}.${carretaCount}" required><br><br>

    `;
    carretaContainer.appendChild(carretaSection);

    // Agregar event listeners a los selects para capturar los valores seleccionados
    const tipoVehiculoSelect = document.getElementById(`tipoVehiculo${vehiculoId}.${carretaCount}`);
    const categoriaSelect = document.getElementById(`categoria${vehiculoId}.${carretaCount}`);
    const seleccionInput = document.getElementById(`seleccion${vehiculoId}.${carretaCount}`);

    function updateSeleccion() {
        seleccionInput.value = `${tipoVehiculoSelect.value}, ${categoriaSelect.value}`;
    }

    tipoVehiculoSelect.addEventListener('change', updateSeleccion);
    categoriaSelect.addEventListener('change', updateSeleccion);

    // Inicializar el input con los valores seleccionados por defecto
    updateSeleccion();
}


function removeCarreta(button, vehiculoId) {
    var carretaContainer = document.getElementById(`carretaContainer${vehiculoId}`);
    if (carretaContainer.lastChild) {
        carretaContainer.removeChild(carretaContainer.lastChild);
    }
}

/* Funciones para agregar y eliminar conductores */
function addConductor(button) {
    var conductorCount = button.parentElement.querySelectorAll('.conductor-section').length + 1;
    var conductorSection = document.createElement('div');
    conductorSection.classList.add('conductor-section');
    conductorSection.innerHTML = `
        <label for="conductor">CONDUCTOR ${contadorVehiculos}.${conductorCount}:</label>
        <input class="input" type="text" name="conductor${contadorVehiculos}.${conductorCount}" required><br><br>
        <label for="licencia">Licencia de conducir ${contadorVehiculos}.${conductorCount}:</label>
        <input class="input" type="text" name="licencia${contadorVehiculos}.${conductorCount}" required><br><br>
        <label for="clase_categoria">Clase y categoría ${contadorVehiculos}.${conductorCount}:</label>
        <input class="input" type="text" name="clase_categoria${contadorVehiculos}.${conductorCount}" required><br><br>
        <label for="vigencia">Vigencia ${contadorVehiculos}.${conductorCount}:</label>
        <input class="input" type="text" name="vigencia${contadorVehiculos}.${conductorCount}" required><br><br>
    `;
    button.parentElement.querySelector('#conductorContainer').appendChild(conductorSection);
}

function removeConductor(button) {
    var conductorContainer = button.parentElement.querySelector('#conductorContainer');
    if (conductorContainer.lastChild) {
        conductorContainer.removeChild(conductorContainer.lastChild);
    }
}

/* Función para eliminar vehículos */
function removeVehicle(button) {
    var vehicleSection = button.parentElement;
    vehicleSection.remove();
    contadorVehiculos--;
    actualizarNumeracion([...document.querySelectorAll('.vehicle-section')]);
}

/* Función para actualizar la numeración de los vehículos */
function actualizarNumeracion(vehiculos) {
    vehiculos.forEach((vehiculo, index) => {
        vehiculo.querySelector('h3, h4').textContent = `Vehículo ${index + 1}`;
        const labels = vehiculo.querySelectorAll('label');
        labels.forEach(label => {
            const partes = label.textContent.split(/(\d+):/);
            if (partes.length > 1) {
                label.textContent = label.textContent.replace(partes[1], `${index + 1}`);
            }
        });
    });
    contadorVehiculos = vehiculos.length;
}

function agregarFallecido() {
    const fallecidosDiv = document.getElementById('fallecidos');
    if (!fallecidosDiv.querySelector('.fallecido-item')) {
        const nuevoFallecido = document.createElement('div');
        nuevoFallecido.className = 'fallecido-item';
        nuevoFallecido.innerHTML = `
            <textarea class="textarea" rows="4" cols="50" placeholder="Nombre Completo" required></textarea>
            <button type="button" onclick="eliminarFallecido(this)">Eliminar</button>
        `;
        fallecidosDiv.appendChild(nuevoFallecido);
    }
}

function eliminarFallecido(button) {
    const fallecido = button.parentElement;
    fallecido.remove();
}

function agregarHerido() {
    const heridosDiv = document.getElementById('heridos');
    if (!heridosDiv.querySelector('.herido-item')) {
        const nuevoHerido = document.createElement('div');
        nuevoHerido.className = 'herido-item';
        nuevoHerido.innerHTML = `
            <textarea class="textarea" rows="4" cols="50" placeholder="Nombre Completo" required></textarea>
            <button type="button" onclick="eliminarHerido(this)">Eliminar</button>
        `;
        heridosDiv.appendChild(nuevoHerido);
    }
}

function eliminarHerido(button) {
    const herido = button.parentElement;
    herido.remove();
}

/* Funciones para agregar y eliminar comisarías */
function addComisaria() {
    const comisariaContainer = document.createElement('div');
    comisariaContainer.classList.add('comisaria-section');
    comisariaContainer.innerHTML = `
        <h3>DATOS PARA EL OFICIO</h3>
        <label for="comisaria">Comisaria:</label>
        <input class="input" type="text" name="comisaria" required><br><br>
        <label for="encargado">Encargado:</label>
        <input class="input" type="text" name="encargado" required><br><br>
        <label for="correo">Correo:</label>
        <input class="input" type="email" name="correo" required><br><br>
        <label for="direccion">Dirección:</label>
        <input class="input" type="text" name="direccion" required><br><br>
        <label for="telefono">Telefono:</label>
        <input class="input" type="tel" name="telefono" required><br><br>
        <input type="button" value="Eliminar Comisaria" onclick="removeComisaria(this)"><br><br>
    `;
    document.getElementById('comisariaContainer').appendChild(comisariaContainer);
}

function removeComisaria(button) {
    const comisariaSection = button.parentElement;
    comisariaSection.remove();
}

/* Funciones para agregar y eliminar fuentes */
function addFuente() {
    contadorFuentes++;
    contadorFuentesActual++;

    const fuenteContainer = document.createElement('div');
    fuenteContainer.classList.add('fuente-section');
    fuenteContainer.id = `fuente${contadorFuentes}`;
    fuenteContainer.innerHTML = `
        <h3>FUENTE DE INFORMACIÓN ${contadorFuentes}</h3>
        <label for="fuente${contadorFuentes}">Fuente ${contadorFuentes}:</label>
        <input class="input" type="text" name="fuente${contadorFuentes}" required><br><br>
        <label for="telefono${contadorFuentes}">Telefono:</label>
        <input class="input" type="tel" name="telefono${contadorFuentes}" required><br><br>
        <label for="num_llamadas${contadorFuentes}">Num. Llamadas:</label>
        <input class="input" type="number" name="num_llamadas${contadorFuentes}" required><br><br>
        <input type="button" value="Eliminar Fuente" onclick="removeFuente(this, ${contadorFuentes})"><br><br>
    `;
    document.getElementById('fuenteContainer').appendChild(fuenteContainer);
}

function removeFuente(button, fuenteId) {
    const fuenteSection = document.getElementById(`fuente${fuenteId}`);
    fuenteSection.remove();
    contadorFuentesActual--;

    // Reajustar numeración correlativa
    const fuentes = document.querySelectorAll('.fuente-section');
    let newCount = 1;
    fuentes.forEach(fuente => {
        fuente.querySelector('h3').textContent = `FUENTE DE INFORMACIÓN ${newCount}`;
        fuente.querySelector('label[for^="fuente"]').textContent = `Fuente ${newCount}:`;
        newCount++;
    });

    // Actualizar contador
    contadorFuentes = newCount - 1;
}

// Agregar eventos de cambio para los campos de fecha y hora
document.getElementById('fechaConocimiento').addEventListener('change', validarFechas);
document.getElementById('horaConocimiento').addEventListener('change', validarFechas);
document.getElementById('fechaAccidente').addEventListener('change', validarFechas);
document.getElementById('horaAccidente').addEventListener('change', validarFechas);

function validarFechas() {
    const fechaConocimiento = document.getElementById('fechaConocimiento').value;
    const horaConocimiento = document.getElementById('horaConocimiento').value;
    const fechaAccidente = document.getElementById('fechaAccidente').value;
    const horaAccidente = document.getElementById('horaAccidente').value;

    if (fechaConocimiento && horaConocimiento && fechaAccidente && horaAccidente) {
        const dateConocimiento = new Date(`${fechaConocimiento}T${horaConocimiento}`);
        const dateAccidente = new Date(`${fechaAccidente}T${horaAccidente}`);

        if (dateConocimiento < dateAccidente) {
            alert('La fecha y hora del conocimiento no pueden ser antes que la fecha y hora del accidente.');
        }
    }
}


/* Función para enviar alerta */
function enviarAlerta() {
    // Validar fechas antes de generar la alerta
    validarFechas();

    const numFallecidos = document.getElementById('numFallecidos').value;
    const numHeridos = document.getElementById('numHeridos').value;

    const tipoAlerta = document.getElementById("tipoAlerta").value;
    const numeroAlerta = document.getElementById("numeroAlerta").value;
    const colorAlerta = document.getElementById("colorAlerta").value;
    const versionAlerta = document.getElementById("versionAlerta").value;
    const consecuenciaAlerta = document.getElementById("consecuenciaAlerta").value.toUpperCase();
    const modalidad = document.getElementById("modalidad").value;
    const fechaConocimiento = document.getElementById("fechaConocimiento").value;
    const horaConocimiento = document.getElementById("horaConocimiento").value;
    const fuenteConocimiento = document.getElementById("fuenteConocimiento").value;
    const fechaAccidente = document.getElementById("fechaAccidente").value;
    const fuenteAccidente = document.getElementById("fuenteAccidente").value;
    const horaAccidente = document.getElementById("horaAccidente").value;

    const fechaPartes = fechaConocimiento.split('-'); 
    const fechaConocimientoFormatted = `${fechaPartes[2]}/${fechaPartes[1]}/${fechaPartes[0].slice(-2)}`;
    const fechaAccidentePartes = fechaAccidente.split('-'); 
    const fechaAccidenteFormatted = `${fechaAccidentePartes[2]}/${fechaAccidentePartes[1]}/${fechaAccidentePartes[0].slice(-2)}`;

    const coordenadas = document.getElementById("coordenadas").value;
    const km = document.getElementById("km").value;
    const codigoRuta = document.getElementById("codigoRuta").value;
    const distrito = document.getElementById("distrito").value;
    const provincia = document.getElementById("provincia").value;
    const region = document.getElementById("region").value;
    const link = document.getElementById("link").value;
    const detalle = document.getElementById("detalle").value;
    const nombreOperador = document.getElementById("nombreOperador").value;
    const cgm = document.getElementById("cgm").value;
    const colorEmoji = colorAlerta === "rojo" ? "🔴" : colorAlerta === "naranja" ? "🟠" : "🟡";

    // Capturar contenido de fallecidos y heridos
    let fallecidos = "";
    const fallecidosTextarea = document.querySelector('.fallecido-item textarea');
    if (fallecidosTextarea) {
        fallecidos = fallecidosTextarea.value;
    }

    let heridos = "";
    const heridosTextarea = document.querySelector('.herido-item textarea');
    if (heridosTextarea) {
        heridos = heridosTextarea.value;
    }

    /*//publicacion de los vehiculos
    let vehiculos = "";
    const vehiculosElements = document.querySelectorAll('.vehicle-section');
    vehiculosElements.forEach((vehiculo, index) => {
        let tipoVehiculo = "";
        if (vehiculo.querySelector(`#tipoVehiculo${index + 1}`)) {
            tipoVehiculo = vehiculo.querySelector(`#tipoVehiculo${index + 1}`).value;
            } else if (vehiculo.querySelector(`#tipoVehiculoPasajeros${index + 1}`)) {
                tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoPasajeros${index + 1}`).value;
            } else if (vehiculo.querySelector(`#tipoVehiculoParticular${index + 1}`)) {
                tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoParticular${index + 1}`).value;
            } else if (vehiculo.querySelector(`#tipoVehiculoInternacional${index + 1}`)) {
                tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoInternacional${index + 1}`).value;
            }
        vehiculos += `Vehículo ${index + 1} (Tipo: ${tipoVehiculo}):`;
        const inputs = vehiculo.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            vehiculos += `${input.name}: ${input.value}\n`;
        });
    });*/

//publicacion de los vehiculos
let vehiculos = "";
const vehiculosElements = document.querySelectorAll('.vehicle-section');
vehiculosElements.forEach((vehiculo, index) => {
    let tipoVehiculo = "";
    if (vehiculo.querySelector(`#tipoVehiculo${index + 1}`)) {
        tipoVehiculo = vehiculo.querySelector(`#tipoVehiculo${index + 1}`).value;
        let categoria = vehiculo.querySelector('#categoria').value;
        let permisoMTC = vehiculo.querySelector('#permisomtc').value;
        vehiculos += `*\n**Vehículopublicado ${index + 1}:* ${tipoVehiculo}(${categoria})(${permisoMTC})\n`;
    } else if (vehiculo.querySelector(`#tipoVehiculoPasajeros${index + 1}`)) {
        tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoPasajeros${index + 1}`).value;
        let categoria = vehiculo.querySelector('#categoria').value;
        let permisoMTC = vehiculo.querySelector('#permisomtc').value;
        vehiculos += `**Vehículo ${index + 1}:* ${tipoVehiculo}(${categoria})(${permisoMTC})\n`;
    }else if (vehiculo.querySelector(`#tipoVehiculoParticular${index + 1}`)) {
        tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoParticular${index + 1}`).value;
        let categoria = vehiculo.querySelector('#categoria').value;
        vehiculos += `**Vehículo ${index + 1}:* ${tipoVehiculo}(${categoria})\n`;
    } else if (vehiculo.querySelector(`#tipoVehiculoInternacional${index + 1}`)) {
        tipoVehiculo = vehiculo.querySelector(`#tipoVehiculoInternacional${index + 1}`).value;
        let categoria = vehiculo.querySelector('#categoria').value;
        vehiculos += `**Vehículo ${index + 1}:* ${tipoVehiculo}(${categoria})\n`;
    }
    /*// Continuar con else if para otros tipos de vehículos si es necesario.
    const inputs = vehiculo.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        vehiculos += `${input.name}: ${input.value}\n`;
    });
});*/
    // Agregar los campos del vehículo con el formato deseado
    const inputs = vehiculo.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const fieldName = input.name.replace(/\d+$/, ''); // Elimina el número al final del nombre
        const fieldValue = input.value;
        vehiculos += `**${fieldName.toUpperCase()}${index + 1}:* ${fieldValue}\n`;
    });
});
   //  let comisarias = "*\n";
   // const comisariaElements = document.querySelectorAll('.comisaria-section');
   // comisariaElements.forEach(comisaria => {
   //     const inputs = comisaria.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
   //     inputs.forEach(input => {
            /*comisarias += `${input.name}: ${input.value}\n`;
        });
    });*/
   //  comisarias += `${input.name}: ${input.value}\n`; // Agrega un salto de línea después de cada campo
   //});
   //comisarias += "\n"; // Agrega una línea en blanco después de cada comisaría
   //});

let comisarias = ""; // INICIALIZA COMO CADENA VACÍA
const comisariaElements = document.querySelectorAll('.comisaria-section');
if (comisariaElements.length > 0) { // SOLO SI HAY ELEMENTOS
    comisarias = "*\n"; // COMIENZA CON EL SEPARADOR Y SALTO DE LÍNEA
    comisariaElements.forEach(comisaria => {
        const inputs = comisaria.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
        inputs.forEach(input => {
            comisarias += `${input.name}: ${input.value}\n`;
        });
    });
}


//    let fuentes = "*\n";
//    const fuenteElements = document.querySelectorAll('.fuente-section');
//    fuenteElements.forEach((fuente, index) => {
//        fuentes += `Fuente ${index + 1}:`;
//        const inputs = fuente.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"]');
//        inputs.forEach(input => {
            /*fuentes += `${input.name}: ${input.value}\n`;
        });
    });*/
//    const fieldName = input.name.replace(/\d+$/, ''); // Elimina el número al final del nombre
//    const fieldValue = input.value;
//    fuentes += `\n${fieldName}${index + 1}: ${fieldValue}`; // Agrega el nombre del campo y su valor
//});
//fuentes += "\n"; // Agrega un salto de línea al final de cada fuente
//});


let fuentes = ""; // INICIALIZA COMO CADENA VACÍA
const fuenteElements = document.querySelectorAll('.fuente-section');
if (fuenteElements.length > 0) { // SOLO SI HAY ELEMENTOS
    fuentes = "*\n"; // COMIENZA CON EL SEPARADOR Y SALTO DE LÍNEA
    fuenteElements.forEach((fuente, index) => {
        // Usamos el número del H3 para la consistencia, ya que contadorFuentes se resetea en la renumeración.
        const fuenteNumeroMatch = fuente.querySelector('h3').textContent.match(/\d+/);
        const fuenteNumero = fuenteNumeroMatch ? fuenteNumeroMatch[0] : index + 1;

        fuentes += `Fuente ${fuenteNumero}:`; // Sin salto de línea aquí
        const inputs = fuente.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"]');
        inputs.forEach(input => {
            const fieldName = input.name.replace(/\d+$/, '');
            const fieldValue = input.value;
            // Asumimos que el input name es como "fuenteN", "telefonoN", etc.
            // y queremos "fuente: VALOR", "telefono: VALOR"
            const labelName = fieldName.replace(`${fuenteNumero}`, ''); // Quita el número del nombre del campo si existe
            fuentes += `\n${labelName}: ${fieldValue}`; // Salto de línea ANTES de cada campo
        });
        fuentes += "\n"; // Salto de línea al final de cada fuente
    });
}




    //ESTE ES EL CODIGO DE COMO SE PULICARA LA ALERTA
/*    const mensaje = `
*${tipoAlerta} CGM ${numeroAlerta} REPORTE FINAL ${colorEmoji}*\n
**Versión:** *${versionAlerta}*
**Consecuencia:** ${consecuenciaAlerta}
**Fallecidos:**\t${numFallecidos}
**Nombres:**\t${fallecidos}
**Heridos:**\t${numHeridos}
**Nombres:**\t${heridos}
**Modalidad:** ${modalidad}
**Fecha conocimiento:**\t${fechaConocimientoFormatted}
**Hora conocimiento:** ${horaConocimiento}
**Fuente conocimiento:** ${fuenteConocimiento}
**Fecha accidente:** ${fechaAccidenteFormatted}
**Fuente accidente:** ${fuenteAccidente}
**Hora accidente:** ${horaAccidente}
**Coordenadas:** ${coordenadas}
**Ubicación:** "KM" ${km} DE LA VÍA NACIONAL CON *CÓDIGO* ${codigoRuta}, *DISTRITO* ${distrito}, *PROVINCIA* ${provincia}, *REGIÓN* ${region}
**Link:** ${link}
${vehiculos}
*
**Detalle:** ${detalle}
${comisarias}
${fuentes}
*
*Atte*\n${nombreOperador}
Centro de Gestión y Monitoreo - ${cgm}
SUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA
`;*/


//ESTE ES EL CODIGO DE COMO SE PULICARA LA ALERTA
const mensaje = `
*${tipoAlerta} CGM ${numeroAlerta} REPORTE FINAL ${colorEmoji}*
**Versión:** *${versionAlerta}*
**Consecuencia:** ${consecuenciaAlerta}
**Fallecidos:**\t${numFallecidos}
**Nombres:**\t${fallecidos}
**Heridos:**\t${numHeridos}
**Nombres:**\t${heridos}
**Modalidad:** ${modalidad}
**Fecha conocimiento:**\t${fechaConocimientoFormatted}
**Hora conocimiento:** ${horaConocimiento}
**Fuente conocimiento:** ${fuenteConocimiento}
**Fecha accidente:** ${fechaAccidenteFormatted}
**Fuente accidente:** ${fuenteAccidente}
**Hora accidente:** ${horaAccidente}
**Coordenadas:** ${coordenadas}
**Ubicación:** "KM" ${km} DE LA VÍA NACIONAL CON *CÓDIGO* ${codigoRuta}, *DISTRITO* ${distrito}, *PROVINCIA* ${provincia}, *REGIÓN* ${region}
**Link:** ${link}
${vehiculos}* 
**Detalle:** ${detalle}
${comisarias}${fuentes}*
*Atte*\n${nombreOperador}
Centro de Gestión y Monitoreo ${cgm}
SUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA
`;

document.getElementById('resultado').textContent = mensaje;
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
    alert('La alerta final ha sido copiado al portapapeles.');
}
    /*limpiar formulario*/
    function limpiarFormulario() {
        // Obtener el formulario
        const form = document.querySelector('form');
    
        // Restablecer todos los campos del formulario
        form.reset();
    
        // Limpiar contenedores dinámicos
        document.getElementById('vehicleContainer').innerHTML = '';
        document.getElementById('comisariaContainer').innerHTML = '';
        document.getElementById('fuenteContainer').innerHTML = '';
    
        // También puedes restablecer contadores si es necesario
        contadorVehiculos = 0;
        contadorFuentes = 0;
        contadorFuentesActual = 0;
    }
    
