import "./About_detail.scss";

const About_detail = () => {
  return (
    <>
      <div className="aboutDetail py-20">
        <div className="container mx-auto">
          <div className="aboutDetail_wrapper">
            <div className="aboutDetail_header">
              <div className="flex justify-between items-center">
                <div className="left w-2/3 flex items-center gap-2">
                  <h2 className="title_sub">
                    <span className="pr-1 text-white">#</span>about-me
                  </h2>
                  <div className="line w-2/3 h-px "></div>
                </div>
              </div>
            </div>
            <div className="aboutDetail_content mt-10 flex">
              <div className="left w-3/5">
                <div className="title_item mb-5">Hello, i’m 
                Linlcon!</div>
                <div className="title_item mb-5">
                  I’m a self-taught front-end developer based in Kyiv, Ukraine.
                  I can develop responsive websites from scratch and raise them
                  into modern user-friendly web experiences.
                </div>
                <div className="title_item mb-5">
                  Transforming my creativity and knowledge into a websites has
                  been my passion for over a year. I have been helping various
                  clients to establish their presence online. I always strive to
                  learn about the newest technologies and frameworks.
                </div>
                <a href="" className="btn_style ">
                  Read more
                </a>
              </div>
              <div className="right w-2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_detail;
