import * as components from './components'
import * as directives from './directives'

const PLComponents = {
  install(Vue, options = {}) {
    for (let componentKey in components) {
      const component = components[componentKey]
      Vue.component(component.name, component)
    }

    for (let directiveKey in directives) {
      const directive = directives[directiveKey]
      Vue.directive(directive.name, directive)
    }
  }
}

export default PLComponents
