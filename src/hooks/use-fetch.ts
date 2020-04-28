import React from 'react';

export const useFetch = (url: string) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string>();
    const [result, setResult] = React.useState<any>();

    React.useEffect(() => {
        const doFetch = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (response.status === 404) throw new Error('not found');
                const result = await response.json();
                setResult(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        doFetch();
    }, [url]);

    return {
        loading,
        error,
        result
    }

}
