import type { Database } from '@cloudflare/d1'
//
interface Env {
    DB: Database
}
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};
//
const Router = {
    /**
     * route
     * @param
     *
     * @return
     */ 
    get_list: async function(projectId, DB)
    {
        try{    
            const sql = `
            SELECT * FROM TaskItem
            WHERE projectId = ${projectId}
            ORDER BY id DESC
            `;  
console.log(sql);
            const result = await DB.prepare(sql).all();
console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return [];
            }
            return result.results;
        } catch (e) {
            console.error(e);
            return Response.json(retObj);
        } 
    },
    /**
     * 
     * @param
     *
     * @return
    */    
    create: async function(body, DB)
    {
        try{    
console.log(body);
            if (body) {
                /*
                */
                const sql = `
                INSERT INTO TaskItem ( title, content, projectId, complete,
                  status, userId,
                  start_date)
                VALUES('${body.title}', '${body.content}', ${body.projectId},
                datetime('${body.complete}', 'localtime'), 
                '${body.status}',
                ${body.userId},
                datetime('${body.start_date}', 'localtime')
                );
                `;
console.log(sql);
                //console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */    
    get: async function(c, DB, id)
    {
        //console.log("#get");
        try{    
            //const sql = `SELECT * FROM Task WHERE id = ${id}`; 
            const sql = `SELECT * FROM ErChart WHERE id = ${id}`;            
            const result = await DB.prepare(sql).all();
            //console.log(result.results);
            if(result.results.length < 1) {
                console.error("Error, results.length < 1");
                return {};
            }
            return result.results[0];
        } catch (e) {
            console.error(e);
            return {};
        } 
    },
    /**
     * 
     * @param
     *
     * @return
     */    
    delete: async function(body, DB)
    {
        try{    
//console.log(body);
            if (body) {
                const sql = `
                DELETE FROM Project WHERE id= ${body.id};
                `;
console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return {ret: "NG", data: body};
        } 
    },    
    /**
     * 
     * @param
     *
     * @return
     */    
    update: async function(body, DB)
    {
        try{    
console.log(body);
            if (body) {
                /*
                const sql = `
                UPDATE ErChart 
                SET title = '${body.title}', content='${body.content}'
                WHERE id = ${body.id}
                `;
                */
                const sql = `
                UPDATE Project 
                SET name = '${body.name}', InveiteCode = '${body.InveiteCode}'
                WHERE id = ${body.id}
                `;
console.log(sql);
                await DB.prepare(sql).run();
            }
            return {ret: "OK", data: body};
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
}
export default Router;