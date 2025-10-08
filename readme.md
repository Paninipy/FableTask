FableTask - App de Lista de Tareas DiariasUna aplicación móvil diseñada para la gestión eficiente y simple de tareas diarias.1. Identificación del ProyectoNombre de la App: FableTaskAsignatura/Profesor: Desarrollo de Aplicaciones Móviles / M.C. Leonel González VidalesEstudiante: Periodo/Fecha: Octubre 2025URL del Repositorio: 2. Descripción del ProyectoFableTask es una solución móvil desarrollada con React Native y Expo cuyo objetivo es maximizar la productividad del usuario mediante una gestión de tareas simple y visualmente clara. La aplicación prioriza una interfaz intuitiva y un flujo de trabajo rápido para capturar, organizar y completar actividades diarias.Características Principales:✅ Gestión Completa de Tareas: Crear, editar y eliminar tareas activas.🎯 Marcado Rápido: Marcar tareas como completadas con un solo toque.💾 Historial de Logros: Visualización de todas las tareas finalizadas.🎨 Interfaz Minimalista: Diseño limpio y enfocado en la usabilidad.⚙️ Manejo de Estado: Utilización de la Context API de React para una gestión de estado global y eficiente.Funcionalidades Implementadas:Tareas Activas: Lista principal con las tareas pendientes.Formulario Dinámico: Pantalla dedicada para la creación y edición de tareas.Persistencia de Tareas: Las tareas se mantienen guardadas (utilizando estado de React Context, idealmente con persistencia local en un futuro).Navegación por Pestañas: Uso de Tab Navigation para acceder fácilmente a las tareas activas y al historial.Estructura Modular: Código organizado en componentes, contextos y pantallas.3. Tecnologías y Versiones UtilizadasStack Tecnológico:React Native: 0.81.4React: 19.1.0Expo: ~54.0.3React Navigation: v7.1.17 (Native Stack y Tab Navigation)React Native Screens: ~4.16.0React Native Safe Area Context: ~5.6.0React Context API: Para la gestión centralizada del estado de las tareas.Herramientas de Desarrollo Requeridas:Node.js: v18.17.0 o superior  bash   node --version   NPM: 9.0.0+ o Yarn v1.22.19+  bash   npm --version   # o   yarn --version   Expo CLI: v6.3.0+  bash   npx expo --version   Android Studio: v2022.3+ con Android SDK 33+ o Expo Go app en dispositivo físico  bash   # Verificar Android SDK   adb --version   Verificación de Entorno:npx expo doctor

4. Estructura del ProyectoOrganización de Archivos:El proyecto sigue una estructura modular y escalable, separando la lógica de la interfaz, la navegación y la gestión de estado.FableTask/
├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── components/       # Componentes reutilizables (Botones, Tarjetas de Tarea)
│   ├── context/          # Manejo de estado global de las tareas
│   │   ├── index.js
│   │   └── TasksContext.js # Contexto para la gestión de las listas de tareas
│   ├── navigations/      # Configuración de los navegadores (Stack y Tabs)
│   │   ├── AppNavigation.js  # Navegación principal (Stack)
│   │   ├── index.js
│   │   └── TabNavigation.js  # Navegación de pestañas para tareas activas e historial
│   ├── screens/
│   │   └── Tasks/        # Pantallas específicas de la lógica de tareas
│   │       ├── AddTaskScreen.js    # Formulario para crear o editar una tarea
│   │       ├── HistoryScreen.js    # Muestra las tareas marcadas como completadas
│   │       ├── index.js
│   │       └── TasksListScreen.js  # Pantalla principal con lista de tareas activas
│   └── utils/
│       ├── index.js
│       └── screens.js    # Constantes para nombres de rutas de navegación
├── .gitignore
├── App.js                # Componente principal que envuelve el Context y la Navegación
├── app.json
├── index.js
├── package-lock.json
└── package.json

Arquitectura de la Aplicación:TasksContext.js: Contiene la lógica y el estado para las listas de tareas (activas y completadas).TabNavigation.js: Implementa las pestañas para cambiar entre la lista principal (TasksListScreen) y el historial (HistoryScreen).AppNavigation.js: Configura el Stack Navigator, que permite navegar desde la lista de tareas al formulario de añadir/editar (AddTaskScreen).TasksListScreen.js: Pantalla principal donde se realizan las acciones CRUD (Crear, Leer, Eliminar, Completar).5. Instalación y ConfiguraciónInstalación de Dependencias:# Clonar el repositorio
git clone [Tu URL de GitHub]
cd FableTask

# Instalar dependencias
npm install

Dependencias del Proyecto:|| Dependencia | Versión | Propósito || @react-navigation/native | ^7.1.17 | Core de navegación entre pantallas || @react-navigation/native-stack | ^7.3.26 | Stack navigator para navegación jerárquica || @react-navigation/bottom-tabs | ^7.4.5 | Navegación de pestañas (Tabs) || react-native-screens | ~4.16.0 | Optimización de rendimiento para transiciones || react-native-safe-area-context | ~5.6.0 | Manejo de áreas seguras || expo | ~54.0.3 | Framework de desarrollo móvil || react | 19.1.0 | Biblioteca de interfaz de usuario |Verificar instalación:npm list --depth=0

6. Ejecución de la AplicaciónScripts Disponibles:# Iniciar servidor de desarrollo
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

Primera Ejecución:Instalar dependencias:    bash    npm install    Iniciar el servidor de desarrollo:    bash    npm start    Conectar dispositivo:    - Android: Usar Expo Go o emulador    - iOS: Usar Expo Go o simulador    - Web: Se abrirá automáticamente en el navegadorNotas de Entorno:Dispositivo físico: Usar Expo Go y escanear el QR code.7. Funcionalidades de la AplicaciónPantalla Principal - Tareas Activas (TasksListScreen):Lista de Tareas: Muestra todas las tareas pendientes con la opción de marcar como completada.Acciones Rápidas: Botones o gestos para eliminar o editar una tarea existente.Creación: Botón flotante o de barra de navegación para acceder al formulario de creación (AddTaskScreen).Diseño: Interfaz simple con alta legibilidad.Pantalla de Historial (HistoryScreen):Registro Completo: Muestra una lista de todas las tareas que han sido marcadas como completadas.Reversión: Opción para "deshacer" una tarea completada, devolviéndola a la lista de tareas activas.Limpieza: Opción para vaciar el historial de tareas completadas.Pantalla de Formulario (AddTaskScreen):Creación: Formulario simple con campos para el título y/o descripción de la tarea.Edición: Se reutiliza la misma pantalla para precargar los datos de una tarea seleccionada y permitir su modificación.Navegación: Botón de "Guardar" y "Cancelar".Características Técnicas:React Context: Gestión de estado centralizada para las tareas.Navegación por Pestañas: Acceso inmediato a las dos funcionalidades principales (Pendientes / Historial).Código Limpio: Implementación de hooks de React para manejar el ciclo de vida y el estado de los componentes.8. Desarrollo y ExtensiónPróximas Funcionalidades Sugeridas:Persistencia Local Avanzada: Implementar AsyncStorage para guardar las tareas de forma permanente entre sesiones (si actualmente solo se usa el estado de React Context).Notificaciones: Recordatorios push para tareas con fecha límite.Clasificación y Filtros: Opciones para ordenar las tareas por prioridad o fecha.Sincronización Cloud: Integración con un servicio de base de datos en tiempo real (como Firebase Firestore) para sincronizar las tareas en múltiples dispositivos.Estructura para Nuevas Pantallas:// Ejemplo de nueva pantalla
import { View, Text, StyleSheet } from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Configuraciones de la Aplicación</Text>
    </View>
  );
}
//... Estilos

Agregar Nuevas Rutas:Actualizar src/utils/screens.js con nuevas constantes para las rutas.Si es una pantalla principal, agregar la Screen en src/navigations/TabNavigation.js.Si es una pantalla secundaria (accesible desde otra), agregar la Screen en src/navigations/AppNavigation.js.9. TroubleshootingProblemas Comunes:| Problema | Solución || Error de instalación | npm install --legacy-peer-deps || Metro cache corrupto | npx expo start --clear || Puerto ocupado | npx expo start --port 8082 || Dependencias desactualizadas | npx expo doctor |Comandos Útiles:# Verificar entorno
npx expo doctor

# Limpiar cache
npx expo start --clear

# Reinstalar dependencias
rm -rf node_modules package-lock.json && npm install

10. Recursos y DocumentaciónDocumentación de ExpoReact NavigationReact Native DocsReact Context APIDesarrollado por: Última actualización: 7 de Octubre 2025Versión: 1.0.0