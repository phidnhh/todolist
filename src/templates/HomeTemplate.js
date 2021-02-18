import React from "react";
import { Route } from "react-router-dom";
import bgToDoList from "./../assets/ToDoList/bgToDoList.jpg";
import logo from "./../assets/ToDoList/logo-phidndev.png";

import { Layout } from 'antd';
const { Sider } = Layout;

export const HomeTemplate = (props) => {
  let { HomeComponent, SiderTableContentComponent, ...restRoute } = props;
  return <Route { ...restRoute } render={(propsRoute) => {
    return <>
      <Layout>
        <Sider width={window.innerWidth/2} style={{       
            backgroundImage: `url('${bgToDoList}')`,
            backgroundRepeat: "repeat-y"
          }}>
          <img id="img-logo-sider" src={logo} alt="logo phidndev"/>
          <SiderTableContentComponent/>
        </Sider>        
        <Layout>
          <HomeComponent/>
        </Layout>
      </Layout>  
    </>
  }}/>
}
