import { Typography } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

// routes config
import routes from '../routes'

const AppContent = () => {
    return (
        <div>
            <Typography>App Content</Typography>
            <Suspense fallback={<div className="container">Loading...</div>}>
                <Routes>
                    {routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<Navigate to="product" replace />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export { AppContent }