import './App.css';

import DropDowns from './components/DropDowns';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="page-container">
                <div className="left-column">
                    <DropDowns />
                </div>
                <div className="right-column">
                    <DropDowns />
                </div>
            </div>
        </>
    );
}

export default App;