import { createStore } from 'vuex'

// import.meta.glob 动态导入
// import.meta.globEager 直接引入
const moduleFiles = import.meta.globEager('./modules/*.ts')

const getModules = () => {
  return Object.keys(moduleFiles).reduce((modules, path) => {
    const name = path.replace(/(\.\/modules\/|\.ts)/g, '') //.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
    return {
      ...modules,
      [name]: {
        namespaced: true,
        ...moduleFiles[path].default,
      },
    }
  }, {})
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: getModules(),
})
