import MyAccount from './components/MyAccount'
import MyBalance from './components/MyBalance'
import BlockNumber from './components/BlockNumber'
import ReadContract from './components/ContractRead'
import BacaString from './components/BacaString'
import BacaNumber from './components/BacaNumber'
import BacaToken from './components/BacaToken'
import BacaArgument from './components/BacaArgument'
import TombolBaca from './components/TombolBaca'
import TombolTulis from './components/TombolTulis'

const Layout = () => {
    return(
        <div className='container'>
            <MyAccount />
            <MyBalance />
            <BlockNumber />
            <ReadContract />
            <BacaString />
            <BacaNumber />
            <BacaToken />
            <BacaArgument />
            <TombolBaca />
            <TombolTulis />
        </div>
    )
}

export default Layout