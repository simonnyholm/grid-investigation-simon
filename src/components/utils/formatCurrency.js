import numeral from "numeral";

export default function formatCurrency({value}) {
    return numeral(value).format("0.00");
}