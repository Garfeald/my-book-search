import Menu  from "./components/Menu"
import {Provider} from "react-redux";
import {store} from "./redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Menu/>
            </div>
        </Provider>
    )
}