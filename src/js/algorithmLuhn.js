export function algorithmLuhn(number) {
    let ok;
    const ter = number.split('');
    const pop = +ter.pop();
    const ter1 = ter.reverse().filter((_, i) => i % 2 === 0); //по четным индексам
    const ter2 = ter.filter((_, i) => i % 2 !== 0); //по нечетным индексам
    let res = 0;
    for (let i of ter1) {
        let t = +i * 2;
        if (t.toString().length == 2) {
        t = +t.toString()[0] + +t.toString()[1];
        } 
        res += t;
    }
    for (let j of ter2) {
        res += +j
    }
    const result = res + pop;
      //console.log(result);
    if (result % 10 === 0) {
        return ok = true
    } else return ok = false;

};
