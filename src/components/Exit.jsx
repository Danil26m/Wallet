import { useDispatch } from "react-redux"
import { signOut } from "redux/auth/auth";
// import { exit } from "redux/options/optionsAuthController";

export default function Exit() {
    const dispatch = useDispatch();
    const handelClick = () =>{
      return  dispatch(signOut());
    }
    return(
        <div>awdawd
        <button type="button" onClick={handelClick}>ex</button>
        </div>
    )
}