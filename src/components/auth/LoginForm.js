import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const [info, setInfo] = useState();

  const onSubmit = (data) => {
    setInfo(data);
  };
  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="loginform"
    >
      <div className="loginform__title">Login</div>
      <label>Email:</label>
      <input
        type="text"
        placeholder="example@kyanon.digital"
        {...register('useremail', { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.useremail && <span>This field is required</span>}
      <label>Password:</label>
      <input
        type={showPass ? 'text' : 'password'}
        placeholder={showPass ? 'password' : '******'}
        {...register('userpassword', { required: true })}
      />
      {errors.userpassword && <span>This field is required</span>}
      <div className="loginform__footer">
        <div className="checkbox">
          <input
            type="checkbox"
            className="box"
            checked={showPass}
            onChange={showPassword}
          />
          <label>Show password</label>
        </div>
        <input
          type="submit"
          value="Sign in"
          className="btn-signin"
        />
      </div>
      {info ? (
        <div className="form__showinfo">
          <div>
            <b>Email: </b>
            {info.useremail}
          </div>
          <div>
            <b>Password: </b>
            {info.userpassword}
          </div>
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default LoginForm;
