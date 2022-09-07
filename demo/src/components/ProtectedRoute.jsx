import { Redirect } from '@reach/router';

export const ProtectedRoute = ({
  isAuthorized,
  component: Component,
  ...rest
}) => {
  return isAuthorized ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/login" noThrow />
  );
};
