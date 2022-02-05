import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [tasks, setTasks] = useState([]);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.header ? requestConfig.header : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }
                // 'https://react-http-db141-default-rtdb.firebaseio.com/tasks.json'
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    // useEffect(() => {
    //     fetchTasks();
    // }, []);

    // const taskAddHandler = (task) => {
    //     setTasks((prevTasks) => prevTasks.concat(task));
    // };
    return ({
        isLoading,
        error,
        sendRequest,
    });
};
export default useHttp;