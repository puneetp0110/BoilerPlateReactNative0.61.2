import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';
import Login from 'app/features/login/containers/LoginContainer';
import Home from 'app/features/home/containers/HomeContainer';
import { AuthenticatedStack } from './components/AutheticatedStack'

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null }
        },
        AuthenticatedStack: {
          screen: AuthenticatedStack,
          navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Login'
    }
);

export default createAppContainer(RNApp);
