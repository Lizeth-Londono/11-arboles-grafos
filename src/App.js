import React from 'react'; // Se importa la librer�a React para poder usar JSX
import './App.css'; // Se importa CSS para aplicar estilos al los componente
import FamilyTree from './FamilyTree'; // Se importa el componente FamilyTree para poder usarlo 

// Se define el componente funcional App
function App() {
    // Se retorna el JSX que define la estructura
    return (
        <div className="App"> {/* Contenedor principal */}
            <header className="App-header"> {/* Encabezado */}
                <h1>Mi �rbol Geneal�gico</h1> {/* T�tulo de la aplicaci�n */}
                <FamilyTree /> {/* Aqu� se insertaran los componente FamilyTree */}
            </header>
        </div>
    );
}

// Se exporta el componente App para que pueda ser utilizado
export default App;
