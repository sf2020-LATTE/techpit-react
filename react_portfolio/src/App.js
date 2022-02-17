import './App.css';

import {Header} from './components/Header';
import {Skills} from './components/Skills';
import {Contact} from './components/Contact';

function App() {
    return (
        // React.Fragmentの省略ver
        <>
            <Header />
            <Skills />
            <Contact />
        </>
    );
}

export default App;
