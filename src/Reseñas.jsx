function Reseñas({ usuario, fecha, comentario, valoracion }) {
    
    const colorPrimario = "bg-pink-500";
    const colorFondoClaro = "bg-gray-50";

    return (
        <div className={`py-12 px-6 ${colorFondoClaro} font-serif`}>
            
            
            
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                
                
                <div className={`p-8 ${colorPrimario} rounded-xl shadow-lg flex items-center justify-center`}>
                    <h2 className="text-3xl font-bold text-white text-center">
                       <p className="text-lg font-extrabold text-white">
                            {valoracion ? `${valoracion} / 5 ⭐️` : 'Sin valoración'} 
                        </p> 
                    </h2>
                </div>
                
                
                <div className="p-6 bg-white border-2 border-pink-500 rounded-xl shadow-xl 
                            hover:shadow-2xl transition-all duration-300">
                    
                    
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">
                            {usuario}
                        </h3>
                        
                        
                    </div>

                    
                    <p className="text-sm text-gray-500 mb-4">
                        Publicado el: {fecha}
                    </p>

                    
                    <p className="text-gray-700 italic border-l-4 border-pink-300 pl-4">
                        "{comentario}"
                    </p>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Reseñas;
