import React from 'react';
import { useFetch } from './hooks/use-fetch';

export function SwFilm({ id }: { id: number }) {
    const { loading, error, result } = useFetch(`https://swapi.dev/api/films/${id}/`);

    return <div>
        { loading && <div>"loading..."</div> }
        { !error && ! loading && result &&
            <div id="board">
                <div id="content">{result['opening_crawl']}</div>
            </div>
        }
        { error && 
            <div className="error">Error occurs: {error}</div>
        }
    </div>;
}
   
