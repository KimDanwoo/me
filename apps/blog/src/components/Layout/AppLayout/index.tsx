import type { PropsWithChildren } from "react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "gatsby";
import "~/styles/components/layout.scss";

const AppLayout = ({ children }: PropsWithChildren) => {
  const [ref, isScrollTop] = useInView({ initialInView: true });

  return (
    <>
      <div ref={ref} />
      <div className="layout-wrapper">
        <header className={!isScrollTop ? "scrolled" : undefined}>
          <Link className="link-to-home" to="/">
            Dansoon
          </Link>
          <a className="link-to-about" href="https://github.com/KimDanwoo">
            GITHUB
          </a>
        </header>
        <main>{children}</main>
        <footer>
          ©<a href="https://github.com/KimDanwoo">Danwoo</a>, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default AppLayout;
