import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Adventurer (ISFP)</p>
        <p className="pb-2">

Traveling with friends is an irreplaceable experience. 
It creates grand memories, teaches us about life and how to become better individuals, and allows us to truly understand and know each other more deeply. 
That's why I love traveling with friends and hope to have the opportunity to journey together again in the future.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
