import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reducer';
import {setOrgOption} from '../../../reducer/orgOption';
import Inorg from './Inorg';

export default function OrgView() {
    let orgOption = useSelector((state: RootState) => state.OrgOption);
    const dispatch = useDispatch();
    return (
        <div id="org-view-area" className="ui-layout-center flex-container">
            <div id="org-toolbar-area3" className="org-toolbar-area3">
                <div className="form-inline">
                    <div id="indicator-level" style={{width: '30px', margin: '0 3px 0 0'}}>
                        {Math.floor(orgOption.viewSize * 100)}%
                    </div>
                    <button
                        type="button"
                        className="btn btn-toolbar-svg"
                        data-tool-action="zoomOut"
                        title="축소"
                        style={{backgroundImage: 'url(/images/circle-minus.svg)'}}
                        onClick={e => {
                            orgOption.viewSize = orgOption.viewSize - 0.1;
                            dispatch(setOrgOption(orgOption));
                        }}
                    ></button>
                    <input
                        className="org-slider"
                        value={orgOption.viewSize * 100}
                        id="org-slider"
                        type="range"
                        min="50"
                        max="150"
                        onChange={e => {
                            orgOption.viewSize = parseInt(e.target.value) / 100;
                            dispatch(setOrgOption(orgOption));
                        }}
                    />
                    <button
                        type="button"
                        className="btn btn-toolbar-svg"
                        data-tool-action="zoomIn"
                        title="확대"
                        style={{backgroundImage: 'url("/images/circle-plus.svg")'}}
                        onClick={e => {
                            orgOption.viewSize = orgOption.viewSize + 0.1;
                            dispatch(setOrgOption(orgOption));
                        }}
                    ></button>
                    <button type="button" className="btn btn-sm-outline mr-0 ml-auto" data-tool-action="zoomReset" title="reset">
                        초기화
                    </button>
                </div>
            </div>
            <Inorg></Inorg>
            <div id="export-org-view" style={{width: '10px', height: '10px', display: 'none'}}></div>
        </div>
    );
}
