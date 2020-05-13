import React from 'react';

export default (props:any) => {
  // console.log(props);
  return (
    <div>
        <div>this is layout</div>
      <div style={{ padding: 20 }}>{ props.children }</div>
    </div>
  );
}
