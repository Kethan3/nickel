"use client";

import { Container, Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Container size="3" px="4" py="3">
      <Flex direction="row" justify="center" align="center" gap="5">
        {navItems.map((item) => (
          <RadixLink
            key={item.href}
            asChild
            color={pathname === item.href ? "blue" : "gray"}
            weight={pathname === item.href ? "bold" : "medium"}
            underline="none"
          >
            <Link href={item.href}>
              <Text>{item.label}</Text>
            </Link>
          </RadixLink>
        ))}
      </Flex>
    </Container>
  );
}
