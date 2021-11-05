declare module 'orgObject' {
    type OrgObject = {
        model: Model;
        template: Template;
        orgData?: any;
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

    type OrgNode = {
        type?: string;
        isLabel?: boolean;
        style: {};
        units: Array<any>;
    };

    export {OrgObject, OrgNode};
}

declare module 'inorg' {
    import {OrgObject} from 'orgObject';

    type INOrg = {
        nodes: (pkey: string) => Node;
        loadJson: (opt: {
            data: OrgObject;
            param?: Object;
            type?: string | 'get';
            isAsync?: boolean | true;
            append?: boolean | false;
            update?: boolean | false;
            success?: Function;
            fail?: Function;
        }) => void;
    };

    type Node = {
        addEvent: (events, handler) => any;
        alignment: (value) => any;
        bounds: () => any;
        center: (options) => any;
        children: () => any;
        clearStyle: (name) => any;
        connect: () => any;
        descendant: () => any;
        documentBounds: () => any;
        expand: (type, value, triggering, withChild) => any;
        expandable: (type, value) => any;
        expandButton: (type, property, value) => any;
        fields: (query) => any;
        filter: (func) => any;
        foreach: (func) => any;
        hasChildren: () => any;
        hasList: () => any;
        hasMembers: () => any;
        hasParent: () => any;
        hasSupporter: () => any;
        isDraw: () => any;
        isLabel: () => any;
        isMember: () => any;
        isSupporter: () => any;
        layerSpacing: (value) => any;
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

function createINOrg(id: string, option: Object): INOrg;
