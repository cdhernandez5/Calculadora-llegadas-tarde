
# Código de ejemplo de la capacitación de "inicio rápido con Vue.js"

Este repositorio contiene el código de ejemplo utilizado en la capacitación realizada de Vue.js.
Vimos los siguientes conceptos:
- [¿Qué es Vue.js?](https://vuejs.org/v2/guide/#What-is-Vue-js)
- [Hola mundo con Vue.js](https://vuejs.org/v2/guide/#Getting-Started)
- [Interpolaciones](https://vuejs.org/v2/guide/syntax.html#Interpolations)
- [Directivas](https://vuejs.org/v2/guide/syntax.html#Directives)
- [Bucles](https://vuejs.org/v2/guide/list.html)
- [Condicionales](https://vuejs.org/v2/guide/conditional.html)
- [Eventos](https://vuejs.org/v2/guide/events.html)
- [Filtros](https://vuejs.org/v2/guide/filters.html#ad)
- [Propiedades Computadas](https://vuejs.org/v2/guide/computed.html#Computed-Properties)
- [Watchers](https://vuejs.org/v2/guide/computed.html#Watchers)
- [Componentes](https://vuejs.org/v2/guide/components.html)

La presentación utilizada la puedes descargar [aquí](https://github.com/cdhernandez5/Calculadora-llegadas-tarde/tree/master/Presentacion).
# [Ver demostración](https://cdhernandez5.github.io/Calculadora-llegadas-tarde/calculadora-vue.html)

## Plugins utilizados
Lista de plugins utilizados en el código de ejemplo. 

| Plugin | Repositorio |
| ------ | ------ |
| Vue.js | [https://vuejs.org](https://vuejs.org) |
| Bootstrap| [https://getbootstrap.com/](https://getbootstrap.com/)|
| JQuery | [https://jquery.com/](https://jquery.com/) |
| Datepicker for Vue.js | [https://github.com/ankurk91/vue-bootstrap-datetimepicker](https://github.com/ankurk91/vue-bootstrap-datetimepicker) |
| Moment.js | [https://momentjs.com/](https://momentjs.com/) |
| OpenIconic | [https://useiconic.com/open](https://useiconic.com/open) |


## Descripción de la solución de ejemplo.

En una empresa X se decidió colocar una multa monetaria voluntaria para los colaboradores que llegaban tarde. Dada la alta demanda de llegadas tarde y lo engorroso que era calcular el valor de la llegada, se creó una **Calculadora de llegadas tarde**, que permite a partir de unas variables de entrada, calcular el valor a pagar, siguiendo las siguientes reglas:
* Una llegada tarde cuanta a partir de las **8:25 AM**
* El valor de la multa es de 8.000 $ si paga el **mismo día**.
* Aumenta a 10.000 $ si paga al **final de semana**.
* Y si decide pagar a **final de mes** el valor será de 12.000 $. 
* Además del valor anterior, se cobrará 1.000 $ adicionales, por cada 10 minutos tarde a partir de las 8:30 AM. El máximo cobro será de 5.000 $.

Para implementar esta solución se decidió crear una aplicación web, utilizando el framework de desarrollo progresivo Vue.js

License
----
MIT