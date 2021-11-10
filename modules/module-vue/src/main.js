import {createApp} from 'vue'
import App from './App.vue'

const render = ({container} = {}) => {
    console.log('render--->')
    createApp(App).mount(container ? container.querySelector("#app") : "#app")
}
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export async function bootstrap() {

}


export async function unmount() {

}

export async function mount(props) {
    // 注册微应用实例化函数
    render(props);
}
