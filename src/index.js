import boot from 'redux-boot'
import webserver, { HTTP_REQUEST } from 'redux-boot-webserver'
import rest from './modules/rest'
import storage from './modules/storage'

const initialState = {
  variables: { port: 3020 }
}

const modules = [
  webserver,
  storage,
  rest
]

const app = boot(initialState, modules)
  .then(({store, action}) => {
    console.log('Your server is online!')
  })
