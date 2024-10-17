import React from 'react'; // Se importa la librería React para poder usar JSX
import './App.css'; // Se importa CSS para aplicar estilos al los componente
import FamilyTree from './FamilyTree'; // Se importa el componente FamilyTree para poder usarlo 

// Se define el componente funcional App
function App() {
    // Se retorna el JSX que define la estructura
    return (
        <div className="App"> {/* Contenedor principal */}
            <header className="App-header"> {/* Encabezado */}
                <h1>Mi Árbol Genealógico</h1> {/* Título de la aplicación */}
                <FamilyTree /> {/* Aquí se insertaran los componente FamilyTree */}
            </header>
        </div>
    );
}

// Se exporta el componente App para que pueda ser utilizado
export default App;
