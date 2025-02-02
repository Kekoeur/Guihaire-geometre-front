import { useEffect, useState } from "react";

// Le type générique T permet de spécifier la forme des données attendues
const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const json = await res.json();

                setData(json);
                setLoading(false);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e);
                } else {
                    setError(new Error("An unknown error occurred"));
                }
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, error, data };
};

export default useFetch;
