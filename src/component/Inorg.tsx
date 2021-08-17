import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Inorg() {
    return (
        <div>
            <Head>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script type="text/javascript" src="/lib/softin.js"></script>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script type="text/javascript" src="/lib/inorginfo.js"></script>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script type="text/javascript" src="/lib/inorg.js"></script>
                <Script strategy="lazyOnload">{`
                var option = {
                    layout: {
                        level: true, // 레벨 정렬 사용여부
                        supporter: true, // 보조자 사용여부
                    },
                    defaultTemplate: {
                        link: {
                            // 연결선 스타일
                            style: {
                                borderWidth: 2,
                                borderColor: '#CCC',
                                borderStyle: 'solid',
                            },
                        },
                    },
                    event: {
                        onClick: function (evt: any) {},
                    },
                };

                console.log('hi');

                createINOrg('org-view', option);
                `}</Script>
            </Head>
            <div id="org-view" style={{width: '100%', height: '100%'}}></div>
        </div>
    );
}

declare const createINOrg: any;
