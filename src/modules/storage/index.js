import { HTTP_REQUEST } from 'redux-boot-webserver'

export default {

  services: services => next => {
    const db = []

    const servicesResult = next({
      ...services,
      db
    })

    return servicesResult
  },

  enhancer: createStore => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer)
    const db = []

    const dispatch = action => {
      if (typeof action === 'function') {
        return store.dispatch(action({ db }))
      }

      return store.dispatch(action)
    }

    return {
      ...store,
      dispatch
    }
  }

}
