import numeral from "numeral";

export default function preciseSum(leafValues) {
    const initialValue = numeral(0);
    const sum = leafValues.reduce((a, b) => a.add(b), initialValue);
    return sum.value();
}
