import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function CardsSection() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Link href="/classes/1">
        <Card className="bg-muted">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="">$1,250.00</CardTitle>
          </CardHeader>
        </Card>
      </Link>

      <Link href="/classes/1">
        <Card className="bg-muted">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="">$1,250.00</CardTitle>
          </CardHeader>
        </Card>
      </Link>
      <Link href="/classes/1">
        <Card className="bg-muted">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="">$1,250.00</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
