import { Typography } from "antd";

const AppFooter = () => {
  return (
    <div className="appFooter">
      <Typography.Link href="javascript:void(0);">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="javascript:void(0);">
        Terms & Conditions
      </Typography.Link>
      <Typography.Link href="javascript:void(0);">
        Return Policy
      </Typography.Link>
      <Typography.Link href="tel:+123456789">
        +123456789
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
