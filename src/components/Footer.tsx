"use client";

import { useState } from "react";
import CanvasCursor from "./CanvasCursor";
import { Button } from "./ui/button";

export default function Footer() {
  const [showCanvasCursor, setShowCanvasCursor] = useState(false);

  function toggleCanvasCursor() {
    document.body.classList.toggle("overflow-hidden");
    setShowCanvasCursor(!showCanvasCursor);
  }

  return (
    <footer className="w-[calc(100% + 2rem)] relative -mx-8 flex h-24 flex-col items-center justify-center sm:-mx-16">
      <Button className="text-sm" variant="ghost" onClick={toggleCanvasCursor}>
        &copy; {new Date().getFullYear()} Dominik Bartuška
      </Button>
      {showCanvasCursor && <CanvasCursor />}
    </footer>
  );
}
