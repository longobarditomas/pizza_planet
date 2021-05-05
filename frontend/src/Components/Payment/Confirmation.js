export default function PaymentConfirmation() {
    return (
        <div className="container" style={{minHeight:"700px"}}>
            <br />
            <h1 style={{color:'white', fontFamily:'Titillium Web'}}>Thanks for your Purchase!</h1>
            <br />
            <p style={{color:'white'}}>If you selected the Take Out option we'll be waiting for you to withdraw your order in 30 minutes.</p>
            <p style={{color:'white'}}>If you selected the Delivery option your order will be arriving in approximately 45 minutes.</p>
        </div>
    );
} 