import { FC, ReactNode } from "react";
import Link from "next/link";

interface CustomLink {
  children: ReactNode;
  href: string;
  className?: string;
}

const CustomLink: FC<CustomLink> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={className ? className : ""}>{children}</a>
    </Link>
  );
};

export default CustomLink;
