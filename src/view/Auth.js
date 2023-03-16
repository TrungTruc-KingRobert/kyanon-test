import LoginForm from '../components/auth/LoginForm';
import ProfileForm from '../components/auth/ProfileForm';
import { Link } from 'react-router-dom';

const Auth = ({ authRoute }) => {
  let body;

  body = (
    <>
      {authRoute === 'login' && <LoginForm />}
      {authRoute === 'profile' && <ProfileForm />}
    </>
  );

  let buttonGoTo = (
    <>
      {authRoute === 'login' && (
        <Link to="/profile">
          <button className="btn-goto">
            Go to <b>Profile</b> Form &gt;&gt;&gt;
          </button>
        </Link>
      )}
      {authRoute === 'profile' && (
        <Link to="/login">
          <button className="btn-goto">
            Go to <b>Login</b> Form &gt;&gt;&gt;
          </button>
        </Link>
      )}
    </>
  );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="card">{body}</div>
          {buttonGoTo}
        </div>
      </div>
    </div>
  );
};

export default Auth;
