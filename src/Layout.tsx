import MyAccount from './components/MyAccount'
import MyBalance from './components/MyBalance'
import BlockNumber from './components/BlockNumber'
import ReadContract from './components/ContractRead'
import BacaString from './components/BacaString'
import BacaNumber from './components/BacaNumber'

const Layout = () => {
    return(
        <div>
            <MyAccount />
            <MyBalance />
            <BlockNumber />
            <ReadContract />
            <BacaString />
            <BacaNumber />
        </div>
    )
}

export default Layout