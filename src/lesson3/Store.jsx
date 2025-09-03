import { Cloth } from "./Cloth";
import { Massage } from "./Massage";
export function Store({clothes}) {
    return(
    <>
   { clothes.map((item) =>
    item.color==="אדום"
    ?<Massage code={item.description}></Massage>
    :<Cloth description={item.description }
    color={item.color}
    size={item.size}
    price={item.price}>
    </Cloth>

   )}
   </>)
   
}