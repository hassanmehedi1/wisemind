import React from "react";
import Link from "next/link";

interface DataType {
  id: number;
  title: string;
  des: string;
}
[];

const service_data: DataType[] = [
  {
    id: 1,
    title: `AI/ML Solutions`,
    des: `Unlock the potential of Artificial Intelligence and Machine Learning to drive innovation and optimize business processes. We deliver tailored AI/ML solutions that enhance decision-making, improve operational efficiency, and foster growth.`,
  },
  {
    id: 2,
    title: `Web Development`,
    des: `We specialize in creating high-performing, responsive websites that provide a seamless user experience across all devices. Our web development services focus on functionality, speed, and scalability to meet your business goals.`,
  },
  {
    id: 3,
    title: `Mobile Application Development`,
    des: `We design and develop custom mobile applications for both Android and iOS, ensuring robust performance, security, and an intuitive user experience. Our apps are built to drive engagement and meet the evolving needs of your business.`,
  },
  {
    id: 4,
    title: `UI/UX Design`,
    des: `Our UI/UX design services focus on delivering user-centric designs that are both visually appealing and highly functional. We aim to optimize user experiences, improve usability, and ensure that your digital products are intuitive and easy to navigate.`,
  },
  {
    id: 5,
    title: `Brand Design`,
    des: `We create compelling brand identities that resonate with your target audience. Our brand design services include logo creation, typography, color schemes, and messaging, all designed to build a strong, cohesive brand presence in the market.`,
  },
  {
    id: 6,
    title: `Brand Design`,
    des: `We produce high-quality 2D and 3D animations that effectively communicate your brand story. From explainer videos to promotional content, our animations capture attention and engage your audience, enhancing your digital presence.`,
  },
];

const ServiceHomeOne = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Core Services
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Comprehensive IT Solutions for Business Growth
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>View Services</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns"
              >
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url(/assets/img/hero_img_1.jpg)`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service" className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>
    </>
  );
};

export default ServiceHomeOne;
