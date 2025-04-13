import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div>
      Contact Us {" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};
export default withLayoutBasic(CS);