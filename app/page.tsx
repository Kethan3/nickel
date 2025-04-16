
import { Box, Button, Container, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import HeroBlock from "./blocks/HeroBlock";
import AboutBlock from "./blocks/AboutBlock";

const RootPage = () => {
  return (
    <Flex  direction="column" align="stretch">
      <HeroBlock/>
      <AboutBlock />
    </Flex>
  )
};

export default RootPage;
