import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircleArrowRight } from 'lucide-react';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleArticle = ({ journal, index }) => {
  return (
   
    <Card 
    key={index} 
    className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]"
  >
    <CardContent className="flex-1 p-4 pb-0">
      <span className="text-xl line-clamp-4 font-semibold text-muted-foreground text-primary">
        {journal.title}
      </span>
      <h5 className="font-regular line-clamp-4 mb-2 text-[16px] text-primary">
        {journal.summary}
      </h5>
    </CardContent>
    <CardFooter className="p-4 pt-0 flex flex-col items-start">
      <div className="bg-gray-200 my-2 rounded-lg flex w-20 items-center justify-center">
        <Image
          src="/assets/svg/research/blog_banner.svg"
          alt="blog banner"
          height={600}
          width={800}
          className=""
        />
      </div>
      <Link variant="link" href={journal.url} target="_blank" className="px-0 text-primary flex justify-center items-end hover:underline gap-2">
          Read the paper <CircleArrowRight className="w-4 h-5" />
        </Link>
    </CardFooter>
    </Card>
  );
};

export default SingleArticle;

