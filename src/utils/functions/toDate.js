 const toDate = (timestamp) =>{
    let d = new Date(timestamp * 1000);
    let yyyy = d.getFullYear()
    let mm = ('0' + (d.getMonth() + 1)).slice(-2)  // Months are zero based. Add leading 0.
    let dd = ('0' + d.getDate()).slice(-2)      // Add leading 0.
    let time =  yyyy + '.' + mm + '.' + dd 
    return  time
    
}
export default toDate