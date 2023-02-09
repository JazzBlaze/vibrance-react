import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export const AppearSensor = ({onChange, children, ...rest}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  
  return (
    <VisibilitySensor {...rest} onChange={(isVisible) => {
      if (isVisible) setHasBeenVisible(true)
      if (onChange) onChange(isVisible)
    }}>
      {
        ({
          isVisible,
          ...restRenderProps
        }) => {
          return children({ isVisible, ...restRenderProps, hasBeenVisible })
        }
      }
    </VisibilitySensor>
  );
};

AppearSensor.propTypes = VisibilitySensor.propTypes
AppearSensor.defaultProps = VisibilitySensor.defaultProps
