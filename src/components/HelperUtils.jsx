const getDate=()=>{
    const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); // Add leading zero if needed
const month = today.toLocaleDateString('en-US', { month: 'long' });
const year = today.getFullYear();
const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });

const formattedDate = `${day} ${month}, ${year} / ${weekday}`;

return formattedDate;
}


export{getDate}