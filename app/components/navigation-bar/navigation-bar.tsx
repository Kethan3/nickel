"use client";

import { Container } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const path = usePathname();

  const paths = {
    home: "/",
    about: "/about",
    pricing: "/pricing",
    blog: "/blog",
  };
  return (
    <Container>
      <div>
        <ul className="flex flex-row  items-center justify-center gap-8 py-4 ">
          <li key={paths.home}>
            <Link href="/">Home</Link>
          </li>
          <li key={paths.about}>
            <Link href="/about">About</Link>
          </li>
          <li key={paths.pricing}>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li key={paths.blog}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};
