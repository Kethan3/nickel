import { gray } from "@radix-ui/colors";
import { Box, Button, Container, Flex, Heading, Separator, Text } from "@radix-ui/themes";

const RootPage = () => {
  return (
    <Box>
      <Container>
        <Box
          style={{
            border: "1px",
            borderStyle: "dotted",
            borderColor: gray.gray6,
          }}
        >
          <Flex direction="column" align="center" gap="8">
            
              <Heading size="9">The react Frame work for the web </Heading>
      <Box as="div" style={{ borderBottom : "1px" , borderBlockColor : gray.gray6   }}></Box>
            <Text align="center" style={{ maxWidth: 600 }}>
              Used by some of the world's largest companies, Next.js enables you
              to create high-quality web applications with the power of React
              components.
            </Text>

            <Flex direction="row" gap="4">
              <Button size="4"> Get Started</Button>
              <Button size="4" variant="soft">
                learn next.js
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default RootPage;
