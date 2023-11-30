//import LibCommon from '$lib/LibCommon'
//import dayjs from 'dayjs';
import moment from 'moment';
//
const Gantt = {
    /**
     *
     * @param
     *
     * @return
     */ 
    getTaskString: function (items: any): string
    {
        try{
            let ret = "";
//console.log(items);
            //@ts-ignore
            items.forEach((element, index) => {
//console.log(element.complete);
                let start = "2023-12-12";
                let end = "2023-12-12";
                if(element.complete) {
                    let dt = moment(element.complete);
                    end = dt.format("YYYY-MM-DD");
                }
                if(element.start_date) {
                    let dt = moment(element.start_date);
                    start = dt.format("YYYY-MM-DD");
                }
                let row  = "    section task" + "\n";
                row += "        "+ element.title + ` :${start}, ${end}` + "\n";
                ret += row;
//console.log(element);
            });
            return ret;
        } catch (e) {
          console.error(e);
          throw new Error('Error , getTaskString');
        }
    },
  
}
export default Gantt;
