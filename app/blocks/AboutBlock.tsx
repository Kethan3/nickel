import { Box, Card, Container, Flex, Grid, Text } from "@radix-ui/themes";
import { text } from "stream/consumers";

const aboutItems = [
  {
    title: "Built-in Optimizations",
    description:
      "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
  },
  {
    title: "Dynamic HTML Streaming",
    description:
      "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
  },
  {
    title: "Data Fetching",
    description:
      "Make your React component async and await your data. Next.js supports both server and client data fetching.",
  },
  {
    title: "CSS Support",
    description:
      "Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.",
  },
  {
    title: "Server Actions",
    description:
      "Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.",
  },
  {
    title: "Route Handlers",
    description:
      "Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.",
  },
  {
    title: "Advanced Routing & Nested Layouts",
    description:
      "Create routes using the file system, including support for more advanced routing patterns and UI layouts.",
  },
  {
    title: "Middleware",
    description:
      "Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization.",
  },
];

const AboutBlock = () => {
  return (
    <Box>
      <Container>
        <Flex direction="column">
          <Grid columns="3" gapX="4" gapY="4">
            {aboutItems.map((aboutItem) => {
              return (
                <Card key={aboutItem.title}>
                  <Flex direction="column" gap="4">
                    <Text style={{ fontWeight: "bold" }}>
                      {aboutItem.title}
                    </Text>
                    <Text>{aboutItem.description}</Text>
                  </Flex>
                </Card>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutBlock;
