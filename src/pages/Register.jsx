import Container from '../components/Container'
import ContentBox from '../components/ContentBox';
import register from '../assets/Register.png'
import InputFiled from '../components/InputFiled';
import Button from '../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PiEyeClosedBold } from 'react-icons/pi';
import { LuEye } from 'react-icons/lu';
import { useState } from 'react';
import SocialLoginRegister from '../components/SocialLoginRegister';


const Register = () => {
    const [visible, setVisible] = useState(false)
    return (
        <Container>
            <ContentBox>
                <div>
                    <img src={register} alt="" />
                </div>
                <div>
                    <h1 className='Title'>Welcome</h1>
                    <form className='Form'>
                        <InputFiled type={'text'} placeHolder={'Full Name'}/>
                        <InputFiled type={'text'} placeHolder={'UserName'}/>
                        <InputFiled type={'Email'} placeHolder={'Email address'}/>
                        <div className='Password'>
                            <InputFiled type={visible? 'text' : 'Password'} placeHolder={'Password'}/>
                            <div className='eye'>
                                {
                                    visible ? <LuEye onClick={()=> setVisible(!visible)} /> : <PiEyeClosedBold onClick={()=> setVisible(!visible)} />
                                }
                            </div>
                        </div>
                        <div className='Password'>
                            <InputFiled type={visible? 'text' : 'Password'} placeHolder={'Confirm Password'}/>
                            <div className='eye'>
                                {
                                    visible ? <LuEye onClick={()=> setVisible(!visible)} /> : <PiEyeClosedBold onClick={()=> setVisible(!visible)} />
                                }
                            </div>
                        </div>
                        <Button value={'Register'}/>
                    </form>
                   <div className='divider'>
                     <hr className='line'/>
                     <p>or</p>
                     <hr className='line'/>
                   </div>
                   <SocialLoginRegister/>
                   <p className='NavigationText'>Already Have an Account? <Link className='Link' to={'/login'}>login</Link></p>
                </div>
            </ContentBox>
        </Container>
    );
};

export default Register;