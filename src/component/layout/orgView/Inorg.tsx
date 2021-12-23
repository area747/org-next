import {OrgObject, OrgData} from 'orgObject';
import {INOrg, Node} from 'inorg';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reducer';
import {setOrgObject} from '../../../reducer/orgObject';
import api from '../../../repo/axios';
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
};
export default function InorgContainer() {
    let org = useSelector((state: RootState) => state.orgObject);
    let [status, setStatus] = useState({inorgReady: false, dataReady: false});
    let inorg = useRef<INOrg>();
    const dispatch = useDispatch();

    useInorg(() => {
        inorg.current = createINOrg('viewOrg', {});
        setStatus(status => {
            return {...status, inorgReady: true};
        });
    });

    useEffect(() => {
        loadData().then(orgList => {
            orgData.orgData = orgList;
            dispatch(setOrgObject(orgData));
            setStatus(status => {
                return {...status, dataReady: true};
            });
        });
    }, []);

    useEffect(() => {
        if (status.inorgReady && status.dataReady) {
            inorg.current!.loadJson({data: org});
        }
    }, [status]);

    return (
        <div style={{height: '100%'}}>
            <div id="viewOrg" style={{width: '100%', height: '100%'}}></div>
        </div>
    );
}

const loadData = () => {
    return Promise.all([
        api.postRequest('api/cmm/message.json', {
            messageName: 'ORG_R_000011',
            reqMessage: {
                companySeq: '132000',
                baseYmd: '2021-12-20',
                orgId: '41030001',
                subOrgYn: 'Y',
                matrixYn: 'N',
            },
        }),
        api.postRequest('api/cmm/message.json', {
            messageName: 'EMP_R_000020',
            reqMessage: {
                companySeq: '132000',
                baseYmd: '2021-12-20',
                subOrgYn: 'Y',
                orgId: '41030001',
                columnFilterList: ['orgNm', 'empNm', 'dutyNm', 'posNm', 'schNm', 'addr'],
                emptyPos: false,
                matrixYn: 'N',
            },
        }),
    ]).then(([orgList, empList]) => {
        let res = mergeData(orgList, empList);
        let orgData = makeOrgData(res);
        return orgData;
    });
};

const mergeData = (orgData: Array<any>, empData: Array<any>) => {
    empData = empData.filter((empItem, empIdx, arr) => {
        if (empItem.leaderYn === 'Y') {
            orgData.some(orgItem => {
                if (orgItem.orgId === empItem.orgId) {
                    Object.assign(orgItem, empItem);
                    return true;
                }
                return false;
            });
            return false;
        }
        empItem.isMember = true;
        return true;
    });
    return orgData.concat(empData);
};

const makeOrgData = (orgList: Array<any>) => {
    let array: Array<OrgData> = [];
    orgList.forEach((item, idx, arr) => {
        if (item.isMember) {
            item.pkey = item.empId;
            item.mkey = item.orgId;
        } else {
            item.pkey = item.orgId;
            item.rkey = item.upOrgId;
        }
        array.push({
            fields: item,
            template: 'photoType',
            link: {
                template: 'linkSolid',
            },
        });
    });
    return array;
};
