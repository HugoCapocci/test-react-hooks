import React from 'react';

export function SwFilm({ id }: { id: number }) {

    const [openingCrawl, setOpeningCrawl] = React.useState<string>();
    const [error, setError] = React.useState<string>();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const doFetch = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://swapi.dev/api/films/${id}/`);
                if (response.status === 404) throw new Error('movie not found');
                
                const result = await response.json();
                setOpeningCrawl(result['opening_crawl']);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        doFetch();
    }, [id]);

    return <div>
        { loading && <div>"loading..."</div> }
        { !error && ! loading &&
            <div id="board">
                <div id="content">{openingCrawl}</div>
            </div>
        }
        { error && 
            <div className="error">Error occurs: {error}</div>
        }
    </div>;
}
   
