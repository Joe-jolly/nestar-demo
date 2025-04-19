import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Agentlist: NextPage = () => {
  const device = useDeviceDetect();
  const [title, setTitle] = useState<string>("Hello");

  if (device === "mobile") {
    return (
      <Stack> AGENT LIST MOBILE </Stack>
    );
  } else{
    return (
      <div>
        AGENT LIST {" "}
        <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
          PressMe
        </button>
      </div>
    );
  };
};
export default withLayoutBasic(Agentlist);