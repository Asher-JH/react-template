import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import BasicContainer from "@components/BasicContainer";
import PageHeader from "@components/PageHeader";
import SocialLinksContainer from "@components/SocialLinksContainer";

const data = [
  {
    icon: <TwitterIcon fontSize="large" />,
    text: "Twitter",
    color: "",
    url: "https://github.com/Asher-JH",
  },
  {
    icon: <FacebookIcon fontSize="large" />,
    text: "Facebook",
    color: "",
    url: "https://github.com/Asher-JH",
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    text: "GitHub",
    color: "",
    url: "https://github.com/Asher-JH",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    text: "Instagram",
    color: "",
    url: "https://github.com/Asher-JH",
  },
];

const SocialLinks = () => {
  return (
    <BasicContainer>
      <PageHeader primary="Social Links" secondary="Connect with me" />
      <SocialLinksContainer data={data} />
    </BasicContainer>
  );
};

export default SocialLinks;
