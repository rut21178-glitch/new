import { useState } from "react";
import { AddUser } from "./AddUser";
import { Enter } from "./Enter"


export const Main = () => {
const [users,setUsers]=useState([
{ name:'rut', email:'rut', password:'123'}
])

    const add = (user) => {
        console.log(user);
        for(let i=0;i<users.length;i++)
            if(users[i].email===user.email){
                alert('הינך רשום כבר במערכת')
                return}
        setUsers([...users, user])
        alert('נרשמת בהצלחה')

       
    }
    const enter=(user)=>{
          for(let i=0;i<users.length;i++)
            if(users[i].email===user.email){
                if(users[i].password===user.password)
                alert('נכנסת בהצלחה')
            else
            alert('הסיסמה שגויה')
            return
    }
alert('אתה לא רשום, עליך להרשם')
}
 return<>


 <AddUser add={add}> </AddUser>
  <Enter enter={enter}></Enter>
 </>
}