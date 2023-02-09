import { DateTime } from "luxon";

export default function utcFormat({ value }){

    const utcFormatConst = new Intl.DateTimeFormat('da', {day: 'numeric', month: 'short', year: 'numeric'});
    console.log("exportTimeVar", exportTimeVar);

    console.log("utc", utcFormatConst);
    const exportTimeVar = utcFormatConst.format(new Date(value))



    return exportTimeVar
}