import React from 'react';
import {Oval} from "react-loader-spinner";

export const Waiting = () => {
  return (
    <div className={"waiting-block"}>
      <Oval
          height={100}
          width={100}
          color="#F9C749"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="##FFEBB8"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
  );
};
