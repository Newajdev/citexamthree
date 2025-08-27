import Container from '../components/Container'
import ContentBox from '../components/ContentBox';
import login from '../assets/Login.png'
import InputFiled from '../components/InputFiled';
import Button from '../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PiEyeClosedBold } from 'react-icons/pi';
import { LuEye } from 'react-icons/lu';
import { useState } from 'react';
import SocialLoginRegister from '../components/SocialLoginRegister';

const Login = () => {
    const [visible, setVisible] = useState(false)
    return (
        <Container>
            <ContentBox>
                <div>
                    <h1 className='Title'>Welcome Back!</h1>
                    <form className='Form'>
                        <InputFiled type={'text'} placeHolder={'Email/Username'}/>
                        <div className='Password'>
                            <InputFiled type={visible? 'text' : 'Password'} placeHolder={'Password'}/>
                            <div className='eye'>
                                {
                                    visible ? <LuEye onClick={()=> setVisible(!visible)} /> : <PiEyeClosedBold onClick={()=> setVisible(!visible)} />
                                }
                            </div>
                        </div>
                        <p className='ForgetP'>Forget Password?</p>
                        <Button value={'Login'}/>
                    </form>
                   <div className='divider'>
                     <hr className='line'/>
                     <p>or</p>
                     <hr className='line'/>
                   </div>
                   <SocialLoginRegister/>

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