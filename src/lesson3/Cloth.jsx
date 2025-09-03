export function Cloth({description,color,size,price}) {
    
            
    return(
        <>
        {size<=20
            ?<h5>בגדי ילדים</h5>
            :<h5>בגדי נשים</h5>
        }
        <p> תאור הבגד: {description}</p>
        <p>צבע: {color}</p>
        <p>מידה: {size}</p>
        <p>מחיר: {price}</p>
        {price<50 && <p>מחיר מבצע</p>}
        <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        </>
    )
}
