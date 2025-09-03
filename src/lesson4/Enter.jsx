export const Enter=({enter})=>{

 const send = (event) => {
 event.preventDefault()
        // אם המפתח והערך בשם זה - מספיק לכתוב פעם אחת
        const user = {
            email:event.target[0].value,
            password:event.target[1].value
        }
enter(user)


    }
    return<>
    <fieldset>
    <legend>כניסה</legend>
    <form onSubmit={send}>
            
            <label for={'P'}>input email:</label><br></br>
            <input id={'P'} placeholder={'input email'}></input><br></br><br></br>
            <label for={'IMG'}>input password:</label><br></br>
            <input id={'IMG'} placeholder={'input password'}></input><br></br><br></br>
            <input type='submit' value='send'></input>
        </form>
     </fieldset>
    </>

}