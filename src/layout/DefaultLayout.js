import { Typography } from "@mui/material"
import { AppContent, AppFooter, AppHeader } from "../components/index"

const DefaultLayout = () => {
    return (
        <div>
            <Typography>Default Layout</Typography>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default DefaultLayout