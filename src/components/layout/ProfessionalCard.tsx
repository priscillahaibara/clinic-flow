import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import type { Practitioner } from "@/data/practitioners";

type ProfessionalCardProps = {
  professional: Practitioner;
};

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const { id, name, specialty, image } = professional;

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          fill
          src={image}
          alt={`Photo of Dr. ${name}`}
          className="object-contain"
        />
      </div>

      <CardHeader>
        <CardTitle>Dr. {name}</CardTitle>
        <CardDescription>{specialty}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild variant="outline" className="w-full cursor-pointer">
          <Link href={`/professional/${id}`}>Schedule consultation</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
