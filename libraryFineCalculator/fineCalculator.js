function calculateOriginalFine(items){
    let fine = 0;
    items.forEach(i => {
        fine += 0.25*i.daysOverdue;
    })

    return fine;
}


function calculateAfterAdjustmentFine(items){

    let afterAdjustment = 0;

    items.forEach(i => {

        if(i.category == 'Periodical'){
            let periodicalsFine = 0.25*i.daysOverdue;
            if(i.isReserved){
                periodicalsFine = periodicalsFine*2;
            }
            periodicalsFine = Math.min(10, periodicalsFine);
            afterAdjustment += periodicalsFine;
        }
        else if(i.isReserved){
            afterAdjustment += 0.25*2*i.daysOverdue;
        }else{
            afterAdjustment += 0.25*i.daysOverdue;
        }
    });

    return afterAdjustment;
};


function calculateFinalAfterDiscount(item){
    if(item.length > 3)
        return calculateAfterAdjustmentFine(item)/2;
    return calculateAfterAdjustmentFine(item);
}

function calulateFine(item){
    console.log(calculateOriginalFine(item));
    console.log(calculateAfterAdjustmentFine(item));
    console.log(calculateFinalAfterDiscount(item));
}

let bItems = [
    { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
    { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
    { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
    { title: "Programming Guide", daysOverdue: 8, category: "Academic", isReserved: false }
  ];

calulateFine(bItems);