import * as scenes from './scenes';

class Router {

    getSceneByRoute(route) {
        return scenes[route.scene];
    }

    getRoutes() {
        return routes.map(s => ({id: routes.indexOf(s), ...s}));
    }
}

let router = new Router();
export default router;


const routes = [
    {
        scene: 'Dashboard',
        label: 'Dashboard',
        icon: 'assessment',
        isMenuItem: true,
    },
    {
        scene: 'Settings',
        label: 'Settings',
        icon: 'settings-applications',
        isMenuItem: true
    }
];