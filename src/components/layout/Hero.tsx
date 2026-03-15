import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <article className="max-w-xl">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight lg:text-5xl">
              Find the best healthcare professionals in one place.
            </h1>
            <p className="mt-6 text-base text-gray-700 lg:text-lg">
              We help healthcare professionals organize their consultations with
              a focus on simplicity and efficiency.
            </p>
            <div className="mt-8 flex w-fit gap-4">
              <Button className="cursor-pointer bg-sky-800 hover:bg-sky-700">
                Find a professional
              </Button>

              <Button
                variant="outline"
                className="cursor-pointer hover:bg-gray-100"
              >
                Join as a professional
              </Button>
            </div>
          </article>
          <div className="hidden md:block">
            <Image
              src="/doctorImg.png"
              width={400}
              height={500}
              alt="Healthcare professional image"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
