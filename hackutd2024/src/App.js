import './App.css';

import DropDowns from './components/DropDowns';
import Navbar from './components/Navbar';
import GraphButton from './components/GraphButton';
import UploadFile from './components/UploadFile';

function App() {
    return (
        <>
            <Navbar />
            <UploadFile/>
            <div className="page-container">
                <div className="left-column">
                    <DropDowns />
                </div>
                <div className="right-column">
                    <DropDowns />
                </div>
            </div>
            <div className="bottom-column">
                <GraphButton />
            </div>
        </>
    );
}

export default App;