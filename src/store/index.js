/* global process */

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'
import { apiMiddleware } from 'redux-api-middleware'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { hashHistory as history } from 'react-router'

import reducers from 'reducers'

const middleware = [apiMiddleware, routerMiddleware(history), thunk, multi, promiseMiddleware]

if (process.env.REACT_APP_ENV !== 'production') {
  middleware.push(
    createLogger({
      collapsed: true,
      timestamp: false
    })
  )
}

export default createStore(reducers,
	applyMiddleware(...middleware)
)
