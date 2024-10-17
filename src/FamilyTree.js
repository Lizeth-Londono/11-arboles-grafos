import React from 'react'; // Se importa la librería React para poder usar JSX
import './App.css'; // Se importa CSS principal para aplicar estilos al componente

// Definimos el componente funcional FamilyTree
const FamilyTree = () => {
    // Definimos los miembros de la familia
    const familyMembers = {
        mother: { name: "Sirney Marin Tabares", relation: "Mamá" }, // La madre
        father: { name: "Edilberto Londoño Gómez", relation: "Papá" }, // El padre
        maternalGrandparents: [ // Abuelos maternos
            { name: "María Elena Tabares", relation: "Abuela Materna" }, // La abuela materna
            { name: "Nelson Marin", relation: "Abuelo Materno" } // El abuelo materno
        ],
        paternalGrandparents: [ // Abuelos paternos
            { name: "María Arcenire Gómez Gómez", relation: "Abuela Paterna" }, // La abuela paterna
            { name: "Roberto Londoño Gómez", relation: "Abuelo Paterno" } // El abuelo paterno
        ],
        siblings: [ // Hermanos
            { name: "Hellen Daniela Restrepo Marin", relation: "Hermana" }, // La hermana
            { name: "Edilberto Londoño Bohorquez", relation: "Hermano" } // El hermano
        ]
    };

    // Retornamos JSX que define la estructura del árbol genealógico
    return (
        <div className="family-tree"> {/* Contenedor principal del árbol */}
            <h2>Mi Árbol</h2> {/* Título principal del árbol */}
            <div className="parents"> {/* Sección de los padres */}
                <div className="parent"> {/* Contenedor para el padre */}
                    <h3>{familyMembers.father.name}</h3> {/* Nombre del padre */}
                    <p>{familyMembers.father.relation}</p> {/* La relación (Papá) */}
                </div>
                <div className="parent"> {/* Contenedor para la madre */}
                    <h3>{familyMembers.mother.name}</h3> {/* Nombre de la madre */}
                    <p>{familyMembers.mother.relation}</p> {/* La relación (Mamá) */}
                </div>
            </div>
            <h3>Hermanos:</h3> {/* Título para hermanos */}
            <div className="siblings"> {/* Los hermanos */}
                {familyMembers.siblings.map((sibling, index) => ( // Informacion hermanos
                    <div className="sibling" key={index}> {/* Contenedor para cada hermano */}
                        <h4>{sibling.name}</h4> {/* Nombre del hermano */}
                        <p>{sibling.relation}</p> {/* La relacion (Hermano o Hermana) */}
                    </div>
                ))}
            </div>
            <h3>Abuelos Maternos:</h3> {/* Título para abuelos maternos */}
            <div className="grandparents"> {/* Sección para abuelos maternos */}
                {familyMembers.maternalGrandparents.map((grandparent, index) => ( // Los abuelos maternos
                    <div className="grandparent" key={index}> {/* Contenedor para cada abuelo */}
                        <h4>{grandparent.name} - {grandparent.relation}</h4> {/* El nombre y la relación del abuelo */}
                    </div>
                ))}
            </div>
            <h3>Abuelos Paternos:</h3> {/* Título para abuelos paternos */}
            <div className="grandparents"> {/* Sección para abuelos paternos */}
                {familyMembers.paternalGrandparents.map((grandparent, index) => ( // Los abuelos paternos
                    <div className="grandparent" key={index}> {/* Contenedor para cada abuelo */}
                        <h4>{grandparent.name} - {grandparent.relation}</h4> {/* El nombre y la relación del abuelo */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Se exporta el componente
export default FamilyTree;
