"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
const Back = () => {
  async function handleClick() {}
  return (
    <div className="my-8">
      <Link href="/classes">
        <Button onClick={handleClick}>
          <ChevronLeft />
        </Button>
      </Link>
    </div>
  );
};

export default Back;
