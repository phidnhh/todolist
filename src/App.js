import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SiderTableContent from './pages/ToDoList/SiderTableContent'
import ToDoList from './pages/ToDoList/ToDoList'
import { HomeTemplate } from './templates/HomeTemplate'

export default function App() {
  return (
    <BrowserRouter>
    <LoadingComponent />
      <Switch>
        <HomeTemplate exact path='/' 
          HomeComponent={ToDoList}
          SiderTableContentComponent={SiderTableContent}  
        />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
