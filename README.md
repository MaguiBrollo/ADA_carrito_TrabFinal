<!-- ===========================================================
                            PRESENTACIÓN
     =========================================================== -->

<p align="center">
   <img src="src/assets/readme/Logo.png" width="900px" alt-text="Baby Store">
</p>

---

<div align="center">

<a target="_blank" href="https://baby-store-ada.web.app/"><img alt="Baby Store" src="https://img.shields.io/badge/Baby%20Store-Link-%2300899A%20?labelColor=black&link=https%3A%2F%2Fhttps://baby-store-ada.web.app/"></a>

![GitHub Tag](https://img.shields.io/github/v/tag/MaguiBrollo/ADA_carrito_TrabFinal?sort=semver&labelColor=black&color=00899A "Versión")

</div>

---

## Tabla de Contenidos:

- [Baby Store](#baby-store)
- [Tecnologías](#tecnologías)
- [Menús](#menús)
- [Mobile](#mobile)
- [Contáctame](#contáctame)

---

<br>
<!-- ==================================================
                         CONTENIDO 
     ================================================== -->

## _Baby Store_

[:top:](#tabla-de-contenidos) <br>

Las aplicaciones web, comúnmente conocidas como apps, se han convertido en una parte esencial de nuestra vida cotidiana. Las apps se han consolidado como nuestras aliadas, simplificándonos tareas diarias complejas, como otras no tan complejas como por ejemplo comprar artículos o servicios.
<br>

> `Baby Store` es una tienda en línea de venta de ropa para niños de cero hasta seis años.

<br>

<p align="center" >
   <img src="src/assets/readme/Inicio.png" width="600px" alt-text="Presentación">
</p>

La aplicación `Baby Store`, fue diseñada de tal manera que puede ser utilizada en diferentes dispositivos, lo que implica un correcto diseño responsive.

<br>

Baby Store es una app desarrollada como Trabajo Final de la capacitación de `"Desarrollo Frontend"` dictada por [ADA ITW](https://www.linkedin.com/school/ada-itw/), y se encuentra incluida en mi `Portfolio Personal`, de tal manera de reflejar el grado de avance, apropiación y uso de los conocimiento adquiridos y asimilados durante la capacitación.

> [!NOTE]
> Visite mi portafolio personal: [PORTFOLIO](https://maguibrollo.github.io/ADA_Portafolio_mod01_tf/).

<br>

## _Tecnologías_

[:top:](#tabla-de-contenidos) <br>

Baby Store fue desarrollada utilizando las siguientes tecnologías:

<div align="center">

|                          [![React](https://img.shields.io/static/v1?label=&message=React&color=%23EDE7F6&logo=react&logoColor=%230C9FCB)](https://)                           |                                                 [![Material UI](https://img.shields.io/static/v1?label=&message=Material+UI&color=%23EDE7F6&logo=mui&logoColor=%230082CC)](https://)                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. | Material UI es una librería de componentes de React. js, de código abierto creada por Google, basada en Material Design, la cual brinda pautas y lineamientos que sientan la base para crear diseños profesionales para aplicaciones. |

</div>

<br>

## _Menús_

[:top:](#tabla-de-contenidos) <br>

La aplicación cuenta con los siguientes menús: [Inicio](#inicio), [Artículos](#artículos), [Buscar](#buscar), [Modo](#modo), [Usuario](#usuario), [Compras](#compras).

<br>
<p align="center" >
   <img src="src/assets/readme/menus.png" width="600px" alt-text="Carrusel">
</p>

---

### _Inicio:_

[:top:](#menús) <br>

Al iniciar la aplicación se visualiza un carrusel de imágenes alusivas, más información básica de Baby Store.

<br>
<p align="center" >
   <img src="src/assets/readme/carrusel.gif" width="600px" alt-text="Carrusel">
</p>

---

### _Artículos:_

[:top:](#menús) <br>

El menú artículos es el corazón de la aplicación, ya que permite ver todos los artículos ordenados por nombre, pero también permite filtrar por categoría.
Como se puede observar en la imagen, las categorías aparecen ordenadas alfabéticamente acompañadas con un número que indica la cantidad de artículos que tiene cada categoría. Las categorías que no tienen artículos, se encuentran deshabilitadas.

<p align="center" >
   <img src="src/assets/readme/artiPorCat_Filtrar.png" width="600px" alt-text="Spinner">
</p>

<br>

Luego de seleccionar "Todos" los artículos, o una "Categoría", se puede ver un mensaje que informa lo seleccionado, y el número de página.

<p align="center" >
   <img src="src/assets/readme/artiPorCat_Filtrar1.png" width="600px" alt-text="Spinner">
</p>

> [!NOTE]
> Cuando la cantidad de artículos mostrados supera 8 (ocho), se habilita automáticamente la paginación.

<p align="center" >
   <img src="src/assets/readme/artiPorCat_Filtrar2.png" width="600px" alt-text="Spinner">
</p>

Todos los artículos tiene un botón que permite `Ver Mas - Comprar`

<p align="center" >
   <img src="src/assets/readme/verMas.png" width="600px" alt-text="Spinner">
</p>

Al presionar ese botón, se abre una ventana con más información del artículo. <br>
Esa ventana se puede mover por la pantalla para poder ver los demás artículos.<br>

<p align="center" >
   <img src="src/assets/readme/verMas2.png" width="600px" alt-text="Spinner">
</p>

Además, se puede seleccionar la cantidad de artículos a comprar respetando no más de 5 artículos, y respetando el Stock disponible, en caso de no cumplir con una de las condiciones se mostrará un mensaje de advertencia.
<br>
Si se cumple con las condiciones se puede realizar la compra presionando el botón `Comprar`. Luego de comprar, se visualiza un pequeño cartel informando que el artículo fue agregado al Carrito de Compras.

<p align="center" >
   <img src="src/assets/readme/verMas4.png" width="300px" alt-text="Spinner">
</p>

> [!NOTE]
> Para poder realizar una compra se debe iniciar sesión (o crear una cuenta).

<p align="center" >
   <img src="src/assets/readme/verMas3.png" width="300px" alt-text="Spinner">
</p>

---

### _Buscar:_

[:top:](#menús) <br>

Buscar permite escribir una palabra, por ejemplo "remera", y busca entre los datos de cada artículo, sin tener en cuenta la categoría.
La información encontrada se visualiza de la misma manera que cuando se filtra por artículos. Además, de poder realizar la compra (si se ha iniciado sesión).

<p align="center" >
   <img src="src/assets/readme/buscar.png" width="600px" alt-text="Spinner">
</p>

---

## _Modo_

[:top:](#menús) <br>

Toda la aplicación puede ser visualizada en modo claro o en modo oscuro.

<div align="center">

|                       Modo Claro                       |                            Modo Oscuro                            |
| :----------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="src/assets/readme/Inicio.png" width="300px"> | <img src="src/assets/readme/InicioModo_Oscuro.png" width="300px"> |

</div>
<br>

---

### _Usuario:_

[:top:](#menús) <br>

Al seleccionar este menú se puede `Iniciar SESIÓN` si se tiene una cuenta creada, o bien `Crear CUENTA`.

<p align="center" >
   <img src="src/assets/readme/usuario1.png" width="300px" alt-text="Spinner">
</p>

<div align="center">

|                      Iniciar Sesión                      |                       Crear Cuenta                       |
| :------------------------------------------------------: | :------------------------------------------------------: |
| <img src="src/assets/readme/usuario2.png" width="300px"> | <img src="src/assets/readme/usuario3.png" width="300px"> |

</div>

Si se inició sesión, este menú cambia y presenta las opciones de ver `Mis Compras`, y `Cerrar sesión`. Además, se puede ver el carrito de compras, si existe.
<br>

<p align="center" >
   <img src="src/assets/readme/usuario4.png" width="300px" alt-text="Carrusel">
</p>

<div align="center">

|                        Mis compras                         |                         Cerrar Sesión                          |
| :--------------------------------------------------------: | :------------------------------------------------------------: |
| <img src="src/assets/readme/miscompras.png" width="300px"> | <img src="src/assets/readme/usuario5Cerrar.png" width="300px"> |

</div>

---

### _Compras:_

[:top:](#menús) <br>

Este menú está disponible únicamente para los usuarios que han iniciado sesión.
<br>
Si el carrito tiene artículos, se puede ver un número con fondo rojo. Si no hay artículos, igual se puede acceder.

<div align="center">

|                         Compras                          |                       Carrito vacío                       |
| :------------------------------------------------------: | :-------------------------------------------------------: |
| <img src="src/assets/readme/carrito0.png" width="200px"> | <img src="src/assets/readme/carrito00.png" width="300px"> |

</div>

<br>
El carrito de compras presenta la siguiente información: 
<br>- Fecha y hora en que se creó el carrito.
<br>- Duración: los carritos se borran después de un día.
<br>- Datos del producto comprado.
<br>- Total de la compra.
<br>

Además, se presenta los botones `FINALIZAR COMPRA` y `ELIMINAR CARRITO`

<p align="center" >
   <img src="src/assets/readme/carrito1.png" width="500px" alt-text="Spinner">
</p>

<br>

Si se selecciona `FINALIZAR COMPRA` se pasará a la página de checkout, en la cual se debe completar los siguientes pasos:
<br>

- Paso 1: Controlar Artículos, Cantidad, Precio y Total.
- Paso 2: Completar datos de envio.

<div align="center">

|                          Paso 1                          |                          Paso 2                          |
| :------------------------------------------------------: | :------------------------------------------------------: |
| <img src="src/assets/readme/carrito2.png" width="300px"> | <img src="src/assets/readme/carrito3.png" width="300px"> |

</div>

- Paso 3: Aceptar todos los datos.
- Finalizar: Compra finalizada. Muchas Gracias.

<div align="center">

|                          Paso 3                          |                        Finalizar                         |
| :------------------------------------------------------: | :------------------------------------------------------: |
| <img src="src/assets/readme/carrito4.png" width="300px"> | <img src="src/assets/readme/carrito5.png" width="300px"> |

</div>

> Se debe `MARCAR` cada paso para poder finalizar la compra.<br>
> Cada venta DESCUENTA el  STOCK del/los artículo/s vendido/s.

---


> [!NOTE]
> Cuando se intente acceder a una página inexistente se mostrará la página de `ERROR 404`, con la opción de volver a la página de `Incio`.

<p align="center" >
   <img src="src/assets/readme/error404.png" width="500px" alt-text="Spinner">
</p>

---

## _Mobile:_

[:top:](#tabla-de-contenidos) <br>

Todas las opciones antes mencionadas se encuentran disponibles para los diferentes tamaños de móviles.

<p align="center" >
   <img src="src/assets/readme/celu1.png" width="300px" alt-text="Spinner">
</p>

---

## _Contáctame:_

[:top:](#tabla-de-contenidos) <br>

<a target="_blank" href="https://www.linkedin.com/in/magui-brollo/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Magdalena%20Brollo-%2300899A%20?logo=linkedin&labelColor=black"></a>
<a href="mailto:maguieb@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Gmail-maguieb%40gmail.com-%2300899A?style=flat&logo=gmail&labelColor=black&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmagui-brollo%2F"></a>
<a target="_blank" href="https://discord.gg/v7cZYHDz"><img alt="Discord" src="https://img.shields.io/badge/Discord-Magui-%2300899A%20?logo=discord&labelColor=black"></a>

---

![](https://komarev.com/ghpvc/?username=MaguiBrollo&color=00899A "Visitas")
