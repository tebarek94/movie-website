import { HStack, Icon } from "@chakra-ui/react";
import { platform } from "../hooks/useGame";
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

export interface Props {
  platforms: platform[];
}

const PlatformList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug] || BsGlobe;
        return <Icon key={platform.id} as={IconComponent} boxSize={5} />;

      })}
    </HStack>
  );
};

export default PlatformList;
