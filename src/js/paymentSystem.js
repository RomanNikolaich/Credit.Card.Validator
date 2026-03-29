export function paymentSystem(number) {
    if (number.startsWith("1", 0)) {
        return ['card-uatp'];
    } else if (number.startsWith("3", 0)) {
        return ['card-amex', 'card-jcb'];
    } else if (number.startsWith("4", 0)) {
        return ['card-visa'];
    } else if (number.startsWith("5", 0)) {
        return ['card-master-card'];
    } else if (number.startsWith("6", 0)) {
        return ['card-discover', 'card-union-pay', 'card-maestro'];
    } else if (number.startsWith("9", 0)) {
        return ['card-mir'];
    } else if (number == "") {
        return [];
    }
    else { return ['Не найдена платежная система']; }
    
};
