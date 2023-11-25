import React from 'react';
import { marked } from 'marked';
import Layout from '../layout';

const messages = ['Good Morning', 'Good Evening', 'Good Night']
//
export default function Page(props: any) {
//console.log(props);
    //
    return (
    <Layout>
        <div>
            <h1 className="text-4xl font-bold">Test2</h1>
            <hr className="my-2" />
            <ul>
            {messages.map((message: any, index: number) => {
                return (<li className="my-2" key={index} 
                >{message}!!</li>)
            })}
            </ul>
            <hr className="my-2" />
        </div>

    </Layout>
    )
}
/*
*/