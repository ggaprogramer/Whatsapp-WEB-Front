import '@auth/styles/layout-style.scss';

export default function authPage({children}: Readonly<{children: React.ReactNode}>) {
    return (

        <div className="auth-page">
            <div className='auth-page-box'>
                <h1 className='title-primary'>
                    Acessar o Whatsapp
                </h1>
                <p className='title-secoundary'>
                    Use o WhatsApp no seu navegador para enviar mensagens privadas para seus amigos e familiares.
                </p> 
                <img src="/images/figure-phone1.png" 
                alt="Acessar o Whatsapp. Use o WhatsApp no seu navegador 
                para enviar mensagens privadas para seus amigos e familiares." />
            </div>  
            {children}
        </div>
    )
}