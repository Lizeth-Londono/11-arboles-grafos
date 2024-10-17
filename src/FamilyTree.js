import React from 'react'; // Se importa la librer�a React para poder usar JSX
import './App.css'; // Se importa CSS principal para aplicar estilos al componente

// Definimos el componente funcional FamilyTree
const FamilyTree = () => {
    // Definimos los miembros de la familia
    const familyMembers = {
        mother: { name: "Sirney Marin Tabares", relation: "Mam�" }, // La madre
        father: { name: "Edilberto Londo�o G�mez", relation: "Pap�" }, // El padre
        maternalGrandparents: [ // Abuelos maternos
            { name: "Mar�a Elena Tabares", relation: "Abuela Materna" }, // La abuela materna
            { name: "Nelson Marin", relation: "Abuelo Materno" } // El abuelo materno
        ],
        paternalGrandparents: [ // Abuelos paternos
            { name: "Mar�a Arcenire G�mez G�mez", relation: "Abuela Paterna" }, // La abuela paterna
            { name: "Roberto Londo�o G�mez", relation: "Abuelo Paterno" } // El abuelo paterno
        ],
        siblings: [ // Hermanos
            { name: "Hellen Daniela Restrepo Marin", relation: "Hermana" }, // La hermana
            { name: "Edilberto Londo�o Bohorquez", relation: "Hermano" } // El hermano
        ]
    };

    // Retornamos JSX que define la estructura del �rbol geneal�gico
    return (
        <div className="family-tree"> {/* Contenedor principal del �rbol */}
            <h2>Mi �rbol</h2> {/* T�tulo principal del �rbol */}
            <div className="parents"> {/* Secci�n de los padres */}
                <div className="parent"> {/* Contenedor para el padre */}
                    <h3>{familyMembers.father.name}</h3> {/* Nombre del padre */}
                    <p>{familyMembers.father.relation}</p> {/* La relaci�n (Pap�) */}
                </div>
                <div className="parent"> {/* Contenedor para la madre */}
                    <h3>{familyMembers.mother.name}</h3> {/* Nombre de la madre */}
                    <p>{familyMembers.mother.relation}</p> {/* La relaci�n (Mam�) */}
                </div>
            </div>
            <h3>Hermanos:</h3> {/* T�tulo para hermanos */}
            <div className="siblings"> {/* Los hermanos */}
                {familyMembers.siblings.map((sibling, index) => ( // Informacion hermanos
                    <div className="sibling" key={index}> {/* Contenedor para cada hermano */}
                        <h4>{sibling.name}</h4> {/* Nombre del hermano */}
                        <p>{sibling.relation}</p> {/* La relacion (Hermano o Hermana) */}
                    </div>
                ))}
            </div>
            <h3>Abuelos Maternos:</h3> {/* T�tulo para abuelos maternos */}
            <div className="grandparents"> {/* Secci�n para abuelos maternos */}
                {familyMembers.maternalGrandparents.map((grandparent, index) => ( // Los abuelos maternos
                    <div className="grandparent" key={index}> {/* Contenedor para cada abuelo */}
                        <h4>{grandparent.name} - {grandparent.relation}</h4> {/* El nombre y la relaci�n del abuelo */}
                    </div>
                ))}
            </div>
            <h3>Abuelos Paternos:</h3> {/* T�tulo para abuelos paternos */}
            <div className="grandparents"> {/* Secci�n para abuelos paternos */}
                {familyMembers.paternalGrandparents.map((grandparent, index) => ( // Los abuelos paternos
                    <div className="grandparent" key={index}> {/* Contenedor para cada abuelo */}
                        <h4>{grandparent.name} - {grandparent.relation}</h4> {/* El nombre y la relaci�n del abuelo */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Se exporta el componente
export default FamilyTree;
