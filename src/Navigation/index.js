import {MyStack} from './Navigation.Stack'
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}