import React, { use, useContext } from "react";
import { AuthContext } from "../components/context/auth.context.jsx";
import { Navigate } from "react-router-dom";
import { Result, Button } from "antd";
const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (use && user && user.id) {
    return <>{props.children} </>;
  }
  return (
    // <>
    //   <Navigate to="/login" replace />
    // </>
    <Result
      status="403"
      title="Unanthorized Access!"
      subTitle={"Bạn cần đăng nhập để truy cập trang này!"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to home page</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;
