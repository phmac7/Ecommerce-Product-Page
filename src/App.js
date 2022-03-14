import Header from './components/Header'
import Product from './components/Product'
import { MyProvider } from './context'
import Attribution from './components/Attribution'

function App() {
    return (
        <>
            <MyProvider>
                <Header />
                <Product />
                <Attribution />
            </MyProvider>
        </>
    );
}

export default App;
