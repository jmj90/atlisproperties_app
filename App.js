import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/AuthScreen'
import MaintenanceScreen from './src/screens/MaintenanceScreen'
import AccountSettingsScreen from './src/screens/AccountSettingsScreen'
import ViewMyBillScreen from './src/screens/ViewMyBillScreen'


// Register screens
Navigation.registerComponent("atlis.AuthScreen", () => AuthScreen);
Navigation.registerComponent("atlis.MaintenanceScreen", () => MaintenanceScreen)
Navigation.registerComponent("atlis.AccountSettingsScreen", () => AccountSettingsScreen)
Navigation.registerComponent("atlis.ViewMyBillScreen", () => ViewMyBillScreen)

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "atlis.AuthScreen",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true
    }
  }
})
