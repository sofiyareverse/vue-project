import { createApp } from 'vue'
import App from '@/App.vue'
import component from '@/components/UI'
import router from '@/router/router'
import store from '@/store/index'
import directives from '@/directives'

const app = createApp(App)
component.forEach(component => { 
  app.component(component.name, component)
})

directives.forEach(directive => {
  app.directive(directive.name, directive)
})

app.use(router)
   .use(store)
   .mount('#app')
