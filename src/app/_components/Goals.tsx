import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Travel around the world</li>
          <li>Get plenty of rest</li>
          <li>Improve communication skills</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
