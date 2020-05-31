import assets from './assets.css'
import Vue from 'vue'
import App from './a.vue'

const a = 2;

console.log('success')
console.log(a)

const root = document.createElement('div')
document.body.appendChild(root)


new Vue({
  render: (h) => h(App)
}).$mount(root)
