FableTask - 📝 App de Lista de Tareas Diarias
Una aplicación móvil desarrollada con React Native y Expo para la gestión eficiente y simple de las actividades cotidianas.

1. Identificación del Proyecto
Nombre de la App: FableTask

Asignatura/Profesor: Desarrollo de Aplicaciones Móviles / M.C. Leonel González Vidales

Estudiante: [Tu Nombre Completo]

Periodo/Fecha: Octubre 2025

URL del Repositorio: [Tu URL de GitHub]

2. Descripción del Proyecto
FableTask es una aplicación móvil que permite a los usuarios capturar, organizar y revisar sus tareas diarias de manera efectiva. La aplicación se centra en una interfaz minimalista y fluida que facilita la interacción constante sin distracciones.

Características Principales:
✅ Gestión Completa de Tareas: Permite crear, editar y eliminar tareas activas con facilidad.

🎯 Marcado Rápido: Opción simple para marcar tareas como completadas.

📜 Historial de Logros: Pantalla dedicada para revisar todas las tareas finalizadas.

🎨 Interfaz Simple y Moderna: Diseño limpio y enfocado en la usabilidad.

⚙️ Manejo de Estado con Context: Utiliza la Context API de React para una gestión de estado global de las tareas.

Funcionalidades Implementadas:
Lista principal de tareas pendientes y activas.

Formulario reutilizable para añadir nuevas tareas y editar existentes.

Navegación por pestañas para alternar entre Tareas y Historial.

Persistencia de datos de las tareas mientras la app está activa.

Estructura de código modular y escalable.

3. Tecnologías y Versiones Utilizadas
Stack Tecnológico:
React Native: 0.81.4

React: 19.1.0

Expo: ~54.0.3

React Navigation: v7.1.17 (Native Stack, Tab Navigation)

React Native Screens: ~4.16.0

React Native Safe Area Context: ~5.6.0

React Context API: Para la gestión de las listas de tareas.

Herramientas de Desarrollo Requeridas:
Node.js: v18.17.0 o superior
  bash   node --version   

NPM: 9.0.0+ o Yarn v1.22.19+
  bash   npm --version   # o   yarn --version   

Expo CLI: v6.3.0+
  bash   npx expo --version   

Android Studio: v2022.3+ con Android SDK 33+ o Expo Go app en dispositivo físico
  bash   # Verificar Android SDK   adb --version   

Verificación de Entorno:
npx expo doctor

4. Estructura del Proyecto
Organización de Archivos:
El proyecto sigue una estructura limpia, separando componentes, navegación y la lógica de estado (Context).

FableTask/
├── App.js                          # Componente principal que envuelve el Context y la Navegación
├── app.json                        # Configuración de Expo
├── package.json                    # Dependencias y scripts
├── index.js                        # Punto de entrada
├── assets/                         # Recursos estáticos
└── src/
    ├── components/                 # Componentes reutilizables (Botón de Tarea, etc.)
    ├── context/                    # Lógica de gestión de estado global
    │   ├── index.js
    │   └── TasksContext.js         # Contexto que maneja las tareas activas y completadas
    ├── navigations/                # Configuración de navegadores (Tabs y Stack)
    │   ├── AppNavigation.js        # Navegación Stack principal (para agregar/editar)
    │   ├── index.js
    │   └── TabNavigation.js        # Navegación por Pestañas (Tareas y Historial)
    ├── screens/                    # Pantallas de la aplicación
    │   └── Tasks/
    │       ├── AddTaskScreen.js    # Pantalla para crear/editar tareas
    │       ├── HistoryScreen.js    # Pantalla que muestra tareas completadas
    │       ├── index.js
    │       └── TasksListScreen.js  # Pantalla principal con la lista de pendientes
    └── utils/                      # Utilidades y constantes
        ├── index.js
        └── screens.js              # Constantes para nombres de rutas

Arquitectura de la Aplicación:
TasksContext.js: Fuente única de verdad para la lista de tareas.

TabNavigation.js: Define las dos vistas principales: Tareas Pendientes y Tareas Completadas (Historial).

AppNavigation.js: Gestiona las transiciones a pantallas de formulario (AddTaskScreen) desde la vista de tareas.

TasksListScreen.js: Pantalla central para interactuar con las tareas activas.

5. Instalación y Configuración
Instalación de Dependencias:
# Clonar el repositorio
git clone [Tu URL de GitHub]
cd FableTask

# Instalar dependencias
npm install

Dependencias del Proyecto:
Dependencia

Versión

Propósito

@react-navigation/native

^7.1.17

Core de navegación entre pantallas

@react-navigation/native-stack

^7.3.26

Stack navigator para navegación jerárquica

@react-navigation/bottom-tabs

^7.4.5

Navegación de pestañas (Tabs)

react-native-screens

~4.16.0

Optimización de rendimiento para transiciones

react-native-safe-area-context

~5.6.0

Manejo de áreas seguras

expo

~54.0.3

Framework de desarrollo móvil

react

19.1.0

Biblioteca de interfaz de usuario

Verificar instalación:
npm list --depth=0

6. Ejecución de la Aplicación
Scripts Disponibles:
# Iniciar servidor de desarrollo
npm start
# o
npx expo start

# Ejecutar en Android (emulador/dispositivo)
npm run android
# o
npx expo start --android

# Ejecutar en iOS (solo macOS)
npm run ios
# o  
npx expo start --ios

# Ejecutar en web
npm run web
# o
npx expo start --web

Primera Ejecución:
Instalar dependencias:
   bash    npm install    

Iniciar el servidor de desarrollo:
   bash    npm start    

Conectar dispositivo:
   - Android: Usar Expo Go o emulador
   - iOS: Usar Expo Go o simulador
   - Web: Se abrirá automáticamente en el navegador

Notas de Entorno:
Dispositivo físico: Usar Expo Go y escanear el QR code.

7. Funcionalidades de la Aplicación
Pantalla Principal - Tareas Activas (TasksListScreen):
Lista de Tareas: Muestra todas las tareas pendientes.

Acciones: Botones o tarjetas interactivas para marcar como completada, editar o eliminar.

Creación: Acceso rápido a la pantalla de formulario.

!

Pantalla de Historial (HistoryScreen):
Registro de Logros: Lista de tareas marcadas como completadas.

Reversión: Opción para devolver una tarea al estado "pendiente" (si se desea implementar).

!

Características Técnicas:
Manejo de Estado: Centralizado mediante React Context.

Navegación: Clara y estructurada con React Navigation (Tabs y Stack).

8. Desarrollo y Extensión
Próximas Funcionalidades Sugeridas:
Persistencia de Datos: Usar AsyncStorage o Firebase para guardar las tareas de forma permanente.

Priorización: Agregar niveles de prioridad a las tareas.

Fechas Límite: Implementar campos de fecha y recordatorios.

Estructura para Nuevas Pantallas:
// Ejemplo de nueva pantalla
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

export function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Contenido de la pantalla */}
    </View>
  );
}

Agregar Nuevas Rutas:
Actualizar src/utils/screens.js con nuevas constantes.

Agregar la pantalla en la navegación correspondiente (TabNavigation.js o AppNavigation.js).

9. Troubleshooting
Problemas Comunes:
Problema

Solución

Error de instalación

npm install --legacy-peer-deps

Metro cache corrupto

npx expo start --clear

Puerto ocupado

npx expo start --port 8082

Dependencias desactualizadas

npx expo doctor

Comandos Útiles:
# Verificar entorno
npx expo doctor

# Limpiar cache
npx expo start --clear

# Reinstalar dependencias
rm -rf node_modules package-lock.json && npm install

10. Recursos y Documentación
Documentación de Expo

React Navigation

React Native Docs

React Context API

Desarrollado por: [Tu Nombre Completo]
Última actualización: 7 de Octubre 2025
Versión: 1.0.0