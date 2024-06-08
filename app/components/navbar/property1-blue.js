import { useMemo } from "react";
import styles from "./property1-blue.module.css";

const Property1Blue = ({
  dimensionDetails,
  property1BlueIconWidth,
  property1BlueIconHeight,
  property1BlueIconPosition,
  property1BlueIconTop,
  property1BlueIconLeft,
}) => {
  const property1BlueIconStyle = useMemo(() => {
    return {
      width: property1BlueIconWidth,
      height: property1BlueIconHeight,
      position: property1BlueIconPosition,
      top: property1BlueIconTop,
      left: property1BlueIconLeft,
    };
  }, [
    property1BlueIconWidth,
    property1BlueIconHeight,
    property1BlueIconPosition,
    property1BlueIconTop,
    property1BlueIconLeft,
  ]);

  return (
    <img
      className={styles.property1blueIcon}
      alt=""
      src={dimensionDetails}
      style={property1BlueIconStyle}
    />
  );
};

export default Property1Blue;
