import { Store } from "./Store";

export function Main() {
    const clothes=[
        {code: "C001",
            description: "חולצת טריקו",
            color: "כחול",
            size: "22",
            price: 59.9 }
        ,{
            code: "C002",
            description: "מכנסי ג'ינס",
            color: "שחור",
            size: "14",
            price: 129.9
          },
          {
            code: "C003",
            description: "שמלת קיץ",
            color: "אדום",
            size: "22",
            price: 99.9
          },
           {
            code: "C004",
            description: "חצאית",
            color: "כחול",
            size: "12",
            price: 99.9
          }
        ];
   
    return(
    <>
<h1>חנות בגדים</h1>
<Store clothes={clothes} ></Store>
    </>)
}
