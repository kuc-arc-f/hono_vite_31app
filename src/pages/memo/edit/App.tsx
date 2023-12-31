import Layout from '../../layout';
//
import React from 'react';

//
export default function Page(props: any) {
console.log("#taskShow");
console.log(props.item);
    return (
    <Layout title="TaskEdit">
        <div>
            <div>
            <a href="/memo" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <p>ID: {props.item.id}
            , {props.item.createdAt}
            </p>
            <hr className="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            defaultValue={props.item.title}
            />
            <hr className="my-2" />
            <label>Content:</label>
            <textarea id="content" name="content" rows={15}
            className="border border-gray-400 rounded-md px-3 py-2 w-full h-96 resize-none focus:outline-none focus:border-blue-500"
            placeholder="markdown input" required
            >{props.item.content}</textarea>
            <hr className="my-2" />
            
            <input type="text" className="d-none" id="item_id" defaultValue={props.item.id} />
            <div id="root"></div>
            <button id="btn_save" className="btn-purple ms-2 my-2">Save</button>
            <hr className="my-2" />
            <button id="btn_delete" className="btn-red ms-2 my-2">Delete</button>
            <hr className="my-2" />
            {/*
            */}
            {/* TS */}
            {import.meta.env.PROD ? (
            <>
                <script type="module" src="/static/MemoEdit.js"></script>
            </>               
            ) : (
            <>
                <script type="module" src="/src/client/MemoEdit.ts"></script>
            </>                
            )}
        </div>       
        </div>
    </Layout>
    )
}
/*
<textarea id="content" name="content"
className="border border-gray-400 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
placeholder="" required
>{props.item.content}</textarea>
*/
