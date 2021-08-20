import React from 'react';
import useScript from './scriptLoader';

function new_script(src: string) {
    return new Promise<void>(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });
        document.body.appendChild(script);
    });
}
// Promise Interface can ensure load the script only once.
const my_script = new_script('http://example.com/aaa.js');

export default function Inorg() {
    const createOrg = () => {
        createINOrg('viewOrg', {});
    };

    useScript('/lib/softin.js', 'softin');
    useScript('/lib/inorginfo.js', 'inorginfo');
    useScript('/lib/inorg.js', 'inorg', createOrg);

    return (
        <div>
            <div id="viewOrg" style={{width: '100%', height: '100%'}}></div>
        </div>
    );
}

declare function createINOrg(id: string, option: Object): any;
