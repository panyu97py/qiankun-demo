import {createApp} from 'vue'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun';
import {name as MODULE_VUE_NAME, port as MODULE_VUE_PORT} from '@modules/module-vue/package'

createApp(App).mount('#app')

registerMicroApps([
    {
        name: MODULE_VUE_NAME, // app name registered
        entry: `//localhost:${MODULE_VUE_PORT}`,
        container: '#container',
        activeRule: '/',
    },
]);

start();

