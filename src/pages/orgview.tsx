import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CheckBox} from '../component/common/checkBox';
import Inorg from '../component/layout/orgView';
import {RootState} from '../reducer';
import {setOrgTypeLevel, setUseMember} from '../reducer/orgOption';
import {loadServiceCode} from '../reducer/serviceCode';

export default function OrgView() {
    let orgTypeCd = useSelector((state: RootState) => state.ServiceCode.orgTypeCd);
    let nodeDesign = useSelector((state: RootState) => state.ServiceCode.nodeDesign);
    let orgTypeLevel = useSelector((state: RootState) => state.OrgOption.orgTypeLevel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadServiceCode());
    }, []);

    return (
        <>
            <div className="card line-none bg-trans">
                <div className="card-header bg-trans">
                    <form className="form-inline" style={{alignItems: 'flex-start'}}>
                        <div className="form-group p-r-8">
                            <div className="form-item">
                                <label>회사</label>
                                <select className="form-control w-120" name="sel_type_company" id="sel_type_company"></select>
                            </div>
                        </div>
                        <div className="form-group p-r-8">
                            <div className="form-item">
                                <label>기준일자</label>
                                <div className="orgn-calendar-div w-120">
                                    <input className="form-control orgn-date-picker" type="text" id="base_ymd"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8 ">
                            <div className="form-item bus-view">
                                <label>유형</label>
                                <div className="button-item selected" id="bus-none">
                                    <i className="ic ic-org-basic"></i>
                                    <span>기본형</span>
                                </div>
                                <div className="button-item" id="bus-right" bus-level="0004">
                                    <i className="ic ic-org-compelx"></i>
                                    <span>복합형</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8">
                            <div className="form-item">
                                <label>복합Level</label>
                                <select className="form-control w-120" id="show_org_bus_level" disabled></select>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8">
                            <div className="form-item">
                                <label>조회레벨</label>
                                <select
                                    className="form-control w-120"
                                    onChange={e => {
                                        dispatch(setOrgTypeLevel(e.target.value));
                                    }}
                                >
                                    {orgTypeCd.map(item => {
                                        return (
                                            <option key={item.code} value={item.code}>
                                                {item.codeName}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8">
                            <div className="form-item">
                                <label>디자인</label>
                                <div className="button-group" id="btn-group-template">
                                    {nodeDesign.map((item, idx) => {
                                        return (
                                            <div key={idx} className="button-item mini " code-bind={item.code}>
                                                <span>{item.codeName}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8">
                            <div className="form-item">
                                <label>조건표시</label>
                                <div className="row-group">
                                    <CheckBox
                                        name="팀원포함조회"
                                        onChange={e => {
                                            dispatch(setUseMember(e.target.checked));
                                        }}
                                    ></CheckBox>
                                    <label>
                                        <input type="checkbox" id="s-check-accept-pos" className="checkbox-temp" disabled></input>
                                        포지션
                                    </label>
                                    <label>
                                        <input type="checkbox" id="s-check-accept-empty-pos" className="checkbox-temp" disabled></input>
                                        공석
                                    </label>
                                    <label>
                                        <input type="checkbox" id="s-check-org-view-type" className="checkbox-temp"></input>
                                        결제라인
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group p-l-8 p-r-8">
                            <div className="form-item">
                                <label>파일</label>
                                <button type="button" className="btn" id="btn-print-org-show">
                                    다운로드
                                </button>
                            </div>
                        </div>

                        <div className="form-group" style={{display: 'none'}}>
                            <label>언어</label>
                            <select className="form-control" name="sel_type_lang" id="sel_type_lang">
                                <option value="">선택하세요</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className="card-body" id="compare-emp-info" style={{display: 'none'}}>
                    <div className="pull-left compare-bar">
                        <label>인사비교</label>
                        <button id="btnCompareEmpInfo" className="btn btn-primary">
                            비교
                        </button>
                    </div>

                    <div id="compare-list" className="pull-left" style={{width: '100%'}}></div>
                </div>
            </div>
            <div className="article-top">
                <div className="row">
                    <div className="col-md-8 col-md-6">
                        <div style={{position: 'relative'}}>
                            <div className="bread-crumb-header">{/* <img src="${pageContext.request.contextPath}/images/ci.png" /> */}</div>
                            <ol className="breadcrumb" style={{display: 'none'}}></ol>
                            <div className="list-group" id="bread-crumb-list" style={{position: 'absolute', display: 'none', zIndex: 999}}></div>
                        </div>
                    </div>
                    {/* tool bar */}
                    <div className="col-md-4 col-sm-6 text-right">
                        <div className="btn-group org-toolbar-area" role="group" id="org-toolbar-area" style={{padding: '5px'}}>
                            <button
                                type="button"
                                className="btn"
                                data-tool-action="resultSearch"
                                title="<spring:message code='lbl.resultSearch' text='_결과 내 검색' />"
                            >
                                <i className="org-org-search"></i>
                            </button>
                            <button
                                type="button"
                                className="btn"
                                data-tool-action="collapseAll"
                                title="<spring:message code='lbl.collapseAll' text='_전체 접기' />"
                            >
                                <i className="org-node-up"></i>
                            </button>
                            <button
                                type="button"
                                className="btn"
                                data-tool-action="expandAll"
                                title="<spring:message code='lbl.expandAll' text='_전체 펼치기' />"
                            >
                                <i className="org-node-down"></i>
                            </button>
                            <button
                                type="button"
                                className="btn ic-rotate-right"
                                data-tool-action="btnRetrieve"
                                id="btn-retrieve"
                                title="<spring:message code='lbl.search' text='_조회' />"
                            ></button>
                            <button
                                type="button"
                                className="btn"
                                data-tool-action="zoomToFit"
                                title="<spring:message code='lbl.zoomToFit' text='_FIT 사이즈' />"
                            >
                                <i className="org-full-view"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="article-wrapper" className="article-block article-wrapper">
                <div id="org-sidebar" className="ui-layout-west article-left-panel" style={{display: 'none'}}>
                    <div className="article-search">
                        <div className="input-group">
                            <input type="text" className="form-control" id="search-text" placeholder="검색하세요"></input>
                            <button className="fa fa-search btn btn-success" id="btn-tree-search"></button>
                        </div>
                    </div>
                    <div>
                        <div className="grid-area">
                            <div id="tree-view"></div>
                        </div>
                    </div>
                </div>
                <Inorg></Inorg>
            </div>
        </>
    );
}
