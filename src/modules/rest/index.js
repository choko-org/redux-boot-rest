import { HTTP_REQUEST } from 'redux-boot-webserver'

import getData from './actions/getData'

export default {

  middleware: {

    [HTTP_REQUEST]: store => next => action => {
      const nextResult = next(action)
      const { payload: { db } } = store.dispatch(getData())
      const { response } = action.payload

      db.push(db.length)

      response.statusCode = 200
      response.setHeader('Content-Type', 'text/plain')

      response.end(JSON.stringify(db))

      return nextResult
    }

  }

}
