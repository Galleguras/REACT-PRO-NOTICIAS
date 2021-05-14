import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=747226819bdd4db7a020cbb27f3bfe02&apiKey=747226819bdd4db7a020cbb27f3bfe02`;
     
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias.articles);
     
      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
