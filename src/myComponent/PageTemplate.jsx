import Navbar from "./Navbar"

// eslint-disable-next-line react/prop-types
const PageTemplate = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default PageTemplate
