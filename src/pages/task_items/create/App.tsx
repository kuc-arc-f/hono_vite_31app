import Layout from '../../layout';
//
import React from 'react';

//
export default function Page(props: any) {
console.log("#taskShow");
console.log("project=", props.project);
//console.log(props.project);
    return (
    <Layout title="TaskEdit">
        <div>
            <div>
            <a href="/er_chart" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-2" />
            <h1 className="text-4xl font-bold">Create</h1>
            projectId: {props.project}
            <hr className="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
            <hr className="my-2" />
            <div className="mb-2">
            <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" name="content" rows={15}
            className="border border-gray-400 rounded-md px-3 py-2 w-full h-96 resize-none focus:outline-none focus:border-blue-500"
            placeholder="" required
            ></textarea>
            </div>
            <hr className="my-2" />
            <input type="text" className="d-none" id="project_id" defaultValue={props.project} />
            <button id="btn_save" className="btn-purple ms-2 my-2">Save</button>
            <hr className="my-8" />
 
            {/* TS */}
            {import.meta.env.PROD ? (
            <>
                <script type="module" src="/static/TaskItemCreate.js"></script>
            </>               
            ) : (
            <>
                <script type="module" src="/src/client/TaskItemCreate.ts"></script>
            </>                
            )}
        </div>       
        </div>
    </Layout>
    )
}
/*
*/