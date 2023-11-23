import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Camera() {
  return (
    <div>
      <Suspense
        fallback={<div className="text-7xl text-primary">Loading...</div>}
      >
        <Spline scene="https://prod.spline.design/dLfHbfLHnhn7ZooC/scene.splinecode" />
      </Suspense>
    </div>
  );
}

export default Camera;
