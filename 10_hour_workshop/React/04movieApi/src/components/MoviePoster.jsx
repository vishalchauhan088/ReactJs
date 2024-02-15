
import React from 'react';
const placeholderImage = 'https://via.placeholder.com/300';


function MoviePoster({ poster, title, type, year }) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            {
                poster !=="N/A"?(
                    <img className="w-full" src={poster} alt={title} />
                ):
                (
                    <img className="w-full" src={placeholderImage} alt={title} />
                )
            }
            {/* <img className="w-full" src={poster || placeholderImage} alt={title} /> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">Type: {type}</p>
                <p className="text-gray-700 text-base">Year: {year}</p>
            </div>
        </div>
    );
}

export default MoviePoster;
