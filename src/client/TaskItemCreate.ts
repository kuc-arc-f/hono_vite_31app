import moment from 'moment';

console.log("#TaskItemCreate.client.ts");
//
const TaskItemCreate = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function(projectId: number)
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
            let contentValue = "";
            const content = document.querySelector("#content") as HTMLInputElement;
            if(content) {
                contentValue = content.value;
            }              
            let start_dateValue = "";
            const start_date = document.querySelector("#start_date") as HTMLInputElement;
            if(start_date) {
                start_dateValue = start_date.value;
            }
            let completeValue = "";
            const complete = document.querySelector("#complete") as HTMLInputElement;
            if(complete) {
                completeValue = complete.value;
            }
//console.log("start_dateValue=", start_dateValue);
//console.log("completeValue=", completeValue);
            const item = {
                title: titleValue,
                content: contentValue,
                projectId: projectId,
                complete: completeValue + " 00:00:00",
                start_date: start_dateValue + " 00:00:00",
                status: "1",
                userId: 0,
            }
/*
*/
console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/create", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },     
    /**/
    initProc: function() {
        //console.log("init");
        //project_id
        let projectIdValue = 0;
        const project_id = document.querySelector('#project_id') as HTMLInputElement;
        if(project_id) {
            projectIdValue = Number(project_id.value);
console.log("projectIdValue=", projectIdValue);
        }
        //start_date
        const dtNow = moment().format("YYYY-MM-DD");
        const start_date = document.querySelector('#start_date') as HTMLInputElement;
        if(start_date){
            start_date.value = dtNow;
        }
        const complete = document.querySelector('#complete') as HTMLInputElement;
        if(complete){
            complete.value = dtNow;
        }
        //btn
        const button = document.querySelector('#btn_save');
        button?.addEventListener('click', async () => {
            const result = await this.addItem(projectIdValue);
console.log("result=", result);
            if(result === true) {
                window.location.href = '/task_items/' + String(projectIdValue);
            }
        }); 
    },
}
//
TaskItemCreate.initProc();
