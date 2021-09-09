export const getFormattedDate = (date)=>{
    let numDate = date;
    numDate = new Date(numDate);
    let monthName = numDate.toLocaleString('en-us',{month: 'short'})
    let day = numDate.getDate();
    let year = numDate.getFullYear();
    return `${monthName} ${day}, ${year}`
}
