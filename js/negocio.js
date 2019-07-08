/**
* @fileoverview Lógica de negocio para cálculo llegadas tarde.
* @version 1.0
* @author David Hernández <https://github.com/cdhernandez5>
* @Released under the MIT License.
**/
var calculoLlegadasTarde = {

    parametros: {
        horaLlegadaTarde: {
            hora: 8,
            minuto: 25
        },
        horaMinutosAdicionales: {
            hora: 8,
            minuto: 30
        }
    },

    /**
    * Crea un nuevo registro de llegada tarde y se encarga llamar 
    * a las funciones para realizar el cálculo de todas las variables.
    * @param  {string} quien Persona que llega tarde.
    * @param  {moment} fechaLlegada Objeto tipo moment con la fecha de llegada.
    * @param  {string} cuandoPaga Momento del mes en que realizará el pago.
    * @return  {objllegadaTarde} Objeto que tiene todos los cálculos realizados de la llegada tarde.
    */
    crearNuevoRegistro: function (quien, fechaLlegada, cuandoPaga) {

        var objllegadaTarde = {
            id: this.generarGuid(),
            quien: quien,
            fechaLlegada: fechaLlegada,
            cuandoPaga: cuandoPaga,
            cantidadPesosAdicionales: 0,
            valorBanderazo: 0,
            valorCuandoPaga: 0,
            valorMinutosAdicionales: 0
        };

        this.setBanderazo(objllegadaTarde);
        this.calcularValorCuandoPaga(objllegadaTarde);
        this.setMinutosAdicionales(objllegadaTarde);
        this.setValorAdicionales(objllegadaTarde);

        return objllegadaTarde;
    },

    /**
    * Asigna el valor (Banderazo) por una llegada tarde.
    * @param  {objllegadaTarde} objllegadaTarde objeto llegada tarde.
    */
    setBanderazo: function (objllegadaTarde) {
        objllegadaTarde.valorBanderazo = 8000;
    },

    /**
    * Calcula el valor que debe pagar, dependiendo del momento del mes en que realizará el pago.
    * @param  {objllegadaTarde} objllegadaTarde objeto llegada tarde.    
    */
    calcularValorCuandoPaga: function (objllegadaTarde) {
        if (objllegadaTarde.cuandoPaga === 'Mismo dia') {
            objllegadaTarde.valorCuandoPaga = 0;
        }
        else if (objllegadaTarde.cuandoPaga === 'Esta semana') {
            objllegadaTarde.valorCuandoPaga = 2000;
        }
        else if (objllegadaTarde.cuandoPaga === 'Fin de mes') {
            objllegadaTarde.valorCuandoPaga = 4000;
        }
    },

    /**
    * Calcula los minutos adicionales llegados tarde, después de las 8:30 Am. 
    * Los divide en 10, para calcular la cantidad de pesos adicionales.
    * @param  {objllegadaTarde} objllegadaTarde objeto llegada tarde. 
    */
    setMinutosAdicionales: function (objllegadaTarde) {
        var fechaMulta = objllegadaTarde.fechaLlegada.clone();
        fechaMulta.set(
            {
                h: this.parametros.horaMinutosAdicionales.hora,
                m: (this.parametros.horaMinutosAdicionales.minuto - 1)
            }
        );

        //Llegò despues de las 8:30
        if (objllegadaTarde.fechaLlegada.isAfter(fechaMulta)) {
            var minutosTarde = objllegadaTarde.fechaLlegada.diff(fechaMulta, 'minutes') - 1;
            var cantidadPesosAdicionales = Math.floor(((minutosTarde) / 10) + 1);
            objllegadaTarde.cantidadPesosAdicionales = cantidadPesosAdicionales <= 5 ? cantidadPesosAdicionales : 5;
        }
        else {
            objllegadaTarde.cantidadPesosAdicionales = 0;
        }
    },

    /**
    * Calcula el valor por la cantidad de minutos tarde.
    * @param  {objllegadaTarde} objllegadaTarde objeto llegada tarde.
    */
    setValorAdicionales: function (objllegadaTarde) {
        objllegadaTarde.valorMinutosAdicionales = objllegadaTarde.cantidadPesosAdicionales * 1000;
    },

    /**
    * Genera código guid.
    * @return  {string} guid generado.
    */
    generarGuid: function () {
        //Código tomado de https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    /**
    * Determina a partir de una fecha si es una llegada tarde.
    * @param  {moment} fechaEntrada Objeto tipo moment con fecha a validar.  
    * @return  {boolean} True si la llegada es después de las 8:25.
    */
    validarFechaHoraLLegada: function (fechaEntrada) {
        var fechaLllegadaTarde = fechaEntrada.clone();
        fechaLllegadaTarde.set(
            {
                h: this.parametros.horaLlegadaTarde.hora,
                m: (this.parametros.horaLlegadaTarde.minuto - 1)
            }
        );

        //Llegó después de las 8:25
        if (fechaEntrada.isAfter(fechaLllegadaTarde)) {
            return true;
        }
        else {
            return false;
        }
    }
};

