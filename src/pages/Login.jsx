import Container from '../components/Container'
import ContentBox from '../components/ContentBox';
import login from '../assets/Login.png'
import InputFiled from '../components/InputFiled';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PiEyeClosedBold, PiWarningFill } from 'react-icons/pi';
import { LuEye } from 'react-icons/lu';
import { useState } from 'react';
import SocialLoginRegister from '../components/SocialLoginRegister';
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [visible, setVisible] = useState(false)
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErrr] = useState('')

    const hendleLogin = (e) => {
        e.preventDefault()

        const from = e.target;

        const email = from.email.value;
        const password = from.password.value;

        // Emaill Validation
        const ValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!email) {
            setEmailErr('Please Enter Your Email Address')
        }
        if (!ValidEmail.test(email)) {
            setEmailErr('')
            return setEmailErr('Please Entart A valid Email')
        }

        // Password Validation
        const CharecterCheck = /^[A-Za-z\d@$!%*?#&]{8,}$/;
        const NumCheck = /^(?=.*\d)/;
        const SmallLetterCheck = /^(?=.*[a-z])/;
        const CapitalLetterCheck = /^(?=.*[A-Z])/;
        const SCharecterCheck = /^(?=.*[@$!%*?#&])/;
        const ValidPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
        
        if (!password) {
            setPasswordErrr('Enter A valid Password')
        }
        if (!NumCheck.test(password)) {
            setPasswordErrr('')
            setEmailErr('')
            return setPasswordErrr('Please Entart At least 1 Number on Password');
        }
        if (!SmallLetterCheck.test(password)) {
            setPasswordErrr('')
            setEmailErr('')
            return setPasswordErrr('Please Entart At least 1 Lowercase Charecter (like: a, b, c) on Password');
        }
        if (!CapitalLetterCheck.test(password)) {
            setPasswordErrr('')
            setEmailErr('')
            return setPasswordErrr('Please Entart At least 1 Uppercase Charecter (like: A, B, C) on Password');
        }
        if (!SCharecterCheck.test(password)) {
            setPasswordErrr('')
            setEmailErr('')
            return setPasswordErrr('Please Entart At least 1 Special Charecter (like: #, $, %) on Password');
        }
        if (!CharecterCheck.test(password)) {
            setPasswordErrr('')
            setEmailErr('')
            return setPasswordErrr('Please Entart A 8 Digit Password');
        }
        if (ValidPass.test(password) && ValidEmail.test(email)) {
            setPasswordErrr('')
            setEmailErr('')
            toast("Wow so easy!");
            
        }




    }
    return (
        <Container>
            <ContentBox>
                <ToastContainer />
                <div>
                    <h1 className='Title'>Welcome Back!</h1>
                    <form onSubmit={hendleLogin} className='Form'>
                        <div>
                            <InputFiled name={'email'} type={'email'} placeHolder={'Email/Username'} />
                            <div>
                                {
                                    emailErr && <div className='Warning'><PiWarningFill className='warningIcon' />{emailErr}</div>
                                }
                            </div>
                        </div>
                        <div className='Password'>
                            <InputFiled name={'password'} type={visible ? 'text' : 'Password'} placeHolder={'Password'} />
                            <div className='eye'>
                                {
                                    visible ? <LuEye onClick={() => setVisible(!visible)} /> : <PiEyeClosedBold onClick={() => setVisible(!visible)} />
                                }
                            </div>
                            {/* Error Message */}
                            <div>
                                {
                                    passwordErr && <div className='Warning'><PiWarningFill className='warningIcon' />{passwordErr}</div>
                                }
                            </div>
                        </div>
                        <p className='ForgetP'>Forget Password?</p>
                        <Button value={'Login'} />
                    </form>
                    <div className='divider'>
                        <hr className='line' />
                        <p>or</p>
                        <hr className='line' />
                    </div>
                    <SocialLoginRegister />
                    <p className='NavigationText'>Don’t Have and Account? <Link className='Link' to={'/register'}>Register</Link></p>
                </div>
                <div>
                    <img src={login} alt="" />
                </div>
            </ContentBox>
        </Container>
    );
};

export default Login;