import React from 'react';

export function SwFilm({ id }: { id: number }) {

    const [openingCrawl, setOpeningCrawl] = React.useState();

    React.useEffect(() => {
        const doFetch = async () => {
            const response = await fetch(`https://swapi.dev/api/films/${id}/`);
            const result = await response.json();
            setOpeningCrawl(result['opening_crawl']);
        };

        doFetch();
    }, [id]);

    return <div id="board">
        <div id="content">{openingCrawl}</div>
    </div>;
}
   
