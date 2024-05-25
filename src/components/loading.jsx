
import React from 'react';


const Loading = () => {
  return (
    <div className="loading">
       <p>Please wait...</p>
      {<iframe src="https://lottie.host/embed/8ddd90bd-5efb-456b-beab-54c530c39fef/rJa7pdcpMk.json"
              width="400" height="400" frameborder="0" scrolling="no"></iframe>}
    </div>
  );
};

export default Loading;
