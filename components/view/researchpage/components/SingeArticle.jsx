import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircleArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingeArticle = ({ journal, index }) => {
  return (
    <Card key={index} className="flex flex-col">
      <CardContent className="flex-1 p-4">
        <div className=" bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
          <Image
            src="/assets/svg/research/blog_banner.svg"
            alt=" blog banner "
            height={600}
            width={800}
            className=""
          />
        </div>
        <span className="text-xl font-semibold text-muted-foreground text-primary">
          {journal.title}
        </span>
        <h5 className="font-regular mb-2  text-[16px] text-primary">
          {journal.summary}
        </h5>
        {/* <p className="text-sm text-muted-foreground line-clamp-3">{journal.description}</p> */}
      </CardContent>
      <CardFooter className="p-6 pt-0 ">
        <Link variant="link" href={journal.url} target="_blank" className="px-0 text-primary flex justify-center items-end hover:underline gap-2">
          Read the paper <CircleArrowRight className="w-4 h-5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SingeArticle;
