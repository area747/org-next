import {OrgObject} from 'orgObject';
import {INOrg, Node} from 'inorg';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reducer';
import {setOrgObject} from '../reducer/orgObject';
import useScript from './scriptLoader';

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
const orgData: OrgObject = {
    model: {
        pkey: 'pkey',
        rkey: 'rkey',
        order: ['orgSortOrder', 'empSortOrder'],
        fields: [],
    },
    template: {
        nodes: {
            photoType: {
                units: [
                    {
                        type: 'text',
                        name: 'orgNode',
                        style: {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            borderRadius: 6,
                            borderWidth: 0,
                            height: 153,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgType',
                        name: 'orgType',
                        style: {
                            backgroundColor: '#68D6E8',
                            borderColor: '#FFFFFF',
                            borderRadius: '6 6 0 0',
                            height: 31,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgNm',
                        relation: 'orgType',
                        relationAlign: 'topLeft',
                        breakAll: true,
                        style: {
                            backgroundColor: 'lightGray',
                            fontColor: '#56606B',
                            fontSize: 13,
                            height: 27,
                            width: 113,
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            position: '0 5',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'empPhoto',
                        name: 'empPhoto',
                        style: {
                            borderColor: 'transparent',
                            height: 63,
                            width: 55,
                            position: '29 44',
                            borderRadius: 5,
                            borderWidth: 3,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'dual',
                        relation: 'empPhoto',
                        relationAlign: 'bottomRight',
                        style: {
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            backgroundColor: 'green',
                            fontColor: '#FFFFFF',
                            fontSize: 8,
                            borderRadius: 9,
                            height: 14,
                            width: 14,
                            position: '-11 -11',
                            display: false,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'positionNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '5 113',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'empNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '57 113',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'btn02',
                        relation: 'orgNode',
                        relationAlign: 'bottomRight',
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontSize: 11,
                            height: 12,
                            width: 12,
                            position: '-18 -18',
                            cursor: 'pointer',
                            display: false,
                        },
                    },
                ],
                style: {
                    selectionBorderWidth: 1,
                    selectionBorderColor: '#484D52',
                    borderRadius: 5,
                },
            },
            horizontalType: {
                units: [
                    {
                        type: 'text',
                        name: 'orgNode',
                        style: {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            borderRadius: 6,
                            borderWidth: 0,
                            height: 74,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgType',
                        name: 'orgType',
                        style: {
                            backgroundColor: '#68D6E8',
                            borderColor: '#FFFFFF',
                            borderRadius: '6 6 0 0',
                            height: 32,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgNm',
                        relation: 'orgType',
                        relationAlign: 'topLeft',
                        breakAll: true,
                        style: {
                            backgroundColor: 'lightGray',
                            fontColor: '#56606B',
                            fontSize: 13,
                            height: 27,
                            width: 113,
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            position: '0 5',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'dual',
                        relation: 'orgNode',
                        relationAlign: 'bottomLeft',
                        style: {
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            backgroundColor: 'green',
                            fontColor: '#FFFFFF',
                            fontSize: 8,
                            borderRadius: 9,
                            height: 14,
                            width: 14,
                            position: '3 -18',
                            display: false,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'empNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '5 38',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'positionNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '57 38',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'btn02',
                        relation: 'orgNode',
                        relationAlign: 'bottomRight',
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontSize: 11,
                            height: 12,
                            width: 12,
                            position: '-18 -18',
                            cursor: 'pointer',
                            display: false,
                        },
                    },
                ],
                style: {
                    selectionBorderWidth: 1,
                    selectionBorderColor: '#484D52',
                    borderRadius: 5,
                },
            },
            photoTypeList: {
                units: [
                    {
                        type: 'text',
                        name: 'orgNode',
                        style: {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            borderRadius: 6,
                            borderWidth: 0,
                            height: 153,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgType',
                        name: 'orgType',
                        style: {
                            backgroundColor: '#68D6E8',
                            borderColor: '#FFFFFF',
                            borderRadius: '6 6 0 0',
                            height: 31,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgNm',
                        relation: 'orgType',
                        relationAlign: 'topLeft',
                        breakAll: true,
                        style: {
                            backgroundColor: 'lightGray',
                            fontColor: '#56606B',
                            fontSize: 13,
                            height: 27,
                            width: 113,
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            position: '0 5',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'empPhoto',
                        name: 'empPhoto',
                        style: {
                            borderColor: 'transparent',
                            height: 63,
                            width: 55,
                            position: '29 44',
                            borderRadius: 5,
                            borderWidth: 3,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'dual',
                        relation: 'empPhoto',
                        relationAlign: 'bottomRight',
                        style: {
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            backgroundColor: 'green',
                            fontColor: '#FFFFFF',
                            fontSize: 8,
                            borderRadius: 9,
                            height: 14,
                            width: 14,
                            position: '-11 -11',
                            display: false,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'positionNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '5 113',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'empNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '57 113',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'btn02',
                        relation: 'orgNode',
                        relationAlign: 'bottomRight',
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontSize: 11,
                            height: 12,
                            width: 12,
                            position: '-18 -18',
                            cursor: 'pointer',
                            display: false,
                        },
                    },
                    {
                        units: [
                            {
                                type: 'text',
                                binding: 'listItem',
                                name: 'listItem',
                                style: {
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#A5B3C2',
                                    borderRadius: 3,
                                    borderWidth: 1,
                                    height: 51,
                                    width: 113,
                                    position: '0 1',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'positionNm',
                                relation: 'listItem',
                                relationAlign: 'topLeft',
                                breakAll: true,
                                style: {
                                    backgroundColor: '#E7F6FA',
                                    borderColor: 'transparent',
                                    fontSize: 12,
                                    height: 23,
                                    width: 111,
                                    position: '1 1',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#56606B',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'posNm',
                                relation: 'listItem',
                                relationAlign: 'topLeft',
                                breakAll: true,
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    fontSize: 11,
                                    height: 18,
                                    width: 45,
                                    position: '12 28',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#6B7682',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'empNm',
                                relation: 'listItem',
                                relationAlign: 'topCenter',
                                breakAll: true,
                                horizontalAlign: 'center',
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    fontSize: 11,
                                    height: 18,
                                    width: 45,
                                    position: '1 28',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#6B7682',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'dual',
                                relation: 'listItem',
                                relationAlign: 'bottomRight',
                                style: {
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF',
                                    backgroundColor: 'green',
                                    fontColor: '#FFFFFF',
                                    fontSize: 8,
                                    borderRadius: 9,
                                    height: 14,
                                    width: 14,
                                    position: '-19 -22',
                                    display: false,
                                },
                            },
                            {
                                type: 'text',
                                binding: 'listSpace',
                                relation: 'listItem',
                                relationAlign: 'bottomLeft',
                                style: {
                                    borderColor: 'transparent',
                                    backgroundColor: 'transparent',
                                    borderRadius: 3,
                                    borderWidth: 0,
                                    height: 1,
                                    width: 1,
                                },
                            },
                        ],
                        type: 'list',
                        relation: 'orgNode',
                        relationAlign: 'bottomLeft',
                        style: {
                            position: '0 2',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            width: 113,
                            backgroundColor: 'transparent',
                            selectionBorderWidth: 1,
                            selectionBorderColor: '#484D52',
                        },
                    },
                ],
                style: {
                    selectionBorderWidth: 1,
                    selectionBorderColor: '#484D52',
                    borderRadius: 5,
                },
            },
            horizontalTypeList: {
                units: [
                    {
                        type: 'text',
                        name: 'orgNode',
                        style: {
                            backgroundColor: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            borderRadius: 6,
                            borderWidth: 0,
                            height: 74,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgType',
                        name: 'orgType',
                        style: {
                            backgroundColor: '#68D6E8',
                            borderColor: '#FFFFFF',
                            borderRadius: '6 6 0 0',
                            height: 32,
                            width: 113,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'orgNm',
                        relation: 'orgType',
                        relationAlign: 'topLeft',
                        breakAll: true,
                        style: {
                            backgroundColor: 'lightGray',
                            fontColor: '#56606B',
                            fontSize: 13,
                            height: 27,
                            width: 113,
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            position: '0 5',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'dual',
                        relation: 'orgNode',
                        relationAlign: 'bottomLeft',
                        style: {
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            backgroundColor: 'green',
                            fontColor: '#FFFFFF',
                            fontSize: 8,
                            borderRadius: 9,
                            height: 14,
                            width: 14,
                            position: '3 -18',
                            display: false,
                        },
                    },
                    {
                        type: 'text',
                        binding: 'empNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '5 38',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'text',
                        binding: 'positionNm',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            fontSize: 11,
                            height: 18,
                            width: 51,
                            position: '57 38',
                            cursor: 'default',
                            fontWeight: 'normal',
                            fontColor: '#6B7682',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'btn02',
                        relation: 'orgNode',
                        relationAlign: 'bottomRight',
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontSize: 11,
                            height: 12,
                            width: 12,
                            position: '-18 -18',
                            cursor: 'pointer',
                            display: false,
                        },
                    },
                    {
                        units: [
                            {
                                type: 'text',
                                binding: 'listItem',
                                name: 'listItem',
                                style: {
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#A5B3C2',
                                    borderRadius: 3,
                                    borderWidth: 1,
                                    height: 51,
                                    width: 113,
                                    position: '0 1',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'posNm',
                                relation: 'listItem',
                                relationAlign: 'topLeft',
                                breakAll: true,
                                style: {
                                    backgroundColor: '#E7F6FA',
                                    borderColor: 'transparent',
                                    fontSize: 12,
                                    height: 23,
                                    width: 111,
                                    position: '1 1',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#56606B',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'empNm',
                                relation: 'listItem',
                                relationAlign: 'topLeft',
                                breakAll: true,
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    fontSize: 11,
                                    height: 18,
                                    width: 45,
                                    position: '12 28',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#6B7682',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'BIND_06',
                                relation: 'listItem',
                                relationAlign: 'topCenter',
                                breakAll: true,
                                horizontalAlign: 'center',
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    fontSize: 11,
                                    height: 18,
                                    width: 45,
                                    position: '1 28',
                                    cursor: 'default',
                                    fontWeight: 'normal',
                                    fontColor: '#6B7682',
                                },
                            },
                            {
                                type: 'text',
                                binding: 'dual',
                                relation: 'listItem',
                                relationAlign: 'bottomRight',
                                style: {
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF',
                                    backgroundColor: 'green',
                                    fontColor: '#FFFFFF',
                                    fontSize: 8,
                                    borderRadius: 9,
                                    height: 14,
                                    width: 14,
                                    position: '-19 -22',
                                    display: false,
                                },
                            },
                            {
                                type: 'text',
                                binding: 'listSpace',
                                relation: 'listItem',
                                relationAlign: 'bottomLeft',
                                style: {
                                    borderColor: 'transparent',
                                    backgroundColor: 'transparent',
                                    borderRadius: 3,
                                    borderWidth: 0,
                                    height: 1,
                                    width: 1,
                                },
                            },
                        ],
                        type: 'list',
                        relation: 'orgNode',
                        relationAlign: 'bottomLeft',
                        style: {
                            position: '0 2',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            width: 113,
                            backgroundColor: 'transparent',
                            selectionBorderWidth: 1,
                            selectionBorderColor: '#484D52',
                        },
                    },
                ],
                style: {
                    selectionBorderWidth: 1,
                    selectionBorderColor: '#484D52',
                    borderRadius: 5,
                },
            },
            candidateListWide: {
                units: [
                    {
                        name: 'orgNode',
                        type: 'text',
                        style: {
                            backgroundColor: '#fff',
                            borderColor: '#D1D7DC',
                            borderRadius: 10,
                            borderWidth: 1,
                            height: 135,
                            width: 250,
                        },
                    },
                    {
                        name: 'orgType',
                        binding: 'orgType',
                        style: {
                            backgroundColor: '#0082bc',
                            borderRadius: 7,
                            height: 25,
                            position: '5 5',
                            width: 239,
                        },
                        type: 'text',
                    },
                    {
                        binding: 'orgNm',
                        breakAll: true,
                        horizontalAlign: 'center',
                        maxLines: 1,
                        style: {
                            fontColor: '#fff',
                            fontSize: 12,
                            height: 25,
                            position: '25 6',
                            width: 201,
                            cursor: 'pointer',
                        },
                        type: 'text',
                    },
                    {
                        type: 'picture',
                        binding: 'chkYn',
                        relation: 'orgType',
                        relationAlign: 'topRight',
                        style: {
                            borderColor: '#b1b1b1',
                            height: 14,
                            width: 14,
                            position: '-20 5',
                            display: false,
                            cursor: 'pointer',
                        },
                    },
                    {
                        type: 'picture',
                        binding: 'cmpYn',
                        style: {
                            borderColor: '#b1b1b1',
                            borderRadius: 9,
                            height: 13,
                            width: 13,
                            position: '9 10',
                            display: false,
                            cursor: 'pointer',
                        },
                    },
                    {
                        binding: 'empPhoto',
                        type: 'picture',
                        style: {
                            backgroundColor: '#fff',
                            height: 100,
                            width: 70,
                            position: '7 31',
                        },
                    },
                    {
                        binding: 'positionNm',
                        breakAll: true,
                        maxLines: 1,
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontColor: '#3A3A3A',
                            fontSize: 11,
                            height: 18,
                            position: '84 34',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        binding: 'dual',
                        type: 'text',
                        style: {
                            borderWidth: 2,
                            borderColor: '#fff',
                            backgroundColor: 'green',
                            fontColor: '#fff',
                            fontSize: 9,
                            borderRadius: 9,
                            width: 18,
                            height: 18,
                            position: '82 33',
                            display: false,
                        },
                    },
                    {
                        style: {
                            backgroundColor: 'gray',
                            height: 0.3,
                            position: '84 52',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        binding: 'empNm',
                        breakAll: true,
                        maxLines: 1,
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontColor: '#3A3A3A',
                            fontSize: 11,
                            height: 18,
                            position: '84 54',
                            width: 158,
                            cursor: 'pointer',
                        },
                        type: 'text',
                    },
                    {
                        style: {
                            backgroundColor: 'gray',
                            height: 0.3,
                            position: '84 72',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        binding: '',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontColor: '#3A3A3A',
                            fontSize: 11,
                            height: 18,
                            position: '84 74',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        style: {
                            backgroundColor: 'gray',
                            height: 0.3,
                            position: '84 92',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        binding: '',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontColor: '#3A3A3A',
                            fontSize: 11,
                            height: 18,
                            position: '84 94',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        style: {
                            backgroundColor: 'gray',
                            height: 0.3,
                            position: '84 112',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        binding: '',
                        breakAll: true,
                        style: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            fontColor: '#3A3A3A',
                            fontSize: 11,
                            height: 18,
                            position: '84 114',
                            width: 158,
                        },
                        type: 'text',
                    },
                    {
                        units: [
                            {
                                binding: 'empPhoto',
                                type: 'picture',
                                style: {
                                    backgroundColor: '#fff',
                                    height: 25,
                                    width: 25,
                                    position: '24 2',
                                },
                            },
                            {
                                binding: 'posNm',
                                breakAll: true,
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    borderRadius: '8',
                                    fontColor: '#3A3A3A',
                                    fontSize: 11,
                                    height: 28,
                                    position: '51 0',
                                    width: 88,
                                },
                                type: 'text',
                            },
                            {
                                binding: 'empNm',
                                breakAll: true,
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    borderRadius: '8',
                                    fontColor: '#3A3A3A',
                                    fontSize: 11,
                                    height: 28,
                                    position: '139 0',
                                    width: 88,
                                },
                                type: 'text',
                            },
                            {
                                binding: '',
                                breakAll: true,
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    borderRadius: '8',
                                    fontColor: '#3A3A3A',
                                    fontSize: 11,
                                    height: 28,
                                    position: '227 0',
                                    width: 20,
                                },
                                type: 'text',
                            },
                            {
                                binding: '',
                                style: {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent',
                                    borderRadius: '8',
                                    fontColor: '#3A3A3A',
                                    fontSize: 11,
                                    height: 28,
                                    position: '208 0',
                                    width: 8,
                                },
                                type: 'text',
                            },
                            {
                                type: 'picture',
                                binding: 'cmpYn',
                                style: {
                                    borderColor: '#b1b1b1',
                                    borderWidth: 0.6,
                                    borderRadius: 9,
                                    height: 12,
                                    width: 12,
                                    position: '9 7',
                                    display: false,
                                    cursor: 'pointer',
                                },
                            },
                        ],
                        type: 'list',
                        relation: 'orgNode',
                        relationAlign: 'bottomLeft',
                        style: {
                            position: '0 4',
                            backgroundColor: '#ffffff',
                            borderColor: '#D1D7DC',
                            borderWidth: 1,
                            width: 250,
                        },
                    },
                ],
                style: {
                    selectionBorderWidth: 6,
                    borderRadius: 10,
                },
            },
        },
        links: {
            linkSolid: {
                style: {
                    borderWidth: 1,
                    borderColor: '#BEC9D4',
                    borderStyle: 'solid',
                },
            },
            linkFocus: {
                style: {
                    borderWidth: 1,
                    borderColor: '#484D52',
                    borderStyle: 'solid',
                },
            },
        },
    },
    orgData: [
        {
            fields: {
                orgId: {
                    value: '0_2',
                },
                empId: {
                    value: 'E0_201',
                },
                personId: {
                    value: 'E0_201',
                },
                upOrgId: {
                    value: '0',
                },
                posNm: {
                    value: '상무',
                },
                empNm: {
                    value: '허민병',
                    style: {
                        cursor: 'pointer',
                    },
                },
                empPhoto: {
                    value: '/orgn/images/photo/s25.jpg',
                },
                orgSortOrder: {
                    value: '3',
                },
                empSortOrder: {
                    value: 'E0_201',
                },
                positionNm: {
                    value: 'LGCNS_직무-11',
                    style: {
                        cursor: 'pointer',
                    },
                },
                orgTypeLevel: {
                    value: '2',
                },
                orgType: {
                    value: ' ',
                    style: {
                        backgroundColor: '#073763',
                        fontColor: '#434343',
                    },
                },
                orgNm: {
                    value: '본부3',
                    style: {
                        fontColor: '#434343',
                        backgroundColor: '#f5fafe',
                    },
                },
                dual: {
                    value: '',
                },
                btn02: {
                    value: '/orgn/images/test01.png',
                    style: {
                        display: false,
                        toolTip: '조직 요약정보',
                    },
                },
                pkey: '0_2',
                _chkYn: '0',
                chkYn: '/orgn/images/chk0.png',
                empList: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: true,
                        toolTip: '조직원 조직도',
                    },
                },
                btn03: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: false,
                    },
                },
                cmpValue: '0',
                cmpYn: {
                    value: '/orgn/images/chka0.png',
                },
            },
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
            layout: {
                supporter: ' ',
            },
        },
        {
            fields: {
                orgId: {
                    value: '0_2_0',
                },
                empId: {
                    value: 'E0_2_001',
                },
                personId: {
                    value: 'E0_2_001',
                },
                upOrgId: {
                    value: '0_2',
                },
                posNm: {
                    value: '부장',
                },
                empNm: {
                    value: '문인식',
                    style: {
                        cursor: 'pointer',
                    },
                },
                empPhoto: {
                    value: '/orgn/images/photo/s2.jpg',
                },
                orgSortOrder: {
                    value: '1',
                },
                empSortOrder: {
                    value: 'E0_2_001',
                },
                positionNm: {
                    value: 'LGCNS_직무-13',
                    style: {
                        cursor: 'pointer',
                    },
                },
                orgTypeLevel: {
                    value: '3',
                },
                orgType: {
                    value: ' ',
                    style: {
                        backgroundColor: '#f6b26b',
                        fontColor: '#434343',
                    },
                },
                orgNm: {
                    value: '부10',
                    style: {
                        fontColor: '#434343',
                        backgroundColor: '#fefaf5',
                    },
                },
                dual: {
                    value: '',
                },
                btn02: {
                    value: '/orgn/images/test01.png',
                    style: {
                        display: false,
                        toolTip: '조직 요약정보',
                    },
                },
                pkey: '0_2_0',
                rkey: '0_2',
                _chkYn: '0',
                chkYn: '/orgn/images/chk0.png',
                empList: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: true,
                        toolTip: '조직원 조직도',
                    },
                },
                btn03: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: false,
                    },
                },
                cmpValue: '0',
                cmpYn: {
                    value: '/orgn/images/chka0.png',
                },
            },
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
            layout: {
                supporter: ' ',
            },
            collapsed: true,
        },
        {
            fields: {
                orgId: {
                    value: '0_2_1',
                },
                empId: {
                    value: 'E0_2_101',
                },
                personId: {
                    value: 'E0_2_101',
                },
                upOrgId: {
                    value: '0_2',
                },
                posNm: {
                    value: '상무',
                },
                empNm: {
                    value: '신진자',
                    style: {
                        cursor: 'pointer',
                    },
                },
                empPhoto: {
                    value: '/orgn/images/photo/s44.jpg',
                },
                orgSortOrder: {
                    value: '2',
                },
                empSortOrder: {
                    value: 'E0_2_101',
                },
                positionNm: {
                    value: 'LGCNS_직무-2',
                    style: {
                        cursor: 'pointer',
                    },
                },
                orgTypeLevel: {
                    value: '3',
                },
                orgType: {
                    value: ' ',
                    style: {
                        backgroundColor: '#f6b26b',
                        fontColor: '#434343',
                    },
                },
                orgNm: {
                    value: '부11',
                    style: {
                        fontColor: '#434343',
                        backgroundColor: '#fefaf5',
                    },
                },
                dual: {
                    value: '',
                },
                btn02: {
                    value: '/orgn/images/test01.png',
                    style: {
                        display: false,
                        toolTip: '조직 요약정보',
                    },
                },
                pkey: '0_2_1',
                rkey: '0_2',
                _chkYn: '0',
                chkYn: '/orgn/images/chk0.png',
                empList: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: true,
                        toolTip: '조직원 조직도',
                    },
                },
                btn03: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: false,
                    },
                },
                cmpValue: '0',
                cmpYn: {
                    value: '/orgn/images/chka0.png',
                },
            },
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
            layout: {
                supporter: ' ',
            },
            collapsed: true,
        },
        {
            fields: {
                orgId: {
                    value: '0_2_2',
                },
                empId: {
                    value: 'E0_2_201',
                },
                personId: {
                    value: 'E0_2_201',
                },
                upOrgId: {
                    value: '0_2',
                },
                posNm: {
                    value: '차장',
                },
                empNm: {
                    value: '한승희',
                    style: {
                        cursor: 'pointer',
                    },
                },
                empPhoto: {
                    value: '/orgn/images/photo/s41.jpg',
                },
                orgSortOrder: {
                    value: '3',
                },
                empSortOrder: {
                    value: 'E0_2_201',
                },
                positionNm: {
                    value: 'LGCNS_직무-8',
                    style: {
                        cursor: 'pointer',
                    },
                },
                orgTypeLevel: {
                    value: '3',
                },
                orgType: {
                    value: ' ',
                    style: {
                        backgroundColor: '#f6b26b',
                        fontColor: '#434343',
                    },
                },
                orgNm: {
                    value: '부12',
                    style: {
                        fontColor: '#434343',
                        backgroundColor: '#fefaf5',
                    },
                },
                dual: {
                    value: '',
                },
                btn02: {
                    value: '/orgn/images/test01.png',
                    style: {
                        display: false,
                        toolTip: '조직 요약정보',
                    },
                },
                pkey: '0_2_2',
                rkey: '0_2',
                _chkYn: '0',
                chkYn: '/orgn/images/chk0.png',
                empList: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: true,
                        toolTip: '조직원 조직도',
                    },
                },
                btn03: {
                    value: '/orgn/images/test02.png',
                    style: {
                        display: false,
                    },
                },
                cmpValue: '0',
                cmpYn: {
                    value: '/orgn/images/chka0.png',
                },
            },
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
            layout: {
                supporter: ' ',
            },
            collapsed: true,
        },
    ],
};
export default function Inorg() {
    let org = useSelector((state: RootState) => state.orgObject);
    let ref = useRef<INOrg>();
    let inorg: INOrg | undefined = ref.current;
    const dispatch = useDispatch();

    useScript('/lib/softin.js', 'softin');
    useScript('/lib/inorginfo.js', 'inorginfo');
    useScript('/lib/inorg.js', 'inorg', () => {
        ref.current = createINOrg('viewOrg', {});
        dispatch(setOrgObject(orgData));
    });

    useEffect(() => {
        console.log(inorg);
        if (typeof inorg !== 'undefined') {
            inorg.loadJson({data: org});
        }

        return () => {
            console.log('return');
        };
    }, [org]);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(setOrgObject(orgData));
                }}
            >
                load
            </button>
            <button onClick={() => {}}>load</button>

            <div id="viewOrg" style={{width: '100%', height: '500px'}}></div>
        </div>
    );
}
