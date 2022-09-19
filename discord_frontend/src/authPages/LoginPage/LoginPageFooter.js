import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import LoginPage from './LoginPage';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    return (
        <div>
            <CustomPrimaryButton 
                label='log in'
                additionalStyles={{ marginTop: '30px' }}
                disabled={!isFormValid}
                onClick={handleLogin}
            />
        </div>
    )
};

export default LoginPageFooter;