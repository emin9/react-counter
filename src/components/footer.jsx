import Footerlogo from "./footerlogo"
import Footermenu from "./footermenu"
import Copyright from "./copyright"
function Footer(){
    return(
            <div className="footer">
            <Footerlogo/>
            <Footermenu/>
            <Copyright/>


            </div>
      

    )
}

export default Footer