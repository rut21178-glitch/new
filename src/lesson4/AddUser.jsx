import { useState } from 'react'

export const AddUser = ({ add }) => {

   
    const send = (event) => {
 event.preventDefault()
        // אם המפתח והערך בשם זה - מספיק לכתוב פעם אחת
        const newUser = {
            name: event.target[0].value,
            email:event.target[1].value,
            password:event.target[2].value
        }
        
        
        add(newUser)
    }

    return <>
    <fieldset>
    <legend>הרשמה</legend>
          <form onSubmit={send}>
    <label for={'DESC'}>input name:</label><br></br>
            <input id={'DESC'} placeholder={'input name'} ></input><br></br><br></br>
            <label for={'P'}>input email:</label><br></br>
            <input id={'P'} placeholder={'input email'}></input><br></br><br></br>
            <label for={'IMG'}>input password:</label><br></br>
            <input id={'IMG'} placeholder={'input password'}></input><br></br><br></br>
            <input type='submit' value='send'></input>
     </form>
      </fieldset>
    </>
}