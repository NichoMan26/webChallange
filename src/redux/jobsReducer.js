const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

///////********************/////////////


let initState = {
    newMessage:'',
    jobs:[
        {id:1, chat:[{author:'me', message:'Hello'},{author:'he', message:'Good work'},{author:'me', message:'Thanks! No problems!'},], info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',Jname:'Make aaaaaaa aaaaaaaaa aaaaaaa aaaaa aaaaaa aaaaa aaaaa aaaaaaaa site', customer:'Google', location:"Helsinki", dateS:1609459200, dateE:1609804800, status:'Pending'},
        {id:2, chat:[{author:'me', message:'Hello'}], info:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',Jname:'Update a site', customer:'Yahoo', location:"Lapenranta", dateS:1602439200, dateE:1609804900, status:'Ongoing'},
        {id:3, chat:[{author:'me', message:'Hello'}], info:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',Jname:'Delete a site', customer:'Amazon', location:"New York", dateS:1649459240, dateE:1609804500, status:'Pending'},
        {id:4, chat:[{author:'me', message:'Hello'}], info:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections',Jname:'Add content', customer:'Google', location:"Helsinki", dateS:1609559200, dateE:1609904860, status:'Closed'},
        {id:5, chat:[{author:'me', message:'Hello'}], info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',Jname:'Make aaaaaaa aaaaaaaaa aaaaaaa aaaaa aaaaaa aaaaa aaaaa aaaaaaaa site', customer:'Google', location:"Helsinki", dateS:1609459200, dateE:1609804800, status:'Pending'},
        {id:6, chat:[{author:'me', message:'Hello'}], info:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',Jname:'Update a site', customer:'Yahoo', location:"Lapenranta", dateS:1602439200, dateE:1609804900, status:'Ongoing'},
        {id:7, chat:[{author:'me', message:'Hello'}], info:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',Jname:'Delete a site', customer:'Amazon', location:"New York", dateS:1649459240, dateE:1609804500, status:'Pending'},
        {id:8, chat:[{author:'me', message:'Hello'}], info:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections',Jname:'Add content', customer:'Google', location:"Helsinki", dateS:1609559200, dateE:1609904860, status:'Closed'},
    ]
}
const jobsReducer = (state = initState, action) => {
    switch(action.type){

        case UPDATE_NEW_MESSAGE:// init state
            return {...state, newMessage:action.newMessage}


        case ADD_NEW_MESSAGE:// init state
        let arr = state.jobs.map((obj,idx) => {
            if(obj.id === action.id){
                obj.chat.push({author:'me', message:state.newMessage})
            }
            return obj
        })
            return {...state, jobs:arr}
        default:
            return state
    }
}
export const updateNewMessage = (newMessage) => ({type:UPDATE_NEW_MESSAGE, newMessage})
export const addNewMessage = (id) => ({type:ADD_NEW_MESSAGE, id})
export default jobsReducer