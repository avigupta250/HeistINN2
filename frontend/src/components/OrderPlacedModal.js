import { createPortal } from "react-dom";

const OrderPlacedModal=()=>{
    return createPortal(<div>

        

    </div>,document.querySelector(".modal-div"))
}

export default OrderPlacedModal;