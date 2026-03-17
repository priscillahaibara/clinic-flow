import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Professionals() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-semibold">
          Available Professionals
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                fill
                src="/professionalImg.png"
                alt="Professional photo"
                className="object-contain"
              />
            </div>

            <CardHeader>
              <CardTitle>Dr. Amanda Silva</CardTitle>
              <CardDescription>Gynecologist</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                asChild
                variant={"outline"}
                className="w-full cursor-pointer"
              >
                <Link href="/professional/1">Schedule consultation</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
