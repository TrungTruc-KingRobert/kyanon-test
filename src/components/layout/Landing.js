import { Navigate } from 'react-router-dom';

const Lading = () => {
  return (
    <Navigate
      replace={true}
      to="/login"
    />
  );
};

export default Lading;
