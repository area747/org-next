import { Component } from "react";

export default class OrgView extends Component{
    render(){
        return(
            <div id="article-wrapper" className="article-block article-wrapper">
                <div id="org-sidebar" className="ui-layout-west article-left-panel">
                    <div className="article-search">
                        <div className="input-group">
                            <input type="text" className="form-control" id="search-text"
                                placeholder="검색하세요"></input>
                            <button className="fa fa-search btn btn-success" id="btn-tree-search"></button>
                        </div>
                    </div>
                    <div>
                        <div className="grid-area">
                            <div id="tree-view"></div>
                        </div>
                    </div>
                </div>

                <div id="org-view-area" className="ui-layout-center article-right-panel">
                    <div id="org-toolbar-area3" className="org-toolbar-area3">
                        <div className="form-inline">
                            <div id="indicator-level" style={{width: '30px', margin: '0 3px 0 0'}}>100%</div>
                            <button type="button" className="btn btn-toolbar-svg" data-tool-action="zoomOut"
                                title="축소"
                                // style={{background: url('${pageContext.request.contextPath}/fonts/circle-minus.svg')}}
                                ></button>
                            <input className="org-slider" id="org-slider" type="range"></input>
                            <button type="button" className="btn btn-toolbar-svg" data-tool-action="zoomIn"
                                title="<spring:message code='lbl.zoomIn' text='_확대' />"
                                // style="background-image: url('${pageContext.request.contextPath}/fonts/circle-plus.svg');"
                                ></button>
                            <button type="button" className="btn btn-sm-outline mr-0 ml-auto"
                                data-tool-action="zoomReset" title="reset">초기화</button>
                        </div>
                    </div>
                    <div id="org-view" style={{width:'100%',height:'100%'}}></div>
                    <div id="export-org-view" style={{width:'10px',height:'10px',display: 'none'}}></div>
                </div>
            </div>
        )
    }
}