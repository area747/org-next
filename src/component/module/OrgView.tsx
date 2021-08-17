import {Component} from 'react';
import Inorg from '../Inorg';

export default class OrgView extends Component {
    render() {
        return (
            <div id="org-view-area" className="ui-layout-center article-right-panel">
                <div id="org-toolbar-area3" className="org-toolbar-area3">
                    <div className="form-inline">
                        <div id="indicator-level" style={{width: '30px', margin: '0 3px 0 0'}}>
                            100%
                        </div>
                        <button
                            type="button"
                            className="btn btn-toolbar-svg"
                            data-tool-action="zoomOut"
                            title="축소"
                            style={{backgroundImage: 'url(/images/circle-minus.svg)'}}
                        ></button>
                        <input className="org-slider" id="org-slider" type="range"></input>
                        <button
                            type="button"
                            className="btn btn-toolbar-svg"
                            data-tool-action="zoomIn"
                            title="확대"
                            style={{backgroundImage: 'url("/images/circle-plus.svg")'}}
                        ></button>
                        <button type="button" className="btn btn-sm-outline mr-0 ml-auto" data-tool-action="zoomReset" title="reset">
                            초기화
                        </button>
                    </div>
                </div>
                {/* <div id="org-view" style={{width: '100%', height: '100%'}}></div> */}
                <Inorg></Inorg>
                <div id="export-org-view" style={{width: '10px', height: '10px', display: 'none'}}></div>
            </div>
        );
    }
}
