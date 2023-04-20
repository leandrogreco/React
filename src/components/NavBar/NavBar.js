import CartWidget from "../CartWiget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Forti tienda</h3>
            <div>
                <button>Fortigate</button>
                <button>FortiAP</button>
                <button>Fortiswitch</button>                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar