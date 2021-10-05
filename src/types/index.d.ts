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
