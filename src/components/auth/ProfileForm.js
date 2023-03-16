import { useForm } from 'react-hook-form';
import { useState } from 'react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const [info, setInfo] = useState();

  const onSubmit = (data) => {
    setInfo(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="profileform"
    >
      <div className="profileform__title">Profile</div>
      <label>Full name:</label>
      <input
        type="text"
        {...register('username', { required: true })}
      />
      {errors.username && <span>This field is required</span>}
      <label>Day Of Birth:</label>
      <input
        type="text"
        {...register('userbirth', { required: true })}
      />
      {errors.userbirth && <span>This field is required</span>}
      <label>Email:</label>
      <input
        type="text"
        {...register('useremail', { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.useremail && <span>This field is required</span>}
      <label>Phone:</label>
      <input
        type="text"
        {...register('userphone', { required: true })}
      />
      {errors.userphone && <span>This field is required</span>}
      <div className="profileform__footer">
        <input
          type="submit"
          value="Update"
          className="btn-update"
        />
        <button
          type="button"
          className="btn-cancel"
          onClick={() => {
            setValue('username', '');
            setValue('userbirth', '');
            setValue('useremail', '');
            setValue('userphone', '');
            setInfo('');
          }}
        >
          Cancel
        </button>
      </div>
      {info ? (
        <div className="form__showinfo">
          <div>
            <b>Full name: </b>
            {info.username}
          </div>
          <div>
            <b>Day of birth: </b>
            {info.userbirth}
          </div>
          <div>
            <b>Email: </b>
            {info.useremail}
          </div>
          <div>
            <b>Phone: </b>
            {info.userphone}
          </div>
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default LoginForm;
