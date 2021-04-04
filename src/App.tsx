import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './components/MoviesContext'

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';




export function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <MoviesProvider>
        <SideBar />
        <Content />


      </MoviesProvider>
    </div>
  )
}