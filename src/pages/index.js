import './index.css';

import logoType from "../assets/images/logoType.svg"
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons"
import { Swiper, SwiperSlide } from "swiper/react";

import IndexHeader from '../components/pages/index/header';
import IndexCarousel from '../components/pages/index/carousel';
import OptionBox from '../components/pages/index/optionBox';
import IndexFooter from '../components/pages/index/indexFooter';

// Import Swiper styles
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Mousewheel]);

function IndexPage() {
  return (
    <div>
      <img src="/img/line.png" className="lineWall z-0" alt="خط مورب" />
      <div className="mainContent z-10 relative">

        <IndexHeader />
        <IndexCarousel />

        <div className="flex flex-col mx-auto w-8/12">

          <div className="my-10">
            <div className="flex justify-center text-2xl h-8">
              <img src={logoType} className="h-full mx-2" alt="معلم یار" />
              چیست؟
            </div>
            <p className="text-lg py-6 px-9 text-center">
              طراحی برگ امتحانی، همواره یکی از دغدغه‌‌های معلمان در طول ترم تحصیلی خصوصاً پایان ترم بوده است. ما در سامانه معلم‌یار تلاش کرده‌ایم فضایی را برای شما فراهم آوریم که در عین سادگی، امتحان های خود را در سریع‌ترین زمان ممکن طراحی کنید.
            </p>
            <div className="my-5 flex justify-around">
              <OptionBox title="سرعت بالای طراحی" icon="light">
                به طور متوسط در هر ۱۰ دقیقه میتوانید یک امتحان کامل را طراحی کنید و برگه‌ی چاپی آن را دریافت کنید
              </OptionBox>
              <OptionBox title="هسته‌ی قوی پنل کاربری" icon="gear">
                مهندسین ‌ما در پشت صحنه تلاش می‌کنند تا با بهره‌گیری از آخرین فناوری‌های روز دنیا بهترین‌ها را برای شما فراهم کنند
              </OptionBox>
              <OptionBox title="رایگان!" icon="dollar">
                اینجا با خیال راحت امتحان‌های خود را طراحی کنید. ما تا ۱۰ امتحان از شما هزینه‌ای دریافت نمیکنیم
              </OptionBox>
            </div>
          </div>

          <div className="my-8">
            <div className="flex justify-center text-2xl h-8">
              <img src={logoType} className="h-full mx-2" alt="معلم یار" />
              از زاویه دید شما
            </div>
            <div className=" my-5 flex items-center">

              <div className="w-24"><img alt="فلش راهنما" src="/img/scroll_down.gif" className="change-contrast transform -rotate-90 max-w-full" /></div>
              <Swiper slidesPerView={1} spaceBetween={30} mousewheel={true} loop={true}>
                <SwiperSlide className="flex p-4 bg-white rounded-3xl shadow-xl overflow-visible">
                  <img className="rounded-3xl w-36 h-36" src="https://picsum.photos/200" alt="تصویر کاربر" />
                  <div className="flex flex-col w-full px-5 py-2">
                    <div className="mx-auto my-8  flex justify-around w-full items-center">
                      <div className="ml-auto flex font-bold">
                        محمد زرعی روزبهانی
                      </div>
                      <div className="mr-auto flex">
                        <a href="//twitter.com/sss" style={{ direction: "ltr" }} className="font-bold">
                          @zaree_roozbahani
                        </a>
                      </div>
                      <TwitterOutlined className="mx-6" />

                    </div>
                    <div className="flex flex-wrap">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      #معلم_یار
                      چاپ و با استفاده از طراحان گرافیک است.
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex p-4 bg-white rounded-3xl shadow-xl overflow-visible">
                  <img className="rounded-3xl w-36 h-36" src="https://picsum.photos/200" alt="تصویر کاربر" />
                  <div className="flex flex-col w-full px-5 py-2">
                    <div className="mx-auto my-8  flex justify-around w-full items-center">
                      <div className="ml-auto flex font-bold">
                        محمد زرعی روزبهانی
                      </div>
                      <div className="mr-auto flex">
                        <a href="//twitter.com/sss" style={{ direction: "ltr" }} className="font-bold">
                          @zaree_roozbahani
                        </a>
                      </div>
                      <InstagramOutlined className="mx-6" />

                    </div>
                    <div className="flex flex-wrap">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      #معلم_یار
                      چاپ و با استفاده از طراحان گرافیک است.
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="w-24"><img alt="فلش راهنما" src="/img/scroll_down.gif" className="change-contrast transform rotate-90 max-w-full" /></div>
            </div>

          </div>


        </div>

        <IndexFooter />


      </div>
    </div>
  );
}

export default IndexPage;
