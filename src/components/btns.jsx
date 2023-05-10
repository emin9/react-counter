import Refresh from '../img/refresh 1.png'





function Btns(){
    return(
      <div className="btns">
        <span className="btns__plus">+</span>
        <img src={Refresh} alt="" className="btns__refresh"/>
        <span className="btns__minus">-</span>
      </div>
    )
    }

    export default Btns;