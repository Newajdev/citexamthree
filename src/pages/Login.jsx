import Container from '../components/Container'
import ContentBox from '../components/ContentBox';
import login from '../assets/Login.png'
import InputFiled from '../components/InputFiled';
import Button from '../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
    return (
        <Container>
            <ContentBox>
                <div>
                    <h1 className='Title'>Welcome Back!</h1>
                    <form className='Form'>
                        <InputFiled type={'text'} placeHolder={'Examples'}/>
                        <InputFiled type={'text'} placeHolder={'Examples'}/>
                        <p className='ForgetP'>Forget Password?</p>
                        <Button value={'Login'}/>
                    </form>
                   <div className='divider'>
                     <hr className='line'/>
                     <p>or</p>
                     <hr className='line'/>
                   </div>
                   <div className='Social_Icon'>
                    <FcGoogle  className='Google-Icon Icon' />
                    <FaFacebook className='Fb-Icon Icon' />
                   </div>

                   <p className=''>Don’t Have and Account? Register</p>
                </div>
                <div>
                    <img src={login} alt="" />
                </div>
            </ContentBox>
        </Container>
    );
};

export default Login;