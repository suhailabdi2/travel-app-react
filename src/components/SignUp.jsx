const SignUp =({openSignUpModal,setopenSignUpModal}) => {
    return(
        <div style={{display: openSignUpModal ? "block":"none"}}
        className='fixed'>
            <div onClick={() =>{
                setopenSignUpModal(false);
                console.log(openSignUpModal);
            }} className="cross-btn">X</div>
            <div className="form">
                <div className="header">
                    <p>New Here?</p>
                    <p className="form-header">Register</p>
                </div>
                <div className="inputs">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="submit-btn">SUBMIT</div>
            </div>
        </div>
    )
}
export default SignUp