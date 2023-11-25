import React from 'react';

//
export default function Page(props: any) {
    return (
    <div>
        <h1 className="text-4xl font-bold">Test1/App1</h1>
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/Page2.js"></script>
        ) : (
            <script type="module" src="/src/client/Page2.ts"></script>
        )}        
    </div>
    )
}
