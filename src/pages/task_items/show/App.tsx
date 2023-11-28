
import Layout from '../../layout';
import React from 'react';

//
export default function Page(props: any) {
console.log("#taskShow");
console.log(props.item);
    return (
    <Layout title="TaskShow">
        <div>
            <div>
            <a href={`/task_items/${props.item.projectId}`} className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <hr className="my-2" />
            <p>ID: {props.item.id}</p>
            <hr className="my-2" />
            <p>Start: {props.item.start_date}</p>
            <p>Conplete: {props.item.complete}</p>
            <hr className="my-2" />
            <p>CreatedAt: {props.item.createdAt}</p>
            <hr className="my-2" />
            <pre className="pre_text">{props.item.content}</pre>
            <hr className="my-8" />
            {/* TS */}

            </div>       
        </div>
        {/* CSS */}
        <style>{`
        .pre_text {
            border: 1px solid #000;
            background: #eee;
            padding: 10px;
            font-family: BlinkMacSystemFont,"Segoe UI",Roboto !import;
            font-size: 1rem;
        }  
        `}</style>
    </Layout>
    )
}
/*
    {import.meta.env.PROD ? (
        <script src="/static/TaskShow.js"></script>
    ) : (
        <script src="/src/client/TaskShow.ts"></script>
    )}
*/
