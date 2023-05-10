import Number from "./number"
import Btns from "./btns"
import Refresh from '../img/refresh 1.png'
import { useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"





function Main(){
    let [counter,setCounter] = useState(0) 

function plus(){
    setCounter(counter + 3)
}
function minus(){

    setCounter(counter - 2 >= 0 ? counter - 2 : 0);

}

function refresh(){
    setCounter(0);
   
}





    return(
        <div className="Main">
         <div>
          <p className="number">{counter}</p>
         </div>
          <div className="btns">
           <a className="btns__plus" onClick={plus}>+</a>
           <img src={Refresh} alt="" className="btns__refresh" onClick={refresh}/>
           <a className="btns__minus" onClick={minus}>-</a>
          </div> 
        </div>
    )
}

export default Main