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
    let useMember = useSelector((state: RootState) => state.OrgOption.useMember);
    let viewSize = useSelector((state: RootState) => state.OrgOption.viewSize);
    let orgTypeLevel = useSelector((state: RootState) => state.OrgOption.orgTypeLevel);
    let inorg = useRef<INOrg>();
    const dispatch = useDispatch();

    useInorg(() => {
        inorg.current = createINOrg('viewOrg', {});
        dispatch(loadOrgData());
    });

    useEffect(() => {
        org.orgData?.reduceRight((acc, item, i, arr) => {
            if (item.fields.orgTypeCd > orgTypeLevel) {
                arr.splice(i, 1);
            }
            return acc;
        });
        org.orgData?.forEach((item, i, arr) => {
            item.template = useMember ? item.template.concat('List') : item.template;
        });
        inorg.current?.loadJson({data: org});
    }, [org]);

    useEffect(() => {
        dispatch(loadOrgData());
    }, [useMember, orgTypeLevel]);

    useEffect(() => {
        inorg.current?.scale(viewSize);
    }, [viewSize]);

    return (
        <div style={{height: '100%'}}>
            <div id="viewOrg" style={{width: '100%', height: '100%'}}></div>
        </div>
    );
}
