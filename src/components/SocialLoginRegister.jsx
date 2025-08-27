import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLoginRegister = () => {
    return (
        <div className='Social_Icon'>
            <FcGoogle className='Google-Icon Icon' />
            <FaFacebook className='Fb-Icon Icon' />
        </div>
    );
};

export default SocialLoginRegister;