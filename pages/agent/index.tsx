import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Agentlist: NextPage = () => {
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      AGENT LIST {" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};
export default withLayoutBasic(Agentlist);