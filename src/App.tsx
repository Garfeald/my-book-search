import {Provider} from "react-redux";
import {store} from "./redux/store";
import { AppRouter } from "./components/AppRouter";

export const App = () => {
    return (
        <Provider store={store}>
            <div>
                <AppRouter/>
            </div>
        </Provider>
    )
}