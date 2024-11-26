import React from 'react';

const TravisScott = () => {
  return (
    <div className="text-center p-8 bg-gray-100 rounded-lg shadow-lg w-4/5 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">Travis Scott</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Travis_Scott_2019.jpg"
        alt="Travis Scott"
        className="w-48 h-48 rounded-full mt-8 mx-auto"
      />
      <p className="text-lg text-gray-600 mt-8 leading-relaxed max-w-4xl mx-auto">
        Travis Scott, cuyo nombre real es Jacques Webster, es un famoso rapero, cantante y productor estadounidense.
        Nació el 30 de abril de 1992 en Houston, Texas. Es conocido por su estilo único que mezcla el hip hop con
        sonidos atmosféricos y su increíble puesta en escena en sus conciertos. Ha lanzado varios álbumes aclamados,
        y es una de las figuras más influyentes en la música moderna.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-12">Algunas canciones populares:</h2>
      <ul className="list-none space-y-2 mt-4 text-gray-700 text-lg">
        <li>Astroworld</li>
        <li>SICKO MODE</li>
        <li>Goosebumps</li>
        <li>Highest in the Room</li>
        <li>Stop Trying to Be God</li>
      </ul>
    </div>
  );
};

export default TravisScott;
