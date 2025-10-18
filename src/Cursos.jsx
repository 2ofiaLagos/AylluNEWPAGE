import datos from './data.json';
import { useState } from 'react';

function Cursos() {
    
    const [idioma, setIdioma] = useState('Todos');

   
    const cursosFiltrados = datos.servicios_idiomas.filter(curso => (
       
        idioma === 'Todos' 
            ? true
            : curso.idiomas_ofrecidos.includes(idioma) 
    ));
   
    const todosLosIdiomasAnidados = datos.servicios_idiomas.map(c => c.idiomas_ofrecidos);
    const todosLosIdiomas = todosLosIdiomasAnidados.reduce((acc, current) => acc.concat(current), []);
    
    
    const idiomasUnicos = ['Todos', ...new Set(todosLosIdiomas)].sort();
    
    return (
        <>
            <div className='relative w-full h-96'>
                
                <img 
                    className='w-full h-full object-cover' 
                    src="https://images.pexels.com/photos/14381689/pexels-photo-14381689.jpeg?cs=srgb&dl=pexels-solyartphotos-14381689.jpg&fm=jpg" 
                    alt="Escritorio de estudio" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                    <h1 className="text-3xl font-bold text-center text-pink-500 bg-white/90 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
                        Cursos de Idiomas Nativos del Perú
                    </h1>
                </div>
            </div> 

            <div className="min-h-screen bg-gray-50 py-10 px-6 font-serif">
                
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nuestro Catálogo</h2>
                
                
                <div className="mb-8">
                    <label htmlFor="filtroIdioma" className="block text-lg font-medium text-gray-700 mb-2">Filtrar por Idioma:</label>
                    <select 
                        id="filtroIdioma"
                        value={idioma}
                        onChange={(e) => setIdioma(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg text-gray-700 shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    >
                        {idiomasUnicos.map(lang => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {cursosFiltrados.map((curso) => (
                        <div
                            key={curso.id}
                            className="bg-pink-500 border-2 border-white rounded-xl overflow-hidden shadow-md 
                                        hover:shadow-xl hover:-translate-y-1 hover:border-white
                                        transition-all duration-300 ease-in-out"
                        >
                            
                            
                            <div className="p-6">
                                <img src={curso.imagen} alt="Descripción del curso" />
                                <h3 className="text-2xl font-semibold text-white mb-3">{curso.nombre}</h3>
                                
                                <p className='text-white mt-3'><span className="font-medium text-white">Modalidad:</span> {curso.modalidad}</p>
                                <p className='text-white mt-3'><span className="font-medium text-white">Duración del ciclo:</span> {curso.duracion_ciclo}</p>

                                    <p className='text-white'><span className="font-medium text-white">Ciudad sede:</span> {curso.ciudad_sede}</p>
                                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cursos;
