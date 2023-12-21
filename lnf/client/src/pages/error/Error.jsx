import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

function Error() {
  const navigate = useNavigate();

  const handleGoBackToHome = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="lnf-not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleGoBackToHome}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export { Error as default };
