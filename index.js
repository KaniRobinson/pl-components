import * as components from './components'

console.log(components)

const PLComponents = {
  install(Vue, options = {}) {
    for (let componentKey in components) {
      const component = components[componentKey]
      Vue.component(component.name, component)
    }
  }
}

export default PLComponents
