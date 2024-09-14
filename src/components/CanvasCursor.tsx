"use client";

import useCanvasCursor from "@/utils/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas className="pointer-events-none fixed inset-0 z-[999]" id="canvas" />
  );
};
export default CanvasCursor;
