import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "relative",
        width:"100%",
        top:"4.5vh"
    }
    return (
        <footer className="bg-dark text-light text-center py-2" style={footerStyle}>
                Copyright &copy; MyTodoList.com | All rights reserved


        </footer>
    )
}

export default Footer
