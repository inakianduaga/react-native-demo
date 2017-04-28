/**
 * This exposes the native NavigationUpdate module as a JS module. This has a
 * function 'show' which takes the following parameters:
 */
import { NativeModules } from 'react-native';

type INavigationUpdate = {
    update: (to: string) => void
}

const NavigationUpdateModule: INavigationUpdate  = (NativeModules as any).NavigationUpdateModule;

export default NavigationUpdateModule;