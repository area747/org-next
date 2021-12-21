declare module 'orgObject' {
    type OrgObject = {
        model: Model;
        template: Template;
        orgData?: Array<OrgData>;
        etcData?: any;
        error?: any;
    };

    type Model = {
        pkey: string;
        rkey?: string;
        mkey?: string;
        order?: Array<string>;
        fields: Array<{
            name: string;
            type: string;
            alias: string;
        }>;
    };

    type Template = {
        nodes: {
            [name: string]: OrgNode;
        };
        links?: {};
    };

    type OrgData = {
        fields: {
            [name: string]: any;
        };
        template: string;
        link?: any;
        layout?: any;
        collapsed?: boolean;
    };

    type OrgNode = {
        type?: string;
        isLabel?: boolean;
        style: {};
        units: Array<any>;
    };

    export {OrgObject, Model, Template, OrgData, OrgNode};
}

declare module 'inorg' {
    import {OrgObject} from 'orgObject';

    type INOrg = {
        /**
         * org object의 드래그 선택 표현 허용 여부 설정 또는 확인
         */
        allowDragSelect(value: boolean): INOrg;
        allowDragSelect(): boolean;
        /**
         * node 선택시 부모 노드와 연결된 링크가 임의의 노드 뒤에 가려져 있을 경우
         * 노드 위로 표현되게 할지 여부
         */
        allowFloatLink(): boolean;
        allowFloatLink(value: boolean): INOrg;
        allowScrollbar(): boolean;
        allowScrollbar(value: boolean): INOrg;
        allowSelect(): boolean;
        allowSelect(value: boolean): INOrg;
        autoScale(): string;
        autoScale(value: string): INOrg;
        bounds(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        clear(): INOrg;
        clearSelection(): INOrg;
        contentAlign(): string;
        contentAlign(value: string): INOrg;
        destroy(): void;
        dragging(): {
            isDragging: boolean;
            data: object;
        };
        dragging(options: {isDragging: boolean; data: object}): INOrg;
        expandButton(): boolean;
        expandButton(value: boolean): INOrg;
        focus(): INOrg;
        hideWatermark(): INOrg;
        loadFromFile(options?: {startLoad(...param: any); endLoad(...param: any)}): INOrg;
        loadJson(options: {
            data: OrgObject;
            url?: string;
            param?: Object;
            type?: string = 'get';
            isAsync?: boolean = true;
            append?: boolean = false;
            update?: boolean = false;
            success?(...params: any);
            fail?(...params: any);
        }): INOrg;
        padding(): string;
        padding(value: string): INOrg;
        releaseLayout(): INOrg;
        saveAsExcel(options: any): void;
        saveAsImage(options: any): void;
        saveAsJson(options: {filename?: string = 'inorg'; startSave?(...params: any); endSave?(...params: any)}): void;
        scale(): number | string;
        scale(value: number | 'fit' | 'fullfit' | 'fitw' | 'fith'): INOrg;
        showWatermark(options: any): void;
        suspendLayout(): INOrg;
        toJSON(): object;
        viewportBounds(): {x: number; y: number; width: number; height: number};
        wheelAction(): 'scroll' | 'zoom';
        wheelAction(value: 'scroll' | 'zoom');
        zoomFactor(): number;
        zoomFactor(value: number): INOrg;
        zoomIn(centerToSelected: boolean = false): INOrg;
        zoomOut(centerToSelected: boolean = false): INOrg;

        nodes(pkey: string): Node;
    };

    type Node = {
        addEvent(event: 'mousedown' | 'mouseup' | 'click' | 'mouseover' | 'mouseenter' | 'mouseleave', handler: (...params) => any): Node;
        alignment(): 'bus' | 'busl' | 'busr' | 'wc' | 'wl' | 'wr';
        alignment(value: 'bus' | 'busl' | 'busr' | 'wc' | 'wl' | 'wr'): INOrg;
        bounds(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        center(options: {
            alignment?: 'center' | 'auto' | 'topCenter' = 'center';
            zoomToFit?: boolean = false;
            exceptListBounds?: boolean;
            delay?: number = 0;
        }): Node;
        center(options: number): Node;
        children(): Node;
        clearStyle(name: string): Node;
        connect(): Node;
        descendant(): Node;
        documentBounds(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        expand(type, value, triggering, withChild): {type: 'to' | 'from'; value?: boolean; triggering?: boolean = false; withChild?: boolean = false};
        expandable(): boolean;
        expandable(type?: 'to' | 'from', value?: boolean): Node;
        expandButton(type?: 'to' | 'from', property?: {visible: boolean; expand: boolean}, value?): Node;

        fields(query: string): object;

        filter(func: (...params) => any): Array<object>;
        foreach(func: (...params) => any);
        hasChildren(): Node;
        hasList(): boolean;
        hasMembers(): boolean;
        hasParent(): boolean;
        hasSupporter(): boolean;
        isDraw(): boolean;
        isLabel(): boolean;
        isMember(): boolean;
        isSupporter(): boolean;
        layerSpacing(): boolean;
        layerSpacing(value: number): Node;
        level: (level) => any;
        makeImage: () => any;
        margin: (value) => any;
        memberParent: () => any;
        members: () => any;
        mkey: (value) => any;
        nodeSpacing: (value) => any;
        parent: () => any;
        pkey: () => any;
        reach: () => any;
        remove: () => any;
        removeEvent: (events, handler) => any;
        rkey: (value) => any;
        root: (visibleOnly) => any;
        rowSpacing: (value) => any;
        select: (value, delay, keep) => any;
        sibling: () => any;
        style: (name, value) => any;
        supporter: (value) => any;
        template: (value) => any;
        toJSON: () => any;
        tree: (query, depth) => any;
        treeLevel: (visibleOnly) => any;
        trigger: (events, data) => any;
        visible: (value) => any;
        wrapWidth: (value) => any;
    };
}

declare const createINOrg = (name: string, opt: any) => INOrg;
