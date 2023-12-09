
import Layout from '../../layout';
import React from 'react';
import { marked } from 'marked';
//
export default function Page(props: any) {
console.log("#taskShow");
console.log(props.item);
const content = marked.parse(props.item.content);
console.log(content);
    return (
    <Layout title="TaskShow">
        <div>
            <div>
            <link href="/static/postshow.css" rel="stylesheet" />
            <a href="/memo" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <p>ID: {props.item.id}
            , {props.item.createdAt}
            </p>
            <hr className="my-2" />
            content:<br />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <hr className="my-2" />
            <input type="text" className="d-none" id="item_id" defaultValue={props.item.id} />
            <div id="root"></div>
            {/* TS */}
            {/*
            {import.meta.env.PROD ? (
                <script src="/static/TaskShow.js"></script>
            ) : (
                <script src="/src/client/TaskShow.ts"></script>
            )}
            */}
        </div>       
        </div>
    </Layout>
    )
}
/*
<button id="btn_delete" className="btn-red ms-2 my-2">Delete</button>
{html`<script src="/js/tasks/delete.js?${timeStamp}"></script>`}
*/
