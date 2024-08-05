import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            Супер распродажа!{" "}
            <span className="text-green-400">Специальное</span> предложение {""}
            <span className="text-red-500">до 70%</span> экономия
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Скидка распространяется на все товары, которые представлены в
            разделе Специальное предложение.
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className="bg-green-400">
              За покупками
            </Button>
            <Button size={"lg"}>Подробнее</Button>
          </div>
        </div>
        <div className="hidden lg:block w-100%">
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={600}
            height={600}
            className="lg:h-[70%] lg:w-[70%] xl:w-[80%] xl:h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
