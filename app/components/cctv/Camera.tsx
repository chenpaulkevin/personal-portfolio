import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Camera() {
  return (
    <div className="w-full">
      <Suspense
        fallback={<div className="text-7xl text-primary">Loading...</div>}
      >
        <Spline scene="https://prod.spline.design/tMrOzfs-iZZ-GrBe/scene.splinecode" />
      </Suspense>
    </div>
  );
}

export default Camera;
