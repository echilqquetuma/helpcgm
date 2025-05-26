let contadorVehiculos = 0;
let contadorFuentes = 0; 
let contadorFuentesActual = 0;

function addVehicle(type) {
    const nuevoIndiceVehiculo = contadorVehiculos + 1;

    var vehicleSection = document.createElement('div');
    vehicleSection.classList.add('vehicle-section');
    vehicleSection.id = `vehiculo${nuevoIndiceVehiculo}`;

    if (type === 'mercancias') {
        vehicleSection.innerHTML = `
            <h3>Vehículo de Mercancías ${nuevoIndiceVehiculo}</h3>
            <label for="tipoVehiculo${nuevoIndiceVehiculo}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculo${nuevoIndiceVehiculo}" name="tipoVehiculo${nuevoIndiceVehiculo}" required>
                <option value="CAMION">CAMIÓN</option>
                <option value="CAMION AUXILIO MECANICO">CAMIÓN AUXILIO MECÁNICO</option>
                <option value="CAMION BARANDA">CAMIÓN BARANDA</option>
                <option value="CAMION CISTERNA">CAMIÓN CISTERNA</option>
                <option value="CAMION CISTERNA COMBUSTIBLE">CAMIÓN CISTERNA COMBUSTIBLE</option>
                <option value="CAMION DE BOMBEROS">CAMIÓN DE BOMBEROS</option>
                <option value="CAMION GRUA">CAMIÓN GRÚA</option>
                <option value="CAMION MEZCLADOR">CAMIÓN MEZCLADOR</option>
                <option value="CAMION PLATAFORMA">CAMIÓN PLATAFORMA</option>
                <option value="CAMION PORTATROPA">CAMIÓN PORTATROPA</option>
                <option value="CAMION TANQUE CORROSIVO">CAMIÓN TANQUE CORROSIVO</option>
                <option value="CAMION TANQUE DE GLP">CAMIÓN TANQUE DE GLP</option>
                <option value="CAMION TANQUE DE GNV">CAMIÓN TANQUE DE GNV</option>
                <option value="CAMION VOLQUETE">CAMIÓN VOLQUETE</option>
                <option value="CAMION CAÑERO">CAMIÓN CAÑERO</option>
                <option value="COMPACTADOR">COMPACTADOR (CAMIÓN DE BASURA)</option>
                <option value="FURGON">FURGÓN</option>
                <option value="FURGON FRIGORIFICO">FURGÓN FRIGORÍFICO</option>
                <option value="FURGON ISOTERMICO">FURGÓN ISOTÉRMICO</option>
                <option value="REMOLCADOR">REMOLCADOR</option>
            </select>
            <label for="categoria${nuevoIndiceVehiculo}">Categoría:</label>
            <select class="styled-select" id="categoria${nuevoIndiceVehiculo}" name="categoria${nuevoIndiceVehiculo}" required>
                <option value="N1">N1</option>
                <option value="N2">N2</option>
                <option value="N3">N3</option>
            </select>
            <label for="permisomtc${nuevoIndiceVehiculo}">Permiso MTC:</label>
            <select class="styled-select" id="permisomtc${nuevoIndiceVehiculo}" name="permisomtc${nuevoIndiceVehiculo}" required>
                <option value="CNG">CNG</option>
                <option value="MRP">MRP</option>
            </select>
            <button class="addButton" onclick="addCarreta(this, ${nuevoIndiceVehiculo}, 'mercancias')" type="button">
                <img src="img/semi.svg" alt="Agregar Carreta" width="30px" height="30px" class="addCarreta">
                <span class="tooltip">Agregar Carreta</span>
            </button>
            <button class="deleteButton" onclick="removeCarreta(this, ${nuevoIndiceVehiculo})" type="button">
                <img src="img/eliminar.svg" alt="Eliminar Carreta" width="30px" height="30px" class="removeCarreta">
                <span class="tooltip">Eliminar Carreta</span>
            </button><br><br>
            <label for="PLACA${nuevoIndiceVehiculo}">PLACA ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="PLACA ${nuevoIndiceVehiculo}" name="PLACA${nuevoIndiceVehiculo}"><br><br>
            <label for="ETT${nuevoIndiceVehiculo}">ETT ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="ETT ${nuevoIndiceVehiculo}" name="ETT${nuevoIndiceVehiculo}"><br><br>
            <label for="HABILITACION${nuevoIndiceVehiculo}">HABILITACION ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="HABILITACION ${nuevoIndiceVehiculo}" name="HABILITACION${nuevoIndiceVehiculo}"><br><br>
            <label for="ITV${nuevoIndiceVehiculo}">ITV ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="ITV ${nuevoIndiceVehiculo}" name="ITV${nuevoIndiceVehiculo}"><br><br>
            <label for="SOAT${nuevoIndiceVehiculo}">SOAT ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="SOAT ${nuevoIndiceVehiculo}" name="SOAT${nuevoIndiceVehiculo}"><br><br>
            <label for="USO${nuevoIndiceVehiculo}">USO ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="USO ${nuevoIndiceVehiculo}" name="USO${nuevoIndiceVehiculo}"><br><br>
            <label for="GPS${nuevoIndiceVehiculo}">GPS ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="GPS ${nuevoIndiceVehiculo}" name="GPS${nuevoIndiceVehiculo}"><br><br>
            <label for="SENTIDO${nuevoIndiceVehiculo}">SENTIDO ${nuevoIndiceVehiculo}</label>
            <input class="input" type="text" id="SENTIDO ${nuevoIndiceVehiculo}" name="SENTIDO${nuevoIndiceVehiculo}">
            <div id="carretaContainer${nuevoIndiceVehiculo}"></div>
        `;
    } else if (type === 'pasajeros') {
        vehicleSection.innerHTML = `
            <h3>Vehículo de Pasajeros ${nuevoIndiceVehiculo}</h3>
            <label for="tipoVehiculoPasajeros${nuevoIndiceVehiculo}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculoPasajeros${nuevoIndiceVehiculo}" name="tipoVehiculoPasajeros${nuevoIndiceVehiculo}" required>
                <option value="AMBULANCIA">AMBULANCIA</option>
                <option value="AUTOMOVIL">AUTOMÓVIL</option>
                <option value="CAMIONETA 4X2">CAMIONETA 4X2</option>
                <option value="CAMIONETA 4X4">CAMIONETA 4X4</option>
                <option value="CAMIONETA RURAL">CAMIONETA RURAL</option>
                <option value="CAMIONETA STATION WAGON">CAMIONETA STATION WAGON</option>
                <option value="MINIBUS">MINIBÚS</option>
                <option value="OMNIBUS">ÓMNIBUS</option>
                <option value="OMNIBUS ARTICULADO">ÓMNIBUS ARTICULADO</option>
                <option value="OMNIBUS INTERURBANO">ÓMNIBUS INTERURBANO</option>
                <option value="OMNIBUS PANORAMICO">ÓMNIBUS PANORÁMICO</option>
                <option value="OMNIBUS URBANO">ÓMNIBUS URBANO</option>
            </select>
            <label for="categoria${nuevoIndiceVehiculo}">Categoría:</label>
            <select class="styled-select" id="categoria${nuevoIndiceVehiculo}" name="categoria${nuevoIndiceVehiculo}" required>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
            </select>
            <label for="permisomtc${nuevoIndiceVehiculo}">Permiso MTC:</label>
            <select class="styled-select" id="permisomtc${nuevoIndiceVehiculo}" name="permisomtc${nuevoIndiceVehiculo}" required>
                <option value="PNR">PNR</option>
                <option value="PNT">PNT</option>
                <option value="PNW">PNW</option>
            </select><br><br>
            <label for="placa${nuevoIndiceVehiculo}">Placa${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="placa${nuevoIndiceVehiculo}" name="placa${nuevoIndiceVehiculo}" required><br><br>
            <label for="ett${nuevoIndiceVehiculo}">ETT${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="ett${nuevoIndiceVehiculo}" name="ett${nuevoIndiceVehiculo}" required><br><br>
            <label for="hr${nuevoIndiceVehiculo}">HOJA DE RUTA${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="hr${nuevoIndiceVehiculo}" name="HOJA DE RUTA${nuevoIndiceVehiculo}" required><br><br>
            <label for="habilitacion${nuevoIndiceVehiculo}">HABILITACION${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="habilitacion${nuevoIndiceVehiculo}" name="habilitacion${nuevoIndiceVehiculo}" required><br><br>
            <label for="itv${nuevoIndiceVehiculo}">ITV${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="itv${nuevoIndiceVehiculo}" name="itv${nuevoIndiceVehiculo}" required><br><br>
            <label for="soat${nuevoIndiceVehiculo}">SOAT${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="soat${nuevoIndiceVehiculo}" name="soat${nuevoIndiceVehiculo}" required><br><br>
            <label for="uso${nuevoIndiceVehiculo}">USO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="uso${nuevoIndiceVehiculo}" name="uso${nuevoIndiceVehiculo}" required><br><br>
            <label for="gps${nuevoIndiceVehiculo}">GPS${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="gps${nuevoIndiceVehiculo}" name="gps${nuevoIndiceVehiculo}" required><br><br>
            <label for="sentido${nuevoIndiceVehiculo}">SENTIDO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="sentido${nuevoIndiceVehiculo}" name="sentido${nuevoIndiceVehiculo}" required><br><br>
        `;
    } else if (type === 'particular') {
        vehicleSection.innerHTML = `
            <h3>Vehículo Particular ${nuevoIndiceVehiculo}</h3>
            <label for="tipoVehiculoParticular${nuevoIndiceVehiculo}">Tipo de Vehículo:</label>
            <select class="styled-select" id="tipoVehiculoParticular${nuevoIndiceVehiculo}" name="tipoVehiculoParticular${nuevoIndiceVehiculo}" required>
                <option value="AMBULANCIA">AMBULANCIA</option>
                <option value="AUTOMOVIL">AUTOMÓVIL</option>
                <option value="CAMION">CAMIÓN</option>
                <option value="CAMION AUXILIO MECANICO">CAMIÓN AUXILIO MECÁNICO</option>
                <option value="CAMION BARANDA">CAMIÓN BARANDA</option>
                <option value="CAMION CISTERNA">CAMIÓN CISTERNA</option>
                <option value="CAMION CISTERNA COMBUSTIBLE">CAMIÓN CISTERNA COMBUSTIBLE</option>
                <option value="CAMION DE BOMBEROS">CAMIÓN DE BOMBEROS</option>
                <option value="CAMION GRUA">CAMIÓN GRÚA</option>
                <option value="CAMION MEZCLADOR">CAMIÓN MEZCLADOR</option>
                <option value="CAMION PLATAFORMA">CAMIÓN PLATAFORMA</option>
                <option value="CAMION PORTATROPA">CAMIÓN PORTATROPA</option>
                <option value="CAMION TANQUE CORROSIVO">CAMIÓN TANQUE CORROSIVO</option>
                <option value="CAMION TANQUE DE GLP">CAMIÓN TANQUE DE GLP</option>
                <option value="CAMION TANQUE DE GNV">CAMIÓN TANQUE DE GNV</option>
                <option value="CAMION VOLQUETE">CAMIÓN VOLQUETE</option>
                <option value="CAMION CAÑERO">CAMIÓN CAÑERO</option>
                <option value="CAMIONETA 4X2">CAMIONETA 4X2</option>
                <option value="CAMIONETA 4X4">CAMIONETA 4X4</option>
                <option value="CAMIONETA RURAL">CAMIONETA RURAL</option>
                <option value="CAMIONETA STATION WAGON">CAMIONETA STATION WAGON</option>
                <option value="COMPACTADOR">COMPACTADOR (CAMIÓN DE BASURA)</option>
                <option value="FURGON">FURGÓN</option>
                <option value="FURGON FRIGORIFICO">FURGÓN FRIGORÍFICO</option>
                <option value="FURGON ISOTERMICO">FURGÓN ISOTÉRMICO</option>
                <option value="MINIBUS">MINIBÚS</option>
                <option value="MOTOCICLETA">MOTOCICLETA</option>
                <option value="OMNIBUS">ÓMNIBUS</option>
                <option value="OMNIBUS ARTICULADO">ÓMNIBUS ARTICULADO</option>
                <option value="OMNIBUS INTERURBANO">ÓMNIBUS INTERURBANO</option>
                <option value="OMNIBUS PANORAMICO">ÓMNIBUS PANORÁMICO</option>
                <option value="OMNIBUS URBANO">ÓMNIBUS URBANO</option>
                <option value="REMOLCADOR">REMOLCADOR</option>
                <option value="TRIMOTO CARGA">TRIMOTO CARGA</option>
                <option value="TRIMOTO PASAJEROS">TRIMOTO PASAJEROS</option>
            </select>
            <label for="categoria${nuevoIndiceVehiculo}">Categoría:</label>
            <select class="styled-select" id="categoria${nuevoIndiceVehiculo}" name="categoria${nuevoIndiceVehiculo}" required>
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="L3">L3</option>
                <option value="L4">L4</option>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
                <option value="N1">N1</option>
                <option value="N2">N2</option>
                <option value="N3">N3</option>
                <option value="O1">O1</option>
                <option value="O2">O2</option>
                <option value="O3">O3</option>
                <option value="O4">O4</option>
            </select><br><br>
            <label for="vehiculo${nuevoIndiceVehiculo}">Vehículo${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="vehiculo${nuevoIndiceVehiculo}" name="vehiculo${nuevoIndiceVehiculo}" required><br><br>
            <label for="placa${nuevoIndiceVehiculo}">Placa${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="placa${nuevoIndiceVehiculo}" name="placa${nuevoIndiceVehiculo}" required><br><br>
            <label for="propietario${nuevoIndiceVehiculo}">PROPIETARIO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="propietario${nuevoIndiceVehiculo}" name="propietario${nuevoIndiceVehiculo}" required><br><br>
            <label for="marca${nuevoIndiceVehiculo}">MARCA${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="marca${nuevoIndiceVehiculo}" name="marca${nuevoIndiceVehiculo}" required><br><br>
            <label for="color${nuevoIndiceVehiculo}">COLOR${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="color${nuevoIndiceVehiculo}" name="color${nuevoIndiceVehiculo}" required><br><br>
            <label for="itv${nuevoIndiceVehiculo}">ITV${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="itv${nuevoIndiceVehiculo}" name="itv${nuevoIndiceVehiculo}" required><br><br>
            <label for="soat${nuevoIndiceVehiculo}">SOAT${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="soat${nuevoIndiceVehiculo}" name="soat${nuevoIndiceVehiculo}" required><br><br>
            <label for="uso${nuevoIndiceVehiculo}">USO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="uso${nuevoIndiceVehiculo}" name="uso${nuevoIndiceVehiculo}" required><br><br>
            <label for="sentido${nuevoIndiceVehiculo}">SENTIDO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="sentido${nuevoIndiceVehiculo}" name="sentido${nuevoIndiceVehiculo}" required><br><br>
        `;
    } else if (type === 'internacional') {
        vehicleSection.innerHTML = `
            <h3>Vehículo Internacional ${nuevoIndiceVehiculo}</h3>
            
            <label for="tipoPrincipalVehInt${nuevoIndiceVehiculo}">Tipo Principal:</label>
            <select class="styled-select" id="tipoPrincipalVehInt${nuevoIndiceVehiculo}" name="tipoPrincipalVehInt${nuevoIndiceVehiculo}" required>
                <option value="CAMION">CAMIÓN</option>
                <option value="REMOLCADOR">REMOLCADOR</option>
                <option value="OMNIBUS">OMNIBUS</option>
                <option value="MINIBUS">MINIBUS</option>
                <option value="TREN">TREN</option>
            </select>

            <label for="categoriaVehInt${nuevoIndiceVehiculo}">Categoría Vehículo:</label>
            <select class="styled-select" id="categoriaVehInt${nuevoIndiceVehiculo}" name="categoriaVehInt${nuevoIndiceVehiculo}" required>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
                <option value="M3">M3</option>
                <option value="N1">N1</option>
                <option value="N2">N2</option>
                <option value="N3">N3</option>
            </select>

            <label for="nacionalidadVehInt${nuevoIndiceVehiculo}">Nacionalidad:</label>
            <select class="styled-select" id="nacionalidadVehInt${nuevoIndiceVehiculo}" name="nacionalidadVehInt${nuevoIndiceVehiculo}" required>
                <option value="ARGENTINO">ARGENTINO</option>
                <option value="BOLIVIANO">BOLIVIANO</option>
                <option value="BRASILEÑO">BRASILEÑO</option> 
                <option value="CHILENO">CHILENO</option>
                <option value="COLOMBIANO">COLOMBIANO</option>
                <option value="ECUATORIANO">ECUATORIANO</option> 
            </select><br><br>
            
            <input type="hidden" id="descripcionFullVehInt${nuevoIndiceVehiculo}" name="descripcionFullVehInt${nuevoIndiceVehiculo}">

            <label for="placaVehInt${nuevoIndiceVehiculo}">Placa${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="placaVehInt${nuevoIndiceVehiculo}" name="placaVehInt${nuevoIndiceVehiculo}" required><br><br> 
            
            <label for="ettVehInt${nuevoIndiceVehiculo}">ETT${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="ettVehInt${nuevoIndiceVehiculo}" name="ettVehInt${nuevoIndiceVehiculo}" required><br><br>
            
            <label for="sentidoVehInt${nuevoIndiceVehiculo}">SENTIDO${nuevoIndiceVehiculo}:</label>
            <input class="input" type="text" id="sentidoVehInt${nuevoIndiceVehiculo}" name="sentidoVehInt${nuevoIndiceVehiculo}" required><br><br>
            
            <div id="carretaInternacionalContainer${nuevoIndiceVehiculo}"></div>
            <input type="button" value="Agregar Carreta Internacional" onclick="addCarretaInternacional(this, ${nuevoIndiceVehiculo})">
            <input type="button" value="Eliminar Carreta Internacional" onclick="removeCarretaInternacional(this, ${nuevoIndiceVehiculo})"><br><br>
        `;
    }

    vehicleSection.innerHTML += `
        <div id="conductorContainer${nuevoIndiceVehiculo}"></div>
        <input type="button" value="Agregar Conductor" onclick="addConductor(this, ${nuevoIndiceVehiculo})">
        <input type="button" value="Eliminar Conductor" onclick="removeConductor(this, ${nuevoIndiceVehiculo})">
        <input type="button" value="Eliminar Vehículo" onclick="removeVehicle(this)"><br><br>
    `;

    document.getElementById('vehicleContainer').appendChild(vehicleSection);
    contadorVehiculos++;

    if (type === 'internacional') {
        setTimeout(() => { 
            const tipoSelect = document.getElementById(`tipoPrincipalVehInt${nuevoIndiceVehiculo}`);
            const categoriaSelect = document.getElementById(`categoriaVehInt${nuevoIndiceVehiculo}`);
            const nacionalidadSelect = document.getElementById(`nacionalidadVehInt${nuevoIndiceVehiculo}`);
            const descripcionInput = document.getElementById(`descripcionFullVehInt${nuevoIndiceVehiculo}`);

            function updateFullDescripcionVehInt() {
                if (tipoSelect && categoriaSelect && nacionalidadSelect && descripcionInput) {
                    descripcionInput.value = `${tipoSelect.value} (${categoriaSelect.value}) (${nacionalidadSelect.value})`;
                }
            }

            if (tipoSelect) tipoSelect.addEventListener('change', updateFullDescripcionVehInt);
            if (categoriaSelect) categoriaSelect.addEventListener('change', updateFullDescripcionVehInt);
            if (nacionalidadSelect) nacionalidadSelect.addEventListener('change', updateFullDescripcionVehInt);
            
            updateFullDescripcionVehInt(); 
        }, 0);
    }
}

function addCarreta(button, vehiculoId, tipoVehiculoPadre = 'mercancias') { 
    const carretaContainer = document.getElementById(`carretaContainer${vehiculoId}`);
    if (!carretaContainer) return; 
    const carretaCount = carretaContainer.querySelectorAll('.carreta-section').length + 1;
    const carretaSection = document.createElement('div');
    carretaSection.classList.add('carreta-section');
    carretaSection.id = `carreta${vehiculoId}_${carretaCount}`; 
    
    let carretaHTML = `
        <h3>Carreta ${vehiculoId}.${carretaCount}</h3>
        <label for="tipoCarreta${vehiculoId}_${carretaCount}">Tipo de Vehículo (Carreta):</label>
        <select class="styled-select" id="tipoCarreta${vehiculoId}_${carretaCount}" name="tipoCarreta${vehiculoId}_${carretaCount}" required>
            <option value="BARANDA">BARANDA</option>
            <option value="BOMBONA">BOMBONA</option>
            <option value="CAMION">CAMIÓN</option>
            <option value="CAMION GRUA">CAMIÓN GRÚA</option>
            <option value="CAÑERO">CAÑERO</option>
            <option value="CIGUEÑA">CIGÜEÑA</option>
            <option value="CISTERNA">CISTERNA</option>
            <option value="COMPACTADOR">COMPACTADOR</option>
            <option value="FURGON">FURGÓN</option>
            <option value="PICK UP">PICK UP</option>
            <option value="PLATAFORMA">PLATAFORMA</option>
            <option value="REMOLCADOR">REMOLCADOR</option>
            <option value="VOLQUETE">VOLQUETE</option>
        </select>
        <label for="categoriaCarreta${vehiculoId}_${carretaCount}">Categoría (Carreta):</label>
        <select class="styled-select" id="categoriaCarreta${vehiculoId}_${carretaCount}" name="categoriaCarreta${vehiculoId}_${carretaCount}" required>
            <option value="N1">N1</option>
            <option value="N2">N2</option>
            <option value="N3">N3</option>
            <option value="O1">O1</option>
            <option value="O2">O2</option>
            <option value="O3">O3</option>
            <option value="O4">O4</option>
        </select>
        
        <label for="permisoMtcCarreta${vehiculoId}_${carretaCount}">Permiso MTC (Carreta):</label>
        <select class="styled-select" id="permisoMtcCarreta${vehiculoId}_${carretaCount}" name="permisoMtcCarreta${vehiculoId}_${carretaCount}" required>
            <option value="CNG">CNG</option>
            <option value="CNG-MRP">CNG-MRP</option>
            <option value="MRP">MRP</option>
        </select><br><br>
        
        <input class="input" type="hidden" id="vehiculoNombreGeneradoCarreta${vehiculoId}_${carretaCount}" name="vehiculoNombreGeneradoCarreta${vehiculoId}_${carretaCount}" readonly>
        
        <label for="placaCarreta${vehiculoId}_${carretaCount}">Placa (Carreta) ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="placaCarreta${vehiculoId}_${carretaCount}" id="placaCarreta${vehiculoId}_${carretaCount}" required><br><br>
        
        <label for="ettCarreta${vehiculoId}_${carretaCount}">ETT (Carreta) ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="ettCarreta${vehiculoId}_${carretaCount}" id="ettCarreta${vehiculoId}_${carretaCount}" required><br><br>

        <label for="habilitacionCarreta${vehiculoId}_${carretaCount}">HABILITACION (Carreta) ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="habilitacionCarreta${vehiculoId}_${carretaCount}" id="habilitacionCarreta${vehiculoId}_${carretaCount}" required><br><br>
        
        <label for="itvCarreta${vehiculoId}_${carretaCount}">ITV (Carreta) ${vehiculoId}.${carretaCount}:</label>
        <input class="input" type="text" name="itvCarreta${vehiculoId}_${carretaCount}" id="itvCarreta${vehiculoId}_${carretaCount}" required><br><br>
    `;
    
    carretaSection.innerHTML = carretaHTML;
    carretaContainer.appendChild(carretaSection);

    const tipoVehiculoSelect = document.getElementById(`tipoCarreta${vehiculoId}_${carretaCount}`);
    const categoriaSelect = document.getElementById(`categoriaCarreta${vehiculoId}_${carretaCount}`);
    const permisoMtcSelectCarreta = document.getElementById(`permisoMtcCarreta${vehiculoId}_${carretaCount}`); 
    const vehiculoNombreGeneradoInput = document.getElementById(`vehiculoNombreGeneradoCarreta${vehiculoId}_${carretaCount}`);

    function updateNombreGenerado() {
        if (tipoVehiculoSelect && categoriaSelect && permisoMtcSelectCarreta && vehiculoNombreGeneradoInput) {
            vehiculoNombreGeneradoInput.value = `${tipoVehiculoSelect.value} (${categoriaSelect.value}) (${permisoMtcSelectCarreta.value})`; 
        }
    }
    if (tipoVehiculoSelect) tipoVehiculoSelect.addEventListener('change', updateNombreGenerado);
    if (categoriaSelect) categoriaSelect.addEventListener('change', updateNombreGenerado);
    if (permisoMtcSelectCarreta) permisoMtcSelectCarreta.addEventListener('change', updateNombreGenerado); 
    updateNombreGenerado();
}


function removeCarreta(button, vehiculoId) {
    var carretaContainer = document.getElementById(`carretaContainer${vehiculoId}`);
    if (carretaContainer && carretaContainer.lastChild && carretaContainer.lastChild.classList.contains('carreta-section')) {
        carretaContainer.removeChild(carretaContainer.lastChild);
    }
}

function addCarretaInternacional(button, vehiculoId) {
    const carretaIntContainer = document.getElementById(`carretaInternacionalContainer${vehiculoId}`);
    if (!carretaIntContainer) {
        console.error(`Contenedor carretaInternacionalContainer${vehiculoId} no encontrado.`);
        return;
    }
    const carretaIntCount = carretaIntContainer.querySelectorAll('.carreta-internacional-section').length + 1;
    const carretaIntSection = document.createElement('div');
    carretaIntSection.classList.add('carreta-internacional-section');
    carretaIntSection.id = `carretaIntEsp${vehiculoId}_${carretaIntCount}`; 

    carretaIntSection.innerHTML = `
        <h3>Carreta Internacional ${vehiculoId}.${carretaIntCount}</h3>
        
        <label for="tipoCarretaIntEsp${vehiculoId}_${carretaIntCount}">Tipo Carreta (Int.):</label>
        <select class="styled-select" id="tipoCarretaIntEsp${vehiculoId}_${carretaIntCount}" name="tipoCarretaIntEsp${vehiculoId}_${carretaIntCount}" required>
            <option value="SEMIRREMOLQUE">SEMIRREMOLQUE</option>
            <option value="CISTERNA">CISTERNA</option>
            <option value="FRIGORIFICO">FRIGORÍFICO</option>
        </select>

        <label for="categoriaCarretaIntEsp${vehiculoId}_${carretaIntCount}">Categoría Carreta (Int.):</label>
        <select class="styled-select" id="categoriaCarretaIntEsp${vehiculoId}_${carretaIntCount}" name="categoriaCarretaIntEsp${vehiculoId}_${carretaIntCount}" required>
            <option value="N1">N1</option>
            <option value="N2">N2</option>
            <option value="O2">O2</option>
            <option value="O3">O3</option>
            <option value="O4">O4</option>
        </select>

        <label for="nacionalidadCarretaIntEsp${vehiculoId}_${carretaIntCount}">Nacionalidad Carreta (Int.):</label>
        <select class="styled-select" id="nacionalidadCarretaIntEsp${vehiculoId}_${carretaIntCount}" name="nacionalidadCarretaIntEsp${vehiculoId}_${carretaIntCount}" required>
            <option value="ARGENTINO">ARGENTINO</option>
            <option value="BOLIVIANO">BOLIVIANO</option>
            <option value="BRASILEÑO">BRASILEÑO</option> 
            <option value="CHILENO">CHILENO</option>
            <option value="COLOMBIANO">COLOMBIANO</option>
            <option value="ECUATORIANO">ECUATORIANO</option> 
        </select><br><br>

        <input type="hidden" id="descripcionFullCarretaIntEsp${vehiculoId}_${carretaIntCount}" name="descripcionFullCarretaIntEsp${vehiculoId}_${carretaIntCount}">
        
        <label for="placaCarretaIntEsp${vehiculoId}_${carretaIntCount}">Placa (Carreta Int.) ${vehiculoId}.${carretaIntCount}:</label>
        <input class="input" type="text" name="placaCarretaIntEsp${vehiculoId}_${carretaIntCount}" id="placaCarretaIntEsp${vehiculoId}_${carretaIntCount}" required><br><br>
        
        <label for="ettCarretaIntEsp${vehiculoId}_${carretaIntCount}">ETT (Carreta Int.) ${vehiculoId}.${carretaIntCount}:</label>
        <input class="input" type="text" name="ettCarretaIntEsp${vehiculoId}_${carretaIntCount}" id="ettCarretaIntEsp${vehiculoId}_${carretaIntCount}" required><br><br>
    `;
    carretaIntContainer.appendChild(carretaIntSection);

    const tipoSelect = document.getElementById(`tipoCarretaIntEsp${vehiculoId}_${carretaIntCount}`);
    const categoriaSelect = document.getElementById(`categoriaCarretaIntEsp${vehiculoId}_${carretaIntCount}`);
    const nacionalidadSelect = document.getElementById(`nacionalidadCarretaIntEsp${vehiculoId}_${carretaIntCount}`);
    const descripcionInput = document.getElementById(`descripcionFullCarretaIntEsp${vehiculoId}_${carretaIntCount}`);

    function updateFullDescripcionCarretaIntEsp() {
        if (tipoSelect && categoriaSelect && nacionalidadSelect && descripcionInput) {
            descripcionInput.value = `${tipoSelect.value} (${categoriaSelect.value}) (${nacionalidadSelect.value})`;
        }
    }
    if (tipoSelect) tipoSelect.addEventListener('change', updateFullDescripcionCarretaIntEsp);
    if (categoriaSelect) categoriaSelect.addEventListener('change', updateFullDescripcionCarretaIntEsp);
    if (nacionalidadSelect) nacionalidadSelect.addEventListener('change', updateFullDescripcionCarretaIntEsp);
    updateFullDescripcionCarretaIntEsp(); 
}

function removeCarretaInternacional(button, vehiculoId) {
    var carretaIntContainer = document.getElementById(`carretaInternacionalContainer${vehiculoId}`);
    if (carretaIntContainer && carretaIntContainer.lastChild && carretaIntContainer.lastChild.classList.contains('carreta-internacional-section')) {
        carretaIntContainer.removeChild(carretaIntContainer.lastChild);
    }
}


function addConductor(button, vehiculoId) {
    const conductorContainer = document.getElementById(`conductorContainer${vehiculoId}`);
    if (!conductorContainer) return; 
    var conductorCount = conductorContainer.querySelectorAll('.conductor-section').length + 1;
    var conductorSection = document.createElement('div');
    conductorSection.classList.add('conductor-section');
    conductorSection.id = `conductor${vehiculoId}_${conductorCount}`;
    conductorSection.innerHTML = `
        <h3>Conductor ${vehiculoId}.${conductorCount}</h3>
        <label for="conductorNombre${vehiculoId}_${conductorCount}">CONDUCTOR ${vehiculoId}.${conductorCount}:</label>
        <input class="input" type="text" id="conductorNombre${vehiculoId}_${conductorCount}" name="conductorNombre${vehiculoId}_${conductorCount}" required><br><br>
        <label for="licencia${vehiculoId}_${conductorCount}">Licencia de conducir ${vehiculoId}.${conductorCount}:</label>
        <input class="input" type="text" id="licencia${vehiculoId}_${conductorCount}" name="licencia${vehiculoId}_${conductorCount}" required><br><br>
        <label for="clase_categoria${vehiculoId}_${conductorCount}">Clase y categoría ${vehiculoId}.${conductorCount}:</label>
        <input class="input" type="text" id="clase_categoria${vehiculoId}_${conductorCount}" name="clase_categoria${vehiculoId}_${conductorCount}" required><br><br>
        <label for="vigencia${vehiculoId}_${conductorCount}">Vigencia ${vehiculoId}.${conductorCount}:</label>
        <input class="input" type="text" id="vigencia${vehiculoId}_${conductorCount}" name="vigencia${vehiculoId}_${conductorCount}" required><br><br>
    `;
    conductorContainer.appendChild(conductorSection);
}

function removeConductor(button, vehiculoId) {
    var conductorContainer = document.getElementById(`conductorContainer${vehiculoId}`);
    if (conductorContainer && conductorContainer.lastChild && conductorContainer.lastChild.classList.contains('conductor-section')) {
        conductorContainer.removeChild(conductorContainer.lastChild);
    }
}

function removeVehicle(button) {
    var vehicleSection = button.closest('.vehicle-section');
    if (vehicleSection) {
        vehicleSection.remove();
        actualizarNumeracion();
    }
}

function actualizarNumeracion() {
    const vehiculos = document.querySelectorAll('.vehicle-section');
    let nuevoContadorVehiculos = 0;

    vehiculos.forEach((vehiculo, index) => {
        nuevoContadorVehiculos++;
        const nuevoNumeroVehiculo = nuevoContadorVehiculos;
        const idOriginal = vehiculo.id; 
        const antiguoNumeroVehiculoMatch = idOriginal.match(/\d+$/);
        if (!antiguoNumeroVehiculoMatch) return; 
        const antiguoNumeroVehiculo = parseInt(antiguoNumeroVehiculoMatch[0]);

        vehiculo.id = `vehiculo${nuevoNumeroVehiculo}`;

        const heading = vehiculo.querySelector('h3, h4');
        if (heading) {
            heading.textContent = heading.textContent.replace(
                new RegExp(`(Vehículo (de Mercancías |de Pasajeros |Particular |Internacional )?)${antiguoNumeroVehiculo}`),
                `$1${nuevoNumeroVehiculo}`
            );
        }
        
        const elementosParaActualizar = vehiculo.querySelectorAll('input, select, textarea, label, div[id^="carretaContainer"], div[id^="conductorContainer"], div[id^="carretaInternacionalContainer"]');
        elementosParaActualizar.forEach(el => {
            const esCarretaContNormal = (el.id && el.id.startsWith('carretaContainer'));
            const esCarretaContInt = (el.id && el.id.startsWith('carretaInternacionalContainer'));
            const esConductorCont = (el.id && el.id.startsWith('conductorContainer'));
            const esInputDescVehInt = (el.id && el.id.startsWith('descripcionFullVehInt'));

            if (el.tagName === 'LABEL' && el.htmlFor) {
                el.htmlFor = el.htmlFor.replace(new RegExp(`([a-zA-Z]+(?:Int|IntEsp|VehInt)?)${antiguoNumeroVehiculo}(_\\d+)?$`), `$1${nuevoNumeroVehiculo}$2`);
                el.textContent = el.textContent.replace(new RegExp(`(${antiguoNumeroVehiculo})(:?)$`), `${nuevoNumeroVehiculo}$2`);
                el.textContent = el.textContent.replace(new RegExp(`(\\D+)(${antiguoNumeroVehiculo})$`), `$1${nuevoNumeroVehiculo}`);
            }
            if (el.id) {
                if (esCarretaContNormal) el.id = `carretaContainer${nuevoNumeroVehiculo}`;
                else if (esCarretaContInt) el.id = `carretaInternacionalContainer${nuevoNumeroVehiculo}`;
                else if (esConductorCont) el.id = `conductorContainer${nuevoNumeroVehiculo}`;
                else if (esInputDescVehInt) el.id = `descripcionFullVehInt${nuevoNumeroVehiculo}`;
                else el.id = el.id.replace(new RegExp(`([a-zA-Z]+(?:Int|IntEsp|VehInt)?)${antiguoNumeroVehiculo}(_\\d+)?$`), `$1${nuevoNumeroVehiculo}$2`);
            }
            if (el.name) {
                 if (esInputDescVehInt) el.name = `descripcionFullVehInt${nuevoNumeroVehiculo}`;
                else el.name = el.name.replace(new RegExp(`([a-zA-Z]+(?:Int|IntEsp|VehInt)?)${antiguoNumeroVehiculo}(_\\d+)?$`), `$1${nuevoNumeroVehiculo}$2`);
            }
        });
        
        const botonesConParams = vehiculo.querySelectorAll('button[onclick*="Carreta"], input[onclick*="Carreta"], input[onclick*="Conductor"], input[onclick*="CarretaInternacional"]');
        botonesConParams.forEach(boton => {
            let onclickAttr = boton.getAttribute('onclick');
            if (onclickAttr) {
                onclickAttr = onclickAttr.replace(
                    new RegExp(`(addCarreta\\(this, |removeCarreta\\(this, |addCarretaInternacional\\(this, |removeCarretaInternacional\\(this, |addConductor\\(this, |removeConductor\\(this, )${antiguoNumeroVehiculo}(, ['"](mercancias|internacional)['"])?\\)`),
                    `$1${nuevoNumeroVehiculo}$2)` 
                );
                boton.setAttribute('onclick', onclickAttr);
            }
        });
        
        const esVehiculoInternacionalActual = !!vehiculo.querySelector(`#tipoPrincipalVehInt${nuevoNumeroVehiculo}`); 
        if (esVehiculoInternacionalActual) { 
            const tipoSelect = document.getElementById(`tipoPrincipalVehInt${nuevoNumeroVehiculo}`);
            const categoriaSelect = document.getElementById(`categoriaVehInt${nuevoNumeroVehiculo}`);
            const nacionalidadSelect = document.getElementById(`nacionalidadVehInt${nuevoNumeroVehiculo}`);
            const descripcionInput = document.getElementById(`descripcionFullVehInt${nuevoNumeroVehiculo}`);
            
            function updateFullDescripcionVehIntRenumerada() { 
                if (tipoSelect && categoriaSelect && nacionalidadSelect && descripcionInput) {
                    descripcionInput.value = `${tipoSelect.value} (${categoriaSelect.value}) (${nacionalidadSelect.value})`;
                }
            }
            if(tipoSelect) tipoSelect.onchange = updateFullDescripcionVehIntRenumerada; 
            if(categoriaSelect) categoriaSelect.onchange = updateFullDescripcionVehIntRenumerada;
            if(nacionalidadSelect) nacionalidadSelect.onchange = updateFullDescripcionVehIntRenumerada;
        }

        const carretaContainer = vehiculo.querySelector(`div[id="carretaContainer${nuevoNumeroVehiculo}"]`);
        if (carretaContainer) {
            renumerarSubSecciones(carretaContainer, '.carreta-section', 'carreta', nuevoNumeroVehiculo, antiguoNumeroVehiculo, false); 
        }
        const carretaIntContainer = vehiculo.querySelector(`div[id="carretaInternacionalContainer${nuevoNumeroVehiculo}"]`);
        if (carretaIntContainer) {
            renumerarSubSecciones(carretaIntContainer, '.carreta-internacional-section', 'carretaIntEsp', nuevoNumeroVehiculo, antiguoNumeroVehiculo, true); 
        }

        const conductorContainer = vehiculo.querySelector(`div[id="conductorContainer${nuevoNumeroVehiculo}"]`);
        if (conductorContainer) {
            renumerarSubSecciones(conductorContainer, '.conductor-section', 'conductor', nuevoNumeroVehiculo, antiguoNumeroVehiculo); 
        }
    });
    contadorVehiculos = nuevoContadorVehiculos;
}

function renumerarSubSecciones(container, selectorSubSeccion, prefijoIdSubSeccion, nuevoIdVehiculoPadre, antiguoIdVehiculoPadreOriginal, esCarretaInternacional = false) {
    const subSecciones = container.querySelectorAll(selectorSubSeccion);
    subSecciones.forEach((subSeccion, subIndex) => {
        const nuevoSubNumero = subIndex + 1;
        const nuevoIdCompletoSubSeccion = `${prefijoIdSubSeccion}${nuevoIdVehiculoPadre}_${nuevoSubNumero}`; 
        
        const idSubOriginal = subSeccion.id;
        const partesIdSubOriginal = idSubOriginal.match(new RegExp(`([a-zA-Z]+(?:IntEsp)?)(\\d+)_(\\d+)`)); 
        
        let idVehiculoOriginalEnSub = antiguoIdVehiculoPadreOriginal;
        let numSubOriginal = nuevoSubNumero; 
        let prefijoOriginalDetectado = prefijoIdSubSeccion;

        if (partesIdSubOriginal) {
            prefijoOriginalDetectado = partesIdSubOriginal[1];
            idVehiculoOriginalEnSub = parseInt(partesIdSubOriginal[2]); 
            numSubOriginal = parseInt(partesIdSubOriginal[3]);      
        }
        
        subSeccion.id = nuevoIdCompletoSubSeccion; 
        
        const subHeading = subSeccion.querySelector('h5');
        if (subHeading) {
             let tituloBase = prefijoIdSubSeccion.charAt(0).toUpperCase() + prefijoIdSubSeccion.slice(1).replace('IntEsp', ' Internacional');
            subHeading.textContent = subHeading.textContent.replace(
                new RegExp(`(${tituloBase.replace(/\s\(Internacional\)/, ' (Internacional)')}(\\s\\(Internacional\\))?\\s)${idVehiculoOriginalEnSub}\\.${numSubOriginal}`),
                `$1${nuevoIdVehiculoPadre}.${nuevoSubNumero}`
            );
        }
        
        const patronAntiguoBase = `${idVehiculoOriginalEnSub}_${numSubOriginal}`; 
        const patronNuevoBase = `${nuevoIdVehiculoPadre}_${nuevoSubNumero}`;   

        subSeccion.querySelectorAll('label, input, select').forEach(el => {
            const regexAntiguoSinPrefijo = new RegExp(patronAntiguoBase + '$');
            const reemplazoNuevoSinPrefijo = patronNuevoBase;

            if (el.htmlFor) {
                 el.htmlFor = el.htmlFor.replace(regexAntiguoSinPrefijo, reemplazoNuevoSinPrefijo);
            }
            if (el.id) {
                 el.id = el.id.replace(regexAntiguoSinPrefijo, reemplazoNuevoSinPrefijo);
            }
            if (el.name) {
                el.name = el.name.replace(regexAntiguoSinPrefijo, reemplazoNuevoSinPrefijo);
            }

            if (el.tagName === 'LABEL') {
                el.textContent = el.textContent.replace(
                    new RegExp(`(${idVehiculoOriginalEnSub}\\.${numSubOriginal})`), 
                    `${nuevoIdVehiculoPadre}.${nuevoSubNumero}` 
                );
            }
        });

        if (esCarretaInternacional) { 
            const tipoCarretaIntSelect = subSeccion.querySelector(`#tipoCarretaIntEsp${patronNuevoBase}`);
            const categoriaCarretaIntSelect = subSeccion.querySelector(`#categoriaCarretaIntEsp${patronNuevoBase}`);
            const nacionalidadCarretaIntSelect = subSeccion.querySelector(`#nacionalidadCarretaIntEsp${patronNuevoBase}`);
            const descripcionCarretaIntInput = subSeccion.querySelector(`#descripcionFullCarretaIntEsp${patronNuevoBase}`);

            function updateDescripcionCarretaInternacionalRenumerada() {
                if (tipoCarretaIntSelect && categoriaCarretaIntSelect && nacionalidadCarretaIntSelect && descripcionCarretaIntInput) {
                    descripcionCarretaIntInput.value = `${tipoCarretaIntSelect.value} (${categoriaCarretaIntSelect.value}) (${nacionalidadCarretaIntSelect.value})`;
                }
            }
            if (tipoCarretaIntSelect) tipoCarretaIntSelect.onchange = updateDescripcionCarretaInternacionalRenumerada;
            if (categoriaCarretaIntSelect) categoriaCarretaIntSelect.onchange = updateDescripcionCarretaInternacionalRenumerada;
            if (nacionalidadCarretaIntSelect) nacionalidadCarretaIntSelect.onchange = updateDescripcionCarretaInternacionalRenumerada;
        } else if (prefijoIdSubSeccion === 'carreta') {
            const tipoVehiculoSelect = subSeccion.querySelector(`#tipoCarreta${patronNuevoBase}`);
            const categoriaSelect = subSeccion.querySelector(`#categoriaCarreta${patronNuevoBase}`);
            const permisoMtcSelectCarreta = subSeccion.querySelector(`#permisoMtcCarreta${patronNuevoBase}`);
            const vehiculoNombreGeneradoInput = subSeccion.querySelector(`#vehiculoNombreGeneradoCarreta${patronNuevoBase}`);
            
            if (tipoVehiculoSelect && categoriaSelect && permisoMtcSelectCarreta && vehiculoNombreGeneradoInput) { 
                function updateNombreGeneradoRenumerada() {
                    if (tipoVehiculoSelect && categoriaSelect && permisoMtcSelectCarreta && vehiculoNombreGeneradoInput) { 
                         vehiculoNombreGeneradoInput.value = `${tipoVehiculoSelect.value} (${categoriaSelect.value}) (${permisoMtcSelectCarreta.value})`;
                    }
                }
                tipoVehiculoSelect.onchange = updateNombreGeneradoRenumerada;
                categoriaSelect.onchange = updateNombreGeneradoRenumerada;
                permisoMtcSelectCarreta.onchange = updateNombreGeneradoRenumerada;
            }
        }
    });
}


function agregarFallecido() {
    const fallecidosDiv = document.getElementById('fallecidos');
    if (!fallecidosDiv) return;
    if (!fallecidosDiv.querySelector('.fallecido-item')) {
        const nuevoFallecido = document.createElement('div');
        nuevoFallecido.className = 'fallecido-item';
        nuevoFallecido.innerHTML = `
            <textarea class="textarea" name="nombresFallecidos" rows="4" cols="50" placeholder="Nombre Completo"></textarea>
            <button type="button" onclick="eliminarFallecido(this)">Eliminar Nombre</button>
        `; 
        fallecidosDiv.appendChild(nuevoFallecido);
    } else {
        alert("Ya hay un campo para nombres de fallecidos. Edítelo o elimínelo primero.");
    }
}

function eliminarFallecido(button) {
    const fallecidoItem = button.closest('.fallecido-item');
    if (fallecidoItem) fallecidoItem.remove();
}

function agregarHerido() {
    const heridosDiv = document.getElementById('heridos');
    if (!heridosDiv) return;
    if (!heridosDiv.querySelector('.herido-item')) {
        const nuevoHerido = document.createElement('div');
        nuevoHerido.className = 'herido-item';
        nuevoHerido.innerHTML = `
            <textarea class="textarea" name="nombresHeridos" rows="4" cols="50" placeholder="Nombre Completo"></textarea>
            <button type="button" onclick="eliminarHerido(this)">Eliminar Nombre</button>
        `; 
        heridosDiv.appendChild(nuevoHerido);
    } else {
        alert("Ya hay un campo para nombres de heridos. Edítelo o elimínelo primero.");
    }
}

function eliminarHerido(button) {
    const heridoItem = button.closest('.herido-item');
    if (heridoItem) heridoItem.remove();
}

function addComisaria() {
    const container = document.getElementById('comisariaContainer');
    const btnAgregarComisaria = document.getElementById('comisaria');
    if (!container || !btnAgregarComisaria) return;

    if (container.querySelector('.comisaria-section')) {
        alert('Ya se han agregado los datos para el oficio. Puede editarlos o eliminarlos para agregar de nuevo.');
        return;
    }
    const comisariaSection = document.createElement('div');
    comisariaSection.classList.add('comisaria-section');
    comisariaSection.innerHTML = `
        <h3>DATOS PARA EL OFICIO</h3>
        <label for="comisariaNombreInput">Comisaria:</label>
        <input class="input" type="text" id="comisariaNombreInput" name="comisariaNombreInput" required><br><br>
        <label for="comisariaEncargadoInput">Encargado:</label>
        <input class="input" type="text" id="comisariaEncargadoInput" name="comisariaEncargadoInput" required><br><br>
        <label for="comisariaCorreoInput">Correo:</label>
        <input class="input" type="email" id="comisariaCorreoInput" name="comisariaCorreoInput" required><br><br>
        <label for="comisariaDireccionInput">Dirección:</label>
        <input class="input" type="text" id="comisariaDireccionInput" name="comisariaDireccionInput" required><br><br>
        <label for="comisariaTelefonoInput">Telefono:</label>
        <input class="input" type="tel" id="comisariaTelefonoInput" name="comisariaTelefonoInput" required><br><br>
        <input type="button" value="Eliminar Datos de Oficio" onclick="removeComisaria(this)"><br><br>
    `;
    container.appendChild(comisariaSection);
    btnAgregarComisaria.disabled = true;
}

function removeComisaria(button) {
    const comisariaSection = button.closest('.comisaria-section');
    const btnAgregarComisaria = document.getElementById('comisaria');
    if (comisariaSection) {
        comisariaSection.remove();
        if (btnAgregarComisaria) btnAgregarComisaria.disabled = false;
    }
}

function addFuente() {
    contadorFuentesActual++;
    const idFuenteUnico = contadorFuentes + 1;
    contadorFuentes = idFuenteUnico;
    const fuenteDiv = document.createElement('div');
    fuenteDiv.classList.add('fuente-section');
    fuenteDiv.id = `fuente${idFuenteUnico}`;
    fuenteDiv.innerHTML = `
        <h3>FUENTE DE INFORMACIÓN ${contadorFuentesActual}</h3>
        <label for="fuenteNombre${idFuenteUnico}">Fuente ${contadorFuentesActual}:</label>
        <input class="input" type="text" id="fuenteNombre${idFuenteUnico}" name="fuenteNombre${idFuenteUnico}" required><br><br>
        <label for="telefonoFuente${idFuenteUnico}">Telefono:</label>
        <input class="input" type="tel" id="telefonoFuente${idFuenteUnico}" name="telefonoFuente${idFuenteUnico}" required><br><br>
        <label for="num_llamadas${idFuenteUnico}">Num. Llamadas:</label>
        <input class="input" type="number" id="num_llamadas${idFuenteUnico}" name="num_llamadas${idFuenteUnico}" required><br><br>
        <input type="button" value="Eliminar Fuente" onclick="removeFuente(this, ${idFuenteUnico})"><br><br>
    `;
    const fuenteContainer = document.getElementById('fuenteContainer');
    if (fuenteContainer) fuenteContainer.appendChild(fuenteDiv);
}

function removeFuente(button, fuenteIdUnico) {
    const fuenteSection = document.getElementById(`fuente${fuenteIdUnico}`);
    if (fuenteSection) {
        fuenteSection.remove();
        const fuentesRestantes = document.querySelectorAll('#fuenteContainer .fuente-section');
        fuentesRestantes.forEach((fuenteEl, index) => {
            const nuevoNumeroVisual = index + 1;
            const heading = fuenteEl.querySelector('h3');
            if (heading) heading.textContent = `FUENTE DE INFORMACIÓN ${nuevoNumeroVisual}`;
            const labelFuente = fuenteEl.querySelector('label[for^="fuenteNombre"]');
            if (labelFuente) labelFuente.textContent = `Fuente ${nuevoNumeroVisual}:`;
        });
        contadorFuentesActual = fuentesRestantes.length;
    }
}

if (document.getElementById('fechaConocimiento')) { 
    document.getElementById('fechaConocimiento').addEventListener('change', validarFechas);
    document.getElementById('horaConocimiento').addEventListener('change', validarFechas);
    document.getElementById('fechaAccidente').addEventListener('change', validarFechas);
    document.getElementById('horaAccidente').addEventListener('change', validarFechas);
}

function validarFechas() {
    const fechaConocimientoEl = document.getElementById('fechaConocimiento');
    const horaConocimientoEl = document.getElementById('horaConocimiento');
    const fechaAccidenteEl = document.getElementById('fechaAccidente');
    const horaAccidenteEl = document.getElementById('horaAccidente');

    if (!fechaConocimientoEl || !horaConocimientoEl || !fechaAccidenteEl || !horaAccidenteEl) return;

    const fechaConocimiento = fechaConocimientoEl.value;
    const horaConocimiento = horaConocimientoEl.value;
    const fechaAccidente = fechaAccidenteEl.value;
    const horaAccidente = horaAccidenteEl.value;

    if (fechaConocimiento && horaConocimiento && fechaAccidente && horaAccidente) {
        const dateConocimiento = new Date(`${fechaConocimiento}T${horaConocimiento}`);
        const dateAccidente = new Date(`${fechaAccidente}T${horaAccidente}`);
        if (dateConocimiento < dateAccidente) {
            alert('La fecha y hora del conocimiento no pueden ser antes que la fecha y hora del accidente.');
        }
    }
}

function enviarAlerta() {
    try { 
        validarFechas();

        const getElValue = id => document.getElementById(id) ? document.getElementById(id).value : "";

        const numFallecidos = getElValue('numFallecidos');
        const numHeridos = getElValue('numHeridos');
        const tipoAlerta = getElValue("tipoAlerta");
        const numeroAlerta = getElValue("numeroAlerta");
        const colorAlerta = getElValue("colorAlerta");
        const versionAlerta = getElValue("versionAlerta");
        const consecuenciaAlerta = getElValue("consecuenciaAlerta").toUpperCase();
        const modalidad = getElValue("modalidad");
        const fechaConocimiento = getElValue("fechaConocimiento");
        const horaConocimiento = getElValue("horaConocimiento");
        const fuenteConocimiento = getElValue("fuenteConocimiento");
        const fechaAccidente = getElValue("fechaAccidente");
        const fuenteAccidente = getElValue("fuenteAccidente");
        const horaAccidente = getElValue("horaAccidente");

        let fechaConocimientoFormatted = "";
        if (fechaConocimiento) {
            const fechaPartes = fechaConocimiento.split('-');
            if (fechaPartes.length === 3) fechaConocimientoFormatted = `${fechaPartes[2]}/${fechaPartes[1]}/${fechaPartes[0].slice(-2)}`;
        }
        let fechaAccidenteFormatted = "";
        if (fechaAccidente) {
            const fechaAccidentePartes = fechaAccidente.split('-');
            if (fechaAccidentePartes.length === 3) fechaAccidenteFormatted = `${fechaAccidentePartes[2]}/${fechaAccidentePartes[1]}/${fechaAccidentePartes[0].slice(-2)}`;
        }

        const coordenadas = getElValue("coordenadas");
        const km = getElValue("km");
        const codigoRuta = getElValue("codigoRuta");
        const distrito = getElValue("distrito");
        const provincia = getElValue("provincia");
        const region = getElValue("region");
        const link = getElValue("link");
        const detalle = getElValue("detalle");
        const nombreOperador = getElValue("nombreOperador");
        const cgm = getElValue("cgm");
        const colorEmoji = colorAlerta === "rojo" ? "🔴" : colorAlerta === "naranja" ? "🟠" : "🟡";

        let fallecidosOutput = "";
        const fallecidosTextarea = document.querySelector('#fallecidos .fallecido-item textarea[name="nombresFallecidos"]');
        if (fallecidosTextarea && fallecidosTextarea.value.trim() !== "") {
            fallecidosOutput = fallecidosTextarea.value.trim();
        }

        let heridosOutput = "";
        const heridosTextarea = document.querySelector('#heridos .herido-item textarea[name="nombresHeridos"]');
        if (heridosTextarea && heridosTextarea.value.trim() !== "") {
            heridosOutput = heridosTextarea.value.trim();
        }

        let vehiculosOutput = "";
        const vehiculosElements = document.querySelectorAll('.vehicle-section');
        vehiculosElements.forEach((vehiculo, index) => {
            if (index > 0 && vehiculosOutput.trim() !== "") {
                vehiculosOutput += "*\n";
            }
            const numeroVehiculoActual = index + 1;
            let tipoVehiculoValor = "", categoriaValor = "", permisoMTCValor = "";

            const tipoVehiculoSelectMerc = vehiculo.querySelector(`#tipoVehiculo${numeroVehiculoActual}`);
            const tipoVehiculoSelectPas = vehiculo.querySelector(`#tipoVehiculoPasajeros${numeroVehiculoActual}`);
            const tipoVehiculoSelectPart = vehiculo.querySelector(`#tipoVehiculoParticular${numeroVehiculoActual}`);
            const tipoVehiculoSelectIntPrincipal = vehiculo.querySelector(`#tipoPrincipalVehInt${numeroVehiculoActual}`); 
            
            const categoriaSelect = vehiculo.querySelector(`#categoria${numeroVehiculoActual}`); 
            const permisoMTCSelect = vehiculo.querySelector(`#permisomtc${numeroVehiculoActual}`); 

            if (tipoVehiculoSelectMerc) {
                tipoVehiculoValor = tipoVehiculoSelectMerc.value;
                if (categoriaSelect) categoriaValor = categoriaSelect.value;
                if (permisoMTCSelect) permisoMTCValor = permisoMTCSelect.value;
                vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}:* ${tipoVehiculoValor}${categoriaValor ? `(${categoriaValor})` : ''}${permisoMTCValor ? `(${permisoMTCValor})` : ''}\n`;
            } else if (tipoVehiculoSelectPas) {
                tipoVehiculoValor = tipoVehiculoSelectPas.value;
                if (categoriaSelect) categoriaValor = categoriaSelect.value;
                if (permisoMTCSelect) permisoMTCValor = permisoMTCSelect.value;
                vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}:* ${tipoVehiculoValor}${categoriaValor ? `(${categoriaValor})` : ''}${permisoMTCValor ? `(${permisoMTCValor})` : ''}\n`;
            } else if (tipoVehiculoSelectPart) {
                tipoVehiculoValor = tipoVehiculoSelectPart.value;
                if (categoriaSelect) categoriaValor = categoriaSelect.value; 
                vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}:* ${tipoVehiculoValor}${categoriaValor ? `(${categoriaValor})` : ''}\n`;
            } else if (tipoVehiculoSelectIntPrincipal) { 
                const descripcionVehiculoPadreInput = vehiculo.querySelector(`#descripcionFullVehInt${numeroVehiculoActual}`);
                if (descripcionVehiculoPadreInput && descripcionVehiculoPadreInput.value) {
                    vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}:* ${descripcionVehiculoPadreInput.value}\n`;
                } else { 
                    const tipoVal = tipoVehiculoSelectIntPrincipal.value;
                    const catVal = vehiculo.querySelector(`#categoriaVehInt${numeroVehiculoActual}`)?.value || '';
                    const nacVal = vehiculo.querySelector(`#nacionalidadVehInt${numeroVehiculoActual}`)?.value || '';
                    vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}:* ${tipoVal} (${catVal})(${nacVal}) (Descripción auto-generada)\n`;
                }
            }

            let placaInput, ettInput, sentidoInput;
            if (tipoVehiculoSelectIntPrincipal) { 
                placaInput = vehiculo.querySelector(`#placaVehInt${numeroVehiculoActual}`);
                ettInput = vehiculo.querySelector(`#ettVehInt${numeroVehiculoActual}`);
                sentidoInput = vehiculo.querySelector(`#sentidoVehInt${numeroVehiculoActual}`);
            } else { 
                placaInput = vehiculo.querySelector(`#placa${numeroVehiculoActual}`) || vehiculo.querySelector(`#PLACA${numeroVehiculoActual}`);
                ettInput = vehiculo.querySelector(`#ett${numeroVehiculoActual}`) || vehiculo.querySelector(`#ETT${numeroVehiculoActual}`);
                sentidoInput = vehiculo.querySelector(`#sentido${numeroVehiculoActual}`) || vehiculo.querySelector(`#SENTIDO${numeroVehiculoActual}`);
            }
            
            if (placaInput && placaInput.value.trim()) vehiculosOutput += `**PLACA ${numeroVehiculoActual}:* ${placaInput.value.trim()}\n`;
            if (ettInput && ettInput.value.trim()) vehiculosOutput += `**ETT ${numeroVehiculoActual}:* ${ettInput.value.trim()}\n`;
            
            const otrosInputsVehiculo = vehiculo.querySelectorAll(':scope > input[type="text"]');
            otrosInputsVehiculo.forEach(input => {
                const id = input.id;
                if (input.value.trim() &&
                    !id.startsWith('placa') && !id.startsWith('PLACA') && !id.startsWith('placaVehInt') &&
                    !id.startsWith('ett') && !id.startsWith('ETT') && !id.startsWith('ettVehInt') &&
                    !id.startsWith('sentido') && !id.startsWith('SENTIDO') && !id.startsWith('sentidoVehInt') &&
                    !id.startsWith('descripcionFullVehInt') &&
                    !id.includes('Carreta') && !id.includes('Conductor')) {
                    
                    const nombreBaseMatch = input.name.match(/^([a-zA-Z_]+)/);
                    if (nombreBaseMatch) {
                        const nombreBase = nombreBaseMatch[1].toUpperCase();
                        vehiculosOutput += `**${nombreBase}${numeroVehiculoActual}:* ${input.value.trim()}\n`;
                    }
                }
            });
            if (sentidoInput && sentidoInput.value.trim()) vehiculosOutput += `**SENTIDO ${numeroVehiculoActual}:* ${sentidoInput.value.trim()}\n`;

            const carretasMercanciasElements = vehiculo.querySelectorAll(`#carretaContainer${numeroVehiculoActual} .carreta-section`);
            carretasMercanciasElements.forEach((carreta, idxCarreta) => {
                const numCarretaActual = idxCarreta + 1;
                const idBaseCarreta = `${numeroVehiculoActual}_${numCarretaActual}`;
                
                const vehiculoNombreGeneradoInput = carreta.querySelector(`#vehiculoNombreGeneradoCarreta${idBaseCarreta}`);
                if (vehiculoNombreGeneradoInput && vehiculoNombreGeneradoInput.value) {
                    vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}.${numCarretaActual}:* ${vehiculoNombreGeneradoInput.value}\n`;
                }
                const placaCarretaInput = carreta.querySelector(`#placaCarreta${idBaseCarreta}`);
                if (placaCarretaInput && placaCarretaInput.value) {
                    vehiculosOutput += `**PLACA ${numeroVehiculoActual}.${numCarretaActual}:* ${placaCarretaInput.value}\n`;
                }
                const ettCarretaInput = carreta.querySelector(`#ettCarreta${idBaseCarreta}`);
                if (ettCarretaInput && ettCarretaInput.value) {
                    vehiculosOutput += `**ETT ${numeroVehiculoActual}.${numCarretaActual}:* ${ettCarretaInput.value}\n`;
                }
                const habilitacionCarretaInput = carreta.querySelector(`#habilitacionCarreta${idBaseCarreta}`);
                if (habilitacionCarretaInput && habilitacionCarretaInput.value) {
                    vehiculosOutput += `**HABILITACION ${numeroVehiculoActual}.${numCarretaActual}:* ${habilitacionCarretaInput.value}\n`;
                }
                const itvCarretaInput = carreta.querySelector(`#itvCarreta${idBaseCarreta}`);
                if (itvCarretaInput && itvCarretaInput.value) {
                    vehiculosOutput += `**ITV ${numeroVehiculoActual}.${numCarretaActual}:* ${itvCarretaInput.value}\n`;
                }
            });

            const carretasInternacionalesElements = vehiculo.querySelectorAll(`#carretaInternacionalContainer${numeroVehiculoActual} .carreta-internacional-section`);
            carretasInternacionalesElements.forEach((carretaInt, idxCarretaInt) => {
                const numCarretaIntActual = idxCarretaInt + 1;
                const idBaseCarretaInt = `${numeroVehiculoActual}_${numCarretaIntActual}`;
                
                const descripcionCarretaIntInput = carretaInt.querySelector(`#descripcionFullCarretaIntEsp${idBaseCarretaInt}`);
                if (descripcionCarretaIntInput && descripcionCarretaIntInput.value) {
                    vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}.${numCarretaIntActual}:* ${descripcionCarretaIntInput.value}\n`;
                } else {
                    vehiculosOutput += `**VEHÍCULO ${numeroVehiculoActual}.${numCarretaIntActual}:* (Descripción de carreta internacional no disponible)\n`;
                }

                const placaCarretaIntInput = carretaInt.querySelector(`#placaCarretaIntEsp${idBaseCarretaInt}`); 
                if (placaCarretaIntInput && placaCarretaIntInput.value) {
                    vehiculosOutput += `**PLACA ${numeroVehiculoActual}.${numCarretaIntActual}:* ${placaCarretaIntInput.value}\n`;
                }
                const ettCarretaIntInput = carretaInt.querySelector(`#ettCarretaIntEsp${idBaseCarretaInt}`); 
                if (ettCarretaIntInput && ettCarretaIntInput.value) {
                    vehiculosOutput += `**ETT ${numeroVehiculoActual}.${numCarretaIntActual}:* ${ettCarretaIntInput.value}\n`;
                }
            });

            const conductoresElements = vehiculo.querySelectorAll(`#conductorContainer${numeroVehiculoActual} .conductor-section`);
            conductoresElements.forEach((conductor, idxConductor) => {
                const numConductorActual = idxConductor + 1;
                const idBaseConductor = `${numeroVehiculoActual}_${numConductorActual}`;
                
                const nombreConductorInput = conductor.querySelector(`#conductorNombre${idBaseConductor}`);
                if (nombreConductorInput && nombreConductorInput.value) {
                    vehiculosOutput += `**CONDUCTOR ${numeroVehiculoActual}.${numConductorActual}:* ${nombreConductorInput.value}\n`;
                }
                const licenciaInput = conductor.querySelector(`#licencia${idBaseConductor}`);
                if (licenciaInput && licenciaInput.value) {
                    vehiculosOutput += `**LICENCIA ${numeroVehiculoActual}.${numConductorActual}:* ${licenciaInput.value}\n`;
                }
                const claseCategoriaInput = conductor.querySelector(`#clase_categoria${idBaseConductor}`);
                if (claseCategoriaInput && claseCategoriaInput.value) {
                    vehiculosOutput += `**CLASE Y CATEGORIA ${numeroVehiculoActual}.${numConductorActual}:* ${claseCategoriaInput.value}\n`;
                }
                const vigenciaInput = conductor.querySelector(`#vigencia${idBaseConductor}`);
                if (vigenciaInput && vigenciaInput.value) {
                    vehiculosOutput += `**VIGENCIA ${numeroVehiculoActual}.${numConductorActual}:* ${vigenciaInput.value}\n`;
                }
            });
        });

        let comisariasOutput = "";
        const comisariaSectionElement = document.querySelector('#comisariaContainer .comisaria-section');
        if (comisariaSectionElement) {
            comisariasOutput = "*\n**DATOS PARA EL OFICIO*\n";
            const getComisariaValue = name => comisariaSectionElement.querySelector(`input[name="${name}"]`) ? comisariaSectionElement.querySelector(`input[name="${name}"]`).value.trim() : "";
            const comisariaNombreVal = getComisariaValue("comisariaNombreInput");
            if (comisariaNombreVal) comisariasOutput += `**Comisaria:* ${comisariaNombreVal}\n`;
            const encargadoVal = getComisariaValue("comisariaEncargadoInput");
            if (encargadoVal) comisariasOutput += `**Encargado:* ${encargadoVal}\n`;
            const correoVal = getComisariaValue("comisariaCorreoInput");
            if (correoVal) comisariasOutput += `**Correo:* ${correoVal}\n`;
            const direccionVal = getComisariaValue("comisariaDireccionInput");
            if (direccionVal) comisariasOutput += `**Dirección:* ${direccionVal}\n`;
            const telefonoVal = getComisariaValue("comisariaTelefonoInput");
            if (telefonoVal) comisariasOutput += `**Telefono:* ${telefonoVal}\n`;
        }

        let fuentesOutput = "";
        const fuenteElements = document.querySelectorAll('#fuenteContainer .fuente-section');
        if (fuenteElements.length > 0) {
            fuentesOutput = "*\n";
            fuenteElements.forEach((fuenteEl, index) => {
                const numeroFuenteVisual = index + 1;
                const idFuenteUnico = fuenteEl.id.replace('fuente', '');
                fuentesOutput += `**FUENTE DE INFORMACIÓN ${numeroFuenteVisual}*\n`;
                const nombreFuente = fuenteEl.querySelector(`#fuenteNombre${idFuenteUnico}`) ? fuenteEl.querySelector(`#fuenteNombre${idFuenteUnico}`).value.trim() : "";
                if (nombreFuente) fuentesOutput += `**Fuente ${numeroFuenteVisual}:* ${nombreFuente}\n`;
                const telefonoFuente = fuenteEl.querySelector(`#telefonoFuente${idFuenteUnico}`) ? fuenteEl.querySelector(`#telefonoFuente${idFuenteUnico}`).value.trim() : "";
                if (telefonoFuente) fuentesOutput += `**Telefono ${numeroFuenteVisual}:* ${telefonoFuente}\n`;
                const numLlamadas = fuenteEl.querySelector(`#num_llamadas${idFuenteUnico}`) ? fuenteEl.querySelector(`#num_llamadas${idFuenteUnico}`).value.trim() : "";
                if (numLlamadas) fuentesOutput += `**Numero de Llamadas ${numeroFuenteVisual}:* ${numLlamadas}\n`;
                if (index < fuenteElements.length -1 && (nombreFuente || telefonoFuente || numLlamadas)) {
                     fuentesOutput += "\n"; 
                }
            });
        }

        const vehiculosContent = vehiculosOutput.trim();
        const comisariasContent = comisariasOutput.trim();
        const fuentesContent = fuentesOutput.trim();
        
        let finalMessage = `*${tipoAlerta} CGM ${numeroAlerta} REPORTE FINAL ${colorEmoji}*
**Versión:** *${versionAlerta}*
**Consecuencia:** ${consecuenciaAlerta}
**Fallecidos:**\t${numFallecidos}${fallecidosOutput ? `\n**Nombres:**\t${fallecidosOutput}` : ''}
**Heridos:**\t${numHeridos}${heridosOutput ? `\n**Nombres:**\t${heridosOutput}` : ''}
**Modalidad:** ${modalidad}
**Fecha conocimiento:**\t${fechaConocimientoFormatted}
**Hora conocimiento:** ${horaConocimiento}
**Fuente conocimiento:** ${fuenteConocimiento}
**Fecha accidente:** ${fechaAccidenteFormatted}
**Fuente accidente:** ${fuenteAccidente}
**Hora accidente:** ${horaAccidente}
**Coordenadas:** ${coordenadas}
**Ubicación:** "KM" ${km} DE LA VÍA NACIONAL CON *CÓDIGO* ${codigoRuta}, *DISTRITO* ${distrito}, *PROVINCIA* ${provincia}, *REGIÓN* ${region}
**Link:** ${link}`;

        if (vehiculosContent) {
            finalMessage += "\n*\n" + vehiculosContent;
        }

        finalMessage += "\n*\n" + `**Detalle:** ${detalle}`; 

        if (comisariasContent) {
            finalMessage += "\n" + comisariasContent;
        }

        if (fuentesContent) {
            if (!comisariasContent) {
                finalMessage += "\n" + fuentesContent;
            } else { 
                finalMessage += "\n" + fuentesContent;
            }
        }
        
        finalMessage += "\n*";

        finalMessage += `\n*Atte*\n*${nombreOperador}*
*Centro de Gestión y Monitoreo - ${cgm}*
*SUBGERENCIA DE SUPERVISIÓN ELECTRÓNICA*`;

        const resultadoEl = document.getElementById('resultado');
        if (resultadoEl) {
            resultadoEl.textContent = finalMessage.trim();
        } else {
            console.error("Elemento con ID 'resultado' no encontrado.");
        }

    } catch (error) {
        console.error("Error en enviarAlerta:", error);
        alert("Ocurrió un error al generar la alerta. Revise la consola para más detalles.");
        const resultadoEl = document.getElementById('resultado');
        if (resultadoEl) {
             resultadoEl.textContent = `Error: ${error.message}\nStack: ${error.stack}`;
        }
    }
}

function copiarContenido() {
    const resultadoEl = document.getElementById('resultado');
    if (!resultadoEl) {
        alert("Elemento resultado no encontrado.");
        return;
    }
    const resultado = resultadoEl.textContent;
    if (!resultado || resultado.trim() === "" || resultado.startsWith("Error:")) {
        alert("No hay contenido válido para copiar o hay un error previo.");
        return;
    }
    const textArea = document.createElement('textarea');
    textArea.value = resultado;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
        alert('La alerta final ha sido copiada al portapapeles.');
    } catch (err) {
        alert('Error al copiar el texto.');
        console.error('Error al copiar:', err);
    }
    document.body.removeChild(textArea);
}

function limpiarFormulario() {
    const form = document.querySelector('form');
    if (form) {
        form.reset(); 
    } else {
        document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input[type="time"], textarea, select').forEach(el => {
            if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else if (el.type === 'number' && (el.id === 'numFallecidos' || el.id === 'numHeridos')) el.value = '0'; 
            else el.value = '';
        });
    }

    const clearContainer = id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = '';
    };

    clearContainer('vehicleContainer');
    clearContainer('comisariaContainer');
    clearContainer('fuenteContainer');
    
    const fallecidosDiv = document.getElementById('fallecidos');
    if (fallecidosDiv) {
        const itemFallecido = fallecidosDiv.querySelector('.fallecido-item');
        if (itemFallecido) {
            itemFallecido.remove(); 
        }
        const numFallecidosInput = fallecidosDiv.querySelector('#numFallecidos');
        if (numFallecidosInput) numFallecidosInput.value = '0';
    }

    const heridosDiv = document.getElementById('heridos');
    if (heridosDiv) {
        const itemHerido = heridosDiv.querySelector('.herido-item');
        if (itemHerido) {
            itemHerido.remove(); 
        }
        const numHeridosInput = heridosDiv.querySelector('#numHeridos');
        if (numHeridosInput) numHeridosInput.value = '0';
    }

    const resultadoEl = document.getElementById('resultado');
    if (resultadoEl) resultadoEl.textContent = '';

    contadorVehiculos = 0;
    contadorFuentes = 0;
    contadorFuentesActual = 0;

    const btnAgregarComisaria = document.getElementById('comisaria');
    if (btnAgregarComisaria) btnAgregarComisaria.disabled = false;

    const setDefaultValue = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.value = value;
    };
    setDefaultValue('versionAlerta', "1");
    setDefaultValue('numFallecidos', "0"); 
    setDefaultValue('numHeridos', "0");
    setDefaultValue('fuenteConocimiento', "FACEBOOK- ");
    setDefaultValue('fuenteAccidente', "TOMA CONOCIMIENTO PNP ");
    setDefaultValue('detalle', "A CONSECUENCIA DEL ACCIDENTE SE REPORTARON DAÑOS MATERIALES, LOS MISMOS QUE SE ENCUENTRAN SUJETO A PERITAJE TÉCNICO POLICIAL. LAS INVESTIGACIONES DE LAS CAUSAS DEL ACCIDENTE ESTÁN A CARGO DE LA CPNP.");
    setDefaultValue('tipoAlerta', "ALERTA DE ACCIDENTE"); 
    setDefaultValue('colorAlerta', "rojo");
    setDefaultValue('consecuenciaAlerta', "con consecuencias");
    setDefaultValue('cgm', " ");
}