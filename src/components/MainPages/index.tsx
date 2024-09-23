import React from 'react';
import { HeadFC } from '../parts/Header';
import { FooterFC } from '../parts/Footer';
import { ContentFC } from '../parts/Content';
import "../../css/medium.css";
import "../../css/ie.css";
import "../../css/ie8.css";

export function PagesFC(): React.JSX.Element {
  return (<>
    <header className="header">
      < HeadFC />
    </header>
    <div className="content">
      <ContentFC />
    </div>

    <div className="aside">
    </div>
    <footer className="footer">
      < FooterFC />
    </footer>
  </>);
}
