import {MainPage} from 'screens/main-page';
import {Registration} from 'screens/registration';
import {Login} from 'screens/login';
import {ProductInformation} from 'screens/product-information';
import {ShoppingCart} from 'screens/shopping-cart';
import {Orders} from 'screens/orders';
import {Admin} from 'screens/admin';
import * as INITIALIZE_TYPES from './initalize-types';

export const appGraph = {
    initNode: 'main-page',
    nodes: {
        'main-page': {
            Component: MainPage,
            initialize: INITIALIZE_TYPES.ON_EACH_URL_CHANGE
        },
        registration: {
            Component: Registration,
            initialize: INITIALIZE_TYPES.FIRST_TIME_ONLY
        },
        login: {
            Component: Login,
            initialize: INITIALIZE_TYPES.FIRST_TIME_ONLY
        },
        'product-information': {
            Component: ProductInformation,
            initialize: INITIALIZE_TYPES.COMPONENT_IN_URL_CHANGE
        },
        'shopping-cart': {
            Component: ShoppingCart,
            initialize: INITIALIZE_TYPES.COMPONENT_IN_URL_CHANGE
        },
        orders: {
            Component: Orders,
            initialize: INITIALIZE_TYPES.COMPONENT_IN_URL_CHANGE
        },
        admin: {
            Component: Admin,
            initialize: INITIALIZE_TYPES.COMPONENT_IN_URL_CHANGE
        }
    },
    edges: {
        'main-page': {
            registration: {},
            login: {},
            'product-info': {},
            'shopping-cart': {},
            orders: {},
            admin: {}
        },
        'product-info': {
            registration: {},
            login: {},
            'shopping-cart': {}
        },
        'shopping-cart': {
            registration: {},
            login: {},
            orders: {}
        },
        orders: {
            registration: {},
            login: {}
        }
    }
};
