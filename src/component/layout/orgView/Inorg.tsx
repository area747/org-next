import {INOrg, Node} from 'inorg';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reducer';
import {loadOrgData, setOrgObject} from '../../../reducer/orgObject';
import useInorg from '../../common/hook/useInorg';

// function new_script(src: string) {
//     return new Promise<void>(function (resolve, reject) {
//         var script = document.createElement('script');
//         script.src = src;
//         script.addEventListener('load', function () {
//             resolve();
//         });
//         script.addEventListener('error', function (e) {
//             reject(e);
//         });
//         document.body.appendChild(script);
//     });
// }
// // Promise Interface can ensure load the script only once.
// const my_script = new_script('http://example.com/aaa.js');
export default function InorgContainer() {
    let org = useSelector((state: RootState) => state.OrgObject);
    let orgOption = useSelector((state: RootState) => state.OrgOption);
    let inorg = useRef<INOrg>();
    const dispatch = useDispatch();

    useInorg(() => {
        inorg.current = createINOrg('viewOrg', {});
        dispatch(loadOrgData());
    });

    useEffect(() => {
        inorg.current?.loadJson({data: org});
    }, [org]);

    useEffect(() => {
        org.orgData?.forEach((item, i, arr) => {
            item.template = orgOption.useMember ? 'photoTypeList' : 'photoType';
        });
        inorg.current?.scale(orgOption.viewSize);
        dispatch(setOrgObject(org));
    }, [orgOption]);

    return (
        <div style={{height: '100%'}}>
            <div id="viewOrg" style={{width: '100%', height: '100%'}}></div>
        </div>
    );
}
