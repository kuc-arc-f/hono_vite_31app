import React from 'react';
import { marked } from 'marked';
import Layout from '../layout';

const testMD = `
### hoge
***
* 123
* 145
***
* CCC
`
//
export default function Page(props: any) {
    const content = marked.parse(testMD);
console.log(content);
    //
    return (
    <Layout>
        <div>
            <h1 className="text-4xl font-bold">Test3</h1>
            <hr className="my-2" />
            <pre dangerouslySetInnerHTML={{ __html: content }} />
            <hr className="my-2" />
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/Page2.js"></script>
            ) : (
                <script type="module" src="/src/client/Page2.ts"></script>
            )}        
        </div>
    </Layout>
    )
}
/*
<div dangerouslySetInnerHTML={{ __html: content }} />
*/