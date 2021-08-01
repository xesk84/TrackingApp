Welcome to TrackingApp

In this document, we explain how the project is organized and how to run it.


This is the folder structure inside src/:

  common: Here we can find common Enums or Services used by the rest of the program. Inside Services we can find the 
    calls to the Rest API.

  components: Folder containig the components of the project. They are splited in 2 folders
    basic: Contains very simple components like Button or Input
    combined: Contains components composed by serveral components.

  redux: In this folder we can find all logic and entities used to keep the global state of the app. Inisde is splited by the
    type of entities are used inside the project like:
    - Driver: User logged to the app.
    - Deliveries: Entity representing the deliveries a driver must delivery. Inside we can find the single entity Delivery too.

  screens: Folder that contains the screen used by the App and referenced at the NavigatorContainer.
    - MainScreen: Screen that contains de logic for Login a user or if it's logged, show the current active delivery.
    - DeliveriesListScreen: Screen that shows all the available screens of the app. From this screen the driver can select 
      which delivery will set as active.

Special Behaviours of the app
  - For login, the driver must introduce it's driver id and it's password.
  - If a delivery is selected as active, the driver CAN'T logout or set active another delivery
  - The user and the active delivery will be persisted in memory, so if the driver closes the app,
    this information will be loaded again when the app opens again.

SetUp
  - Clone the code from https://github.com/xesk84/TrackingApp
  - Move inside the root folder
  - On a terminal, execute => yarn
  - cd ios
  - pod install
  - cd ..
  - If you have your environments ready for execution write:
    npx react-native run-ios
    npx react-native run-android

  

