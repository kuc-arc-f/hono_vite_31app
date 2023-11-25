
import Layout from '../../layout';
import React from 'react';

//
export default function Page(props: any) {
console.log("#taskShow");
//console.log(props.item);
    return (
    <Layout title="TaskShow">
        <div>
            <a href="/er_chart" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <p>ID: {props.item.id}
            , {props.item.createdAt}
            </p>
            <hr className="my-2" />
            content:<br />
            <pre className="mermaid">{props.item.content}</pre>
            <hr className="my-8" />
            {/* TS */}
            {import.meta.env.PROD ? (
            <>
                <script type="module" src="/static/MermaidImport.js"></script>
            </>
            ) : (
            <>
                <script type="module" src="/src/client/MermaidImport.ts"></script>
            </>
            )}
        </div>
    </Layout>
    )
}
/*
<input type="text" className="d-none" id="item_id" defaultValue={props.item.id} />
<button id="btn_delete" className="btn-red ms-2 my-2">Delete</button>
<div id="root"></div>
*/
