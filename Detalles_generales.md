# Proyecto1_Byron_Rodriguez
Calculadora elaborada con Java, Spring y React. 

Aquí tienes una descripción detallada del proyecto de la calculadora, estructurada en secciones:

### Descripción:
Este proyecto consiste en el desarrollo de una calculadora web interactiva que permite realizar operaciones aritméticas básicas: suma, resta, multiplicación y división. La calculadora tiene funcionalidades adicionales, como la visualización de un historial de operaciones y un modo oscuro. El sistema está diseñado con una arquitectura de frontend y backend, utilizando **React** para la interfaz de usuario y **Spring Boot** para la lógica de negocio en el servidor. La calculadora está conectada mediante peticiones HTTP al backend para realizar las operaciones y devolver el resultado al cliente.

### Backend:
El backend del proyecto está desarrollado con **Java** utilizando **Spring Boot**. Se diseñó un controlador REST (`CalControlador`) que maneja las peticiones para realizar las operaciones matemáticas. A través de la clase de servicio (`CalServicio`), se procesan los cálculos con validación del operador y manejo de errores, como evitar la división entre cero. El backend expone un endpoint API que recibe los dos números y el operador a través de parámetros de consulta, y responde con el resultado de la operación.

**Características clave del backend:**
- **Framework:** Spring Boot
- **Controlador REST:** Exposición de endpoint para recibir los parámetros de la operación.
- **Manejo de excepciones:** Validación para la división entre cero y operadores inválidos.
- **Cross-Origin:** Configuración de CORS para permitir peticiones desde el frontend React.

### Frontend:
El frontend está construido con **React**, proporcionando una interfaz de usuario interactiva y dinámica. Se utiliza el estado local para gestionar los números ingresados, el operador y el resultado, así como para controlar el historial de operaciones y la alternancia del modo oscuro. Los datos se envían al backend a través de peticiones **fetch** y el resultado se muestra en pantalla. La interfaz es amigable, con botones que simulan una calculadora física y funciones avanzadas como el modo oscuro y un historial de hasta 10 operaciones.

**Características clave del frontend:**
- **Framework:** React
- **Componentes:** Manejo de estado con `useState` para los números, el operador, el resultado y el historial.
- **Peticiones asíncronas:** Uso de `fetch` para enviar datos al backend y recibir el resultado.
- **Modo oscuro:** Implementación de estilos dinámicos que permiten cambiar el tema de la calculadora.
- **Historial de operaciones:** Visualización de las últimas 10 operaciones realizadas.

### Conclusiones:
Este proyecto demuestra una arquitectura cliente-servidor sencilla pero eficiente, con una calculadora que proporciona una experiencia de usuario fluida. El uso de **React** en el frontend permite una interfaz interactiva y fácil de mantener, mientras que **Spring Boot** en el backend asegura una lógica de negocio sólida y un manejo de excepciones robusto. La integración de funcionalidades como el historial y el modo oscuro añade valor a la aplicación. En general, este proyecto es una excelente demostración de cómo React y Spring Boot pueden trabajar juntos para crear aplicaciones web eficientes y bien estructuradas.
