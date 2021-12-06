import About from "./pages/about/About";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Navigation from "./components/navbar/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AlertState} from "./context/alert/AlertSatate";
import FirebaseState from "./context/firebase/FirebaseState";


const App = () => {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navigation/>
                    <div className={'container pt-4'}>
                        <Routes>
                            <Route path={'/'} element={<Home/>} end/>
                            <Route path={'/about'} element={<About/>} end/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )

};

export default App;