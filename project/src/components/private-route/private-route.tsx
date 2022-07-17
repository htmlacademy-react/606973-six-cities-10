import {Navigate} from 'react-router-dom';
import {EAppRoute, EAuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: EAuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === EAuthorizationStatus.Auth
      ? children
      : <Navigate to={EAppRoute.Login} />
  );
}

export default PrivateRoute;
