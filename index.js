import * as components from './components'

const PlComponents = {
  install(Vue, options = {}) {
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  }
}

export default PlComponents

export * from './components'
