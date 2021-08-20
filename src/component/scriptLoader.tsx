import React from 'react';

const useScript = (scriptUrl: string, scriptId: string, callback?: () => void) => {
    React.useEffect(() => {
        const existingScript = document.getElementById(scriptId);

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = scriptUrl;
            script.id = scriptId;
            document.body.appendChild(script);

            script.onload = () => {
                if (callback) {
                    callback();
                }
            };
        }
        // [] 배열의 상태값이 바뀔때 마다 useEffect는 반복 실행된다.
    }, [scriptUrl, scriptId]);
};

export default useScript;
