import { useDispatch } from "react-redux"
import { exit } from "redux/options/optionsAuthController";

export default function Exit() {
    const dispatch = useDispatch();
    const handelClick = () =>{
      return  dispatch(exit());
    }
    return(
        <div>awdawd
        <button type="button" onClick={handelClick}>ex</button>
        </div>
    )
}