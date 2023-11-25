import React from 'react';
import Layout from '../layout';
//
export default function Page(props: any) {
    return (
    <Layout>
    <div>
        <h1 className="text-4xl font-bold">Test5</h1>
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
