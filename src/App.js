import Header from './components/Header'
import Product from './components/Product'
import { MyProvider } from './context'

function App() {
    return (
        <>
            <MyProvider>
                <Header />
                <Product />
            </MyProvider>
        </>
    );
}

export default App;
