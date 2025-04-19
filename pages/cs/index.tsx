import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  const device = useDeviceDetect();
  const [title, setTitle] = useState<string>("Hello");

  if (device === "mobile")
  {
    return (
      <Stack> Contact Us MOBILE </Stack>
    );
  } else {
    return (
      <div>
        Contact Us {" "}
        <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
          PressMe
        </button>
      </div>
    );
  };
};
export default withLayoutBasic(CS);