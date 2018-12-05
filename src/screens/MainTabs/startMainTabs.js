import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "View My Bill",
          title: "View My Bill",
          screen: "atlis.ViewMyBillScreen",
          navigatorStyle: {
            navBarHidden: true
          },
          icon: require('../../../assets/tab_icons/viewbill_icon.png'),
        },
        {
          label: "Maintenance",
          title: "Maintenance",
          screen: "atlis.MaintenanceScreen",
          navigatorStyle: {
            navBarHidden: true
          },
          icon: require('../../../assets/tab_icons/maintenance_icon.png'),
        },
        {
          label: "Account Settings",
          title: "Account Settings",
          screen: "atlis.AccountSettingsScreen",
          navigatorStyle: {
            navBarHidden: true
          },
          icon: require('../../../assets/tab_icons/accountsettings_icon.png'),
        },
        {
          label: "Logout",
          title: "Logout",
          screen: "atlis.MaintenanceScreen",
          icon: require('../../../assets/tab_icons/logout_icon.png'),
        }
      ],
      tabsStyle : {
        tabBarBackgroundColor: '#29ABE2',
        tabBarButtonColor: 'white',
        tabBarSelectedButtonColor: '#FFF0A4',
        tabBarSelectedLabelColor: '#FFF0A4',
        tabBarTextColor: 'white'
      }
    });
}

export default startTabs;
