import {MyStack} from '../Navigation/NavigationStack'
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}