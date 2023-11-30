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
    get_list: async function(c, DB)
    {
        try{    
            const result = await DB.prepare(`SELECT * FROM Project ORDER BY id DESC`).all();
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
                const sql = `
                INSERT INTO ErChart ( title, content, userId)
                VALUES('${body.title}', '${body.content}', 0);
                `;
                */
                const sql = `
                INSERT INTO Project ( name,  InveiteCode, userId)
                VALUES('${body.name}', '${body.InveiteCode}', 0);
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
            const sql = `SELECT * FROM Project WHERE id = ${id}`;            
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