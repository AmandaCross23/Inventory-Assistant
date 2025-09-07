let itemName = "USB-C Cable";

let unitCost = 3.25;
let currentStock = 120;
let reorderLevel = 10;
let targetStock = 100;
let weeklyDemand = 50;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log(`
    Item name is ${itemName}
    ----------------------------

    Weeks of cover: ${weeksOfCover.toFixed(2)}
    Reorder now? ${reorderNow}
    Recommended reorder quantity: ${reorderQuantity}
    Estimated reorder cost: ${estimatedReorderCost.toFixed(2)}
    
    
    `)
