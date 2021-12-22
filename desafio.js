function addUpExpenses(expenseList = [], names = []){
    let totalExpenses = 0
    if(names.length === 0){
        return {}
    }
    for(let i = 0; i<expenseList.length; i++){
        totalExpenses += expenseList[i].amount*expenseList[i].unitPrice
    }
    return shareExpenses(totalExpenses, names)
}

function shareExpenses(totalExpenses, names){
    let totalToPay = (totalExpenses/names.length).toFixed(2)
    let object = {}
    for(let i = 0; i<names.length; i++){
        object[names[i]] = totalToPay
    }
    if(totalToPay*names.length !== totalExpenses){
        let randomPerson = getRandomIntInclusive(0, names.length-1);
        if(totalExpenses < totalToPay*names.length){
            object[names[randomPerson]] = (Number(totalToPay) - Number((Number(totalToPay)*names.length - totalExpenses).toFixed(2)))+""
        }else{
            object[names[randomPerson]] = (Number(totalToPay) + Number((totalExpenses - Number(totalToPay)*names.length).toFixed(2)))+""
        }
    }
    return object
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
