import { lazy } from "react"


const Account = lazy(() => import("./views/management/account/Account"))
const Position = lazy(() => import("./views/management/position/Position"))
const Product = lazy(() => import("./views/management/product/Product"))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/product', name: 'Dashboard', element: Product },
    { path: '/position', name: 'Theme', element: Position, exact: true },
    { path: '/account', name: 'Colors', element: Account },
]

export default routes