import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface TableProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
}

const Table: React.FC<TableProps> = ({ item }) => {
  return (
    <Card className="py-4 gap-4 flex">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.title}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl min-h-[150px]"
          src={item.image}
          width={270}
        />
        <h4 className="font-bold text-large">{item.description}</h4>
      </CardBody>
    </Card>
  );
};

export default Table;
