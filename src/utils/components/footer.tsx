import React from "react";

import ZoojaIcon from "utils/components/zoojaicon";
import totoro_footer from "assets/totoro_footer.png";

import app from "app.module.css";
import components from "utils/components/components.module.css";

export default class Footer extends React.Component {
  openLink = (url: string): void => window.open(url, "_blank")?.focus();
  openEmail = (url: string): void => window.open(url, "_self")?.focus();

  render(): JSX.Element {
    return (
      <div className={components.footer}>
        <img
          className={components.footer_image}
          alt="footer"
          src={totoro_footer}
        />

        <div className={components.footer_content}>
          <div className={components.footer_content_left}>
            <span className={components.footer_heading}>huiting lee</span>
            <div className={components.buttons}>
              <img
                alt="github"
                className={app.info_btn}
                src="https://img.icons8.com/ios-glyphs/40/ffffff/github.png"
                onClick={() => this.openLink("https://github.com/tingalinga")}
              />
              <img
                alt="linkedin"
                className={app.info_btn}
                src="https://img.icons8.com/ios-glyphs/40/ffffff/linkedin-circled--v1.png"
                onClick={() =>
                  this.openLink(
                    "https://www.linkedin.com/in/huiting-lee-6a2b061a1/"
                  )
                }
              />
              <img
                alt="email"
                className={app.info_btn}
                src="https://img.icons8.com/ios-glyphs/40/ffffff/email-sign.png"
                onClick={() => this.openEmail("mailto:huiting.lee@u.nus.edu")}
              />
            </div>
          </div>
          {/* <div className={components.footer_content_center}>
            <div className={components.footer_zoojaicon}>
              <ZoojaIcon icon="c" />
            </div>
            <span className={components.footer_text}>Have a great day!</span>
          </div> */}
          <div className={components.footer_content_right}>
            <div className={components.footer_credits}>
              Icons by{" "}
              <a href="https://icons8.com" target="_blank" rel="noreferrer">
                Icons8
              </a>
            </div>
            <div className={components.footer_credits}>
              Ⓒ 2021 All artwork by Huiting Lee
            </div>
          </div>
        </div>
      </div>
    );
  }
}
