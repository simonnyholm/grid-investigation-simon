

export default function AggregateDiv (leafValues) {
    const firstValue = leafValues.shift()

    const sameValues = leafValues.every((value) => value == firstValue)

    if (sameValues) {
        return firstValue
    } else {
       return ""
    }

    
    // for(const value of leafValues) {
    //     if (firstValue == value) {
    //         continue
    //     } else {
    //         return ""
    //     }
    // }


    //return firstValue
}