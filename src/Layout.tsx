import MyAccount from './components/MyAccount'
import MyBalance from './components/MyBalance'
import BlockNumber from './components/BlockNumber'

const Layout = () => {
    return(
        <div>
            <MyAccount />
            <MyBalance />
            <BlockNumber />
        </div>
    )
}

export default Layout