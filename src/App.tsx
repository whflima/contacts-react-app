import React from 'react';
import './App.css';
import { Layout } from 'antd';
import SideBar from './components/SideBar';
import MyHeader from './components/MyHeader';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <MyHeader />
        <MainContent />
      </Layout>
    </Layout>
  );
}
