import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import ToDoList from './pages/ToDoList/ToDoList'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/todolist' component={ToDoList} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
