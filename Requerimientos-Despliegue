### 1. Requisitos del Sistema:
#### Backend:
- **Java JDK 11+**
- **Maven**
- **Spring Boot 2.5+**
- **IDE** utilizado: Visual Studio Code

#### Frontend:
- **Node.js** (v14 o superior)
- **NPM** (incluido con Node.js)
- **React** (create-react-app o cualquier entorno compatible)

### 2. Estructura del Proyecto:
```
- frontend/  # Proyecto de React
- backend/   # Proyecto de Spring Boot
```

### 3. Instrucciones de Despliegue

#### 3.1 Backend (Spring Boot)

##### 3.1.1 Clonar el repositorio:
```bash
git clone <URL_del_repositorio>
cd backend
```

##### 3.1.2 Configuración:
El proyecto no requiere configuración adicional para entornos básicos. Spring Boot se ejecuta con la configuración por defecto en el puerto **8080**.

##### 3.1.3 Ejecutar la aplicación:
Maven:
```bash
./mvnw spring-boot:run
```
##### 3.1.4 Verificación del backend:
El servidor debería estar disponible en `http://localhost:8080/api/calculadora/operacion`. Para probar si el backend está funcionando, puedes hacer una petición GET con los parámetros necesarios:
```
http://localhost:8080/api/calculadora/operacion?primerNumero=5&segundoNumero=3&operador=+
```

Si todo está bien, debería devolver el resultado de la operación.

---

#### 3.2 Frontend (React)

##### 3.2.1 Clonar el repositorio:
```bash
cd ../frontend
```
##### 4.2.2 Ejecutar la aplicación:
Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo de React:
```bash
npm start
```

La aplicación se ejecutará en `http://localhost:3000` por defecto.

##### 4.2.3 Verificar el frontend:
Abre un navegador web y navega a `http://localhost:3000`. La interfaz de la calculadora debería ser visible y funcional. Realiza algunas operaciones para verificar que la calculadora está enviando peticiones correctamente al backend.
---

### 4. Pruebas de la Aplicación

#### 4.1 Pruebas Manuales:
1. **Operaciones básicas**: Ingresar dos números y seleccionar una operación (+, -, *, /). Verifica que el resultado se muestra correctamente.
2. **Historial de operaciones**: Realiza varias operaciones y verifica que el historial muestra las últimas 10 operaciones.
3. **Modo oscuro**: Cambia el modo oscuro y verifica que el estilo de la calculadora cambia correctamente.
4. **Manejo de errores**: Intenta dividir por cero y verifica que el sistema muestra un error apropiado.

### 5. Conclusiones:
Este proyecto es un ejemplo funcional de cómo desarrollar una calculadora web utilizando una arquitectura cliente-servidor moderna. React proporciona una interfaz de usuario interactiva y adaptable, mientras que Spring Boot maneja la lógica de negocio de manera eficiente en el backend. La aplicación está diseñada para ser fácilmente escalable, permitiendo la adición de más operaciones y funcionalidades en el futuro.



