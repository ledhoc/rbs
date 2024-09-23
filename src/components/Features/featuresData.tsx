import { Feature } from "@/types/feature";
import Dot from "../Icons/Dot";
import { text } from "stream/consumers";

export const TextItem = ({ text, title, isDot = true }) => {
  return (
    <div className="mt-5 flex">
      {isDot && (
        <div className="mt-2">
          <Dot />
        </div>
      )}
      <div
        className={`mr-3 ${isDot ? "ml-3 " : "ml-0"} text-justify text-gray-light`}
      >
        <span className="font-semibold">{title}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

const ListTextItems = ({ list }) => {
  return list.map(({ text, isDot = true, title }, index) => (
    <TextItem key={`${index}`} {...{ text, title, isDot }} />
  ));
};

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="34" fill="#FF3131" fill-opacity="0.08" />
        <path
          d="M2.5 7.39001L7.5 13.6967V28.5867C7.36667 34.2134 13.89 39.2534 19.9967 44.4267"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4354 24.5267L23.3321 30.5667C23.7042 30.9486 24.1478 31.2535 24.6377 31.464C25.1277 31.6744 25.6542 31.7863 26.1874 31.7933C26.7205 31.8003 27.2499 31.7022 27.7451 31.5046C28.2403 31.307 28.6918 31.0137 29.0738 30.6417C29.4557 30.2696 29.7606 29.8259 29.971 29.336C30.1815 28.8461 30.2934 28.3195 30.3004 27.7864C30.3074 27.2532 30.2092 26.7239 30.0116 26.2286C29.814 25.7334 29.5208 25.2819 29.1488 24.9L19.9788 15.5433V10.6667C19.482 7.74451 18.3708 4.961 16.7188 2.5"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 27.1266V67.5C20 68.8261 20.5268 70.0978 21.4645 71.0355C22.4021 71.9732 23.6739 72.5 25 72.5H50"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M77.4973 72.6068L72.4973 66.3002V51.4135C72.614 46.5502 67.7606 42.1268 62.4973 37.6802V55.4068L56.664 49.4335C55.9125 48.6622 54.8854 48.2209 53.8087 48.2069C52.7319 48.1928 51.6936 48.6071 50.9223 49.3585C50.151 50.11 49.7097 51.137 49.6957 52.2138C49.6816 53.2906 50.0959 54.3288 50.8473 55.1002L60.0306 64.4602V69.3335C60.5299 72.2508 61.6409 75.0295 63.2906 77.4868"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M43.26 60H30"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 47.5H30"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M67.5 17.5C67.5 20.4667 66.6203 23.3668 64.9721 25.8336C63.3238 28.3003 60.9811 30.2229 58.2403 31.3582C55.4994 32.4935 52.4834 32.7906 49.5737 32.2118C46.6639 31.633 43.9912 30.2044 41.8934 28.1066C39.7956 26.0088 38.367 23.3361 37.7882 20.4264C37.2094 17.5166 37.5065 14.5006 38.6418 11.7597C39.7771 9.01886 41.6997 6.67618 44.1665 5.02796C46.6332 3.37973 49.5333 2.5 52.5 2.5"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M67.4972 6.24658L53.8305 19.9132C53.6558 20.089 53.4481 20.2285 53.2192 20.3237C52.9904 20.4189 52.745 20.4679 52.4972 20.4679C52.2494 20.4679 52.004 20.4189 51.7751 20.3237C51.5463 20.2285 51.3386 20.089 51.1639 19.9132L46.8672 15.6132"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Hiring Made Simple",
    paragraph: (
      <ListTextItems
        list={[
          {
            title: "",
            isDot: false,
            text: "We help find the right IT people to fit your needs. We handle your project from start to finish, making sure it stays on budget and meets your goals.",
          },
        ]}
      />
    ),
    paragraphDetail: (
      <ListTextItems
        list={[
          {
            title: "Supply CV: ",
            text: (
              <p className="mt-3">
                We provide tailored staffing solutions for your IT needs,
                offering a wide range of CVs from interns to senior engineers.
                Our database is continually updated with top-quality candidates
                through rigorous training and verification, featuring both
                Vietnamese and international talent. Additionally, we offer HR
                and operational consultants to ensure smooth project execution.
              </p>
            ),
          },
          {
            title: "Recruitment Services: ",
            text: (
              <p>
                We manage the entire recruitment process, including:
                <br />
                - Talent Sourcing & CV Collection: We find and curate candidates
                that match your job requirements. <br />
                - Interview Coordination & Onboarding: We handle interviews and
                ensure a smooth transition for new hires. <br />
              </p>
            ),
          },
          {
            isDot: false,
            text: (
              <p>
                With our services, you’ll receive efficient, end-to-end
                recruitment for top IT professionals.
              </p>
            ),
          },
        ]}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="34" fill="#FF3131" fill-opacity="0.08" />
        <path
          d="M2.5 56.6934C2.5 59.014 3.42187 61.2396 5.06282 62.8805C6.70376 64.5215 8.92936 65.4434 11.25 65.4434C13.5706 65.4434 15.7962 64.5215 17.4372 62.8805C19.0781 61.2396 20 59.014 20 56.6934C20 54.3727 19.0781 52.1471 17.4372 50.5062C15.7962 48.8652 13.5706 47.9434 11.25 47.9434C8.92936 47.9434 6.70376 48.8652 5.06282 50.5062C3.42187 52.1471 2.5 54.3727 2.5 56.6934Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.0467 77.0533C24.164 74.9869 22.8284 73.1451 21.1385 71.6641C19.4485 70.1831 17.4474 69.1007 15.283 68.4969C13.1186 67.8931 10.8462 67.7833 8.6336 68.1755C6.42105 68.5678 4.3249 69.4522 2.5 70.7633"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M60 56.6934C60 57.8424 60.2263 58.9802 60.6661 60.0418C61.1058 61.1034 61.7503 62.068 62.5628 62.8805C63.3753 63.6931 64.3399 64.3376 65.4015 64.7773C66.4631 65.217 67.6009 65.4434 68.75 65.4434C69.8991 65.4434 71.0369 65.217 72.0985 64.7773C73.1601 64.3376 74.1247 63.6931 74.9372 62.8805C75.7497 62.068 76.3942 61.1034 76.8339 60.0418C77.2737 58.9802 77.5 57.8424 77.5 56.6934C77.5 55.5443 77.2737 54.4065 76.8339 53.3449C76.3942 52.2833 75.7497 51.3187 74.9372 50.5062C74.1247 49.6937 73.1601 49.0491 72.0985 48.6094C71.0369 48.1697 69.8991 47.9434 68.75 47.9434C67.6009 47.9434 66.4631 48.1697 65.4015 48.6094C64.3399 49.0491 63.3753 49.6937 62.5628 50.5062C61.7503 51.3187 61.1058 52.2833 60.6661 53.3449C60.2263 54.4065 60 55.5443 60 56.6934Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.9531 77.0533C55.8358 74.9869 57.1714 73.1451 58.8613 71.6641C60.5513 70.1831 62.5524 69.1007 64.7168 68.4969C66.8812 67.8931 69.1536 67.7833 71.3662 68.1755C73.5787 68.5678 75.6749 69.4522 77.4998 70.7633"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.75 54.1933C28.75 57.177 29.9353 60.0385 32.045 62.1483C34.1548 64.2581 37.0163 65.4433 40 65.4433C42.9837 65.4433 45.8452 64.2581 47.9549 62.1483C50.0647 60.0385 51.25 57.177 51.25 54.1933C51.25 51.2096 50.0647 48.3482 47.9549 46.2384C45.8452 44.1286 42.9837 42.9433 40 42.9433C37.0163 42.9433 34.1548 44.1286 32.045 46.2384C29.9353 48.3482 28.75 51.2096 28.75 54.1933Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.9535 77.0533C53.0585 74.9713 50.7496 73.308 48.1747 72.1699C45.5997 71.0317 42.8155 70.4438 40.0002 70.4438C37.1849 70.4438 34.4007 71.0317 31.8257 72.1699C29.2508 73.308 26.9419 74.9713 25.0469 77.0533"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M41.7696 4.03001L45.9296 12.2233H53.0196C53.4099 12.2138 53.794 12.3223 54.1216 12.5345C54.4493 12.7468 54.7053 13.053 54.8562 13.4131C55.0071 13.7731 55.0458 14.1704 54.9673 14.5528C54.8888 14.9353 54.6967 15.2851 54.4162 15.5567L47.9062 21.95L51.5129 30.2333C51.6719 30.6127 51.7077 31.0324 51.6153 31.4333C51.5229 31.8341 51.3069 32.1958 50.9978 32.4672C50.6888 32.7387 50.3023 32.9062 49.8929 32.9462C49.4835 32.9862 49.0719 32.8966 48.7162 32.69L39.9996 27.7867L31.2829 32.69C30.9272 32.8966 30.5156 32.9862 30.1062 32.9462C29.6968 32.9062 29.3103 32.7387 29.0013 32.4672C28.6922 32.1958 28.4763 31.8341 28.3838 31.4333C28.2914 31.0324 28.3272 30.6127 28.4862 30.2333L32.0929 21.95L25.5829 15.5433C25.3024 15.2718 25.1103 14.9219 25.0318 14.5395C24.9533 14.157 24.992 13.7598 25.1429 13.3997C25.2938 13.0396 25.5498 12.7334 25.8775 12.5212C26.2052 12.3089 26.5893 12.2005 26.9796 12.21H34.0696L38.2329 4.03001C38.4028 3.70835 38.6573 3.43914 38.9689 3.25136C39.2805 3.06359 39.6374 2.96436 40.0012 2.96436C40.365 2.96436 40.7219 3.06359 41.0335 3.25136C41.3451 3.43914 41.5996 3.70835 41.7696 4.03001Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4996 7.94684C17.1332 7.9439 16.7734 8.04389 16.461 8.23541C16.1487 8.42694 15.8964 8.70231 15.7329 9.03017L11.5696 17.2235H4.47956C4.08925 17.214 3.70515 17.3224 3.37747 17.5347C3.04979 17.7469 2.79378 18.0531 2.6429 18.4132C2.49203 18.7733 2.45331 19.1705 2.53181 19.553C2.6103 19.9354 2.80237 20.2853 3.08289 20.5568L9.59289 26.9502L5.99955 35.2335C5.84057 35.6129 5.80476 36.0326 5.89718 36.4334C5.98959 36.8342 6.20556 37.1959 6.51459 37.4674C6.82363 37.7388 7.21012 37.9064 7.61951 37.9464C8.0289 37.9863 8.44051 37.8967 8.79622 37.6902L17.4996 32.7868L19.8062 34.0835"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62.502 7.94684C62.8683 7.9439 63.2282 8.04389 63.5405 8.23541C63.8528 8.42694 64.1051 8.70231 64.2686 9.03017L68.432 17.2235H75.522C75.9123 17.214 76.2964 17.3224 76.6241 17.5347C76.9517 17.7469 77.2077 18.0531 77.3586 18.4132C77.5095 18.7733 77.5482 19.1705 77.4697 19.553C77.3912 19.9354 77.1992 20.2853 76.9186 20.5568L70.4086 26.9502L74.002 35.2335C74.161 35.6129 74.1968 36.0326 74.1044 36.4334C74.0119 36.8342 73.796 37.1959 73.4869 37.4674C73.1779 37.7388 72.7914 37.9064 72.382 37.9464C71.9726 37.9863 71.561 37.8967 71.2053 37.6902L62.502 32.7868L60.1953 34.0835"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Build Your IT Team",
    paragraph: (
      <ListTextItems
        list={[
          {
            isDot: false,
            text: "We deliver customised team-building solutions to meet your project needs, managing everything from concept to product launch within your budget and requirements.",
          },
        ]}
      />
    ),
    paragraphDetail: (
      <>
        <p className="mt-3">
          We offer team-building packages to help you put together and manage a
          strong IT team for your project. Our packages are designed to fit your
          needs and budget. We can handle everything from the idea stage to the
          final product launch. You can choose from three different packages to
          find the best fit for your project:
        </p>
        <ListTextItems
          list={[
            {
              title: `Starter Package: `,
              text: "A basic option to get your IT team up and running quickly.",
            },
            {
              title: "Growth Package: ",
              text: "A more advanced option to expand and enhance your team’s capabilities.",
            },
            {
              title: "Premium Package: ",
              text: "The most comprehensive package for full support and advanced team development.",
            },
          ]}
        />
      </>
    ),
  },
  {
    id: 3,
    icon: (
      <svg
        width="81"
        height="80"
        viewBox="0 0 81 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="40.0156"
          cy="40"
          r="34"
          fill="#FF3131"
          fill-opacity="0.08"
        />
        <path
          d="M3.35156 60.4233L40.0182 70.4233"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.0156 70.4233L76.6823 60.4233"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.35156 60.4231L21.6616 55.6265"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.35156 75.6265V60.8398"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M76.6797 60.8398V75.6265"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.0156 77.2933V70.4233"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.6849 20.2065C51.6849 26.6499 49.7416 43.5398 40.0182 43.5398C30.2949 43.5398 28.3516 26.6665 28.3516 20.2065C28.3516 8.53987 40.0182 2.70654 40.0182 2.70654C40.0182 2.70654 51.6849 8.53987 51.6849 20.2065Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.0182 19.7899C39.0979 19.7899 38.3516 19.0437 38.3516 18.1232C38.3516 17.2027 39.0979 16.4565 40.0182 16.4565"
          stroke="#B20000"
          stroke-width="2.5"
        />
        <path
          d="M40.0156 19.7901C40.936 19.7901 41.6823 19.0439 41.6823 18.1234C41.6823 17.2029 40.936 16.4567 40.0156 16.4567"
          stroke="#B20000"
          stroke-width="2.5"
        />
        <path
          d="M33.3828 59.6038V56.2438C33.6501 54.6531 34.4805 53.2115 35.7225 52.1818C36.9645 51.1525 38.5351 50.6038 40.1478 50.6361C41.7608 50.6685 43.3081 51.2798 44.5078 52.3581C45.7075 53.4365 46.4795 54.9101 46.6828 56.5105V59.6038"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32.2925 40.537L29.5992 41.887C28.0763 42.6953 26.6813 43.724 25.4592 44.9403C25.1666 45.254 24.7879 45.4743 24.3706 45.5736C23.9533 45.6726 23.516 45.6463 23.1135 45.498C22.7111 45.3493 22.3615 45.0853 22.1087 44.739C21.8559 44.3923 21.7111 43.9786 21.6925 43.5503C21.4068 41.0526 21.9388 38.5293 23.2088 36.3596C24.4787 34.19 26.4181 32.4908 28.7358 31.5169"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M47.7422 40.5372L50.4355 41.8872C51.9585 42.6955 53.3535 43.7242 54.5755 44.9405C54.8682 45.2542 55.2469 45.4745 55.6642 45.5738C56.0815 45.6728 56.5189 45.6465 56.9212 45.4982C57.3235 45.3495 57.6732 45.0855 57.9259 44.7392C58.1789 44.3925 58.3235 43.9788 58.3422 43.5505C58.6279 41.0528 58.0959 38.5295 56.8259 36.3598C55.5559 34.1902 53.6165 32.491 51.2989 31.5171"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M76.685 60.4231L58.375 55.6265"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Technical Consulting",
    paragraph: (
      <ListTextItems
        list={[
          {
            isDot: false,
            text: "We provide the right tech solutions for your project and help fix any problems that pop up, even if your plans change along the way.",
          },
        ]}
      />
    ),
    paragraphDetail: (
      <>
        <p className="mt-3">
          We provide tech consulting to make sure your projects run smoothly
          with the right solutions and support. Our services help you tackle
          technical challenges and are customised to fit your needs. Here&apos;s
          what we offer:
        </p>
        <ListTextItems
          list={[
            {
              title: "Customized Technical Solutions: ",
              text: "We create solutions designed specifically for your project’s needs.",
            },
            {
              title: "Deployment support: ",
              text: "We help solve any tech issues that pop up when launching your project and adjust if business plans change.",
            },
            {
              title: "System review and improvement: ",
              text: "We review your current systems and offer advice on how to make them run better and more efficiently.",
            },
          ]}
        />
        <p className="mt-3">
          {`With our consulting, you'll get expert help and tailored solutions to keep your project running smoothly and improving as needed.`}
        </p>
      </>
    ),
  },
  {
    id: 4,
    icon: (
      <svg
        width="81"
        height="80"
        viewBox="0 0 81 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="40.0156"
          cy="40"
          r="34"
          fill="#FF3131"
          fill-opacity="0.08"
        />
        <path
          d="M46.7412 58.5462V65.7918C46.7412 69.1252 44.0745 72.1252 40.4079 72.1252M40.4079 72.1252C36.7412 72.1252 34.0745 69.4585 34.0745 65.7918V58.5462M40.4079 72.1252V77.1252M57.0745 43.1252C57.0745 52.3298 49.6125 59.7918 40.4079 59.7918C31.2031 59.7918 23.7412 52.3298 23.7412 43.1252C23.7412 33.9205 31.2031 26.4585 40.4079 26.4585C49.6125 26.4585 57.0745 33.9205 57.0745 43.1252Z"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.0025 60.6C62.5572 59.434 64.1119 58.6567 66.0555 58.6567L70.7195 59.0454C73.4402 59.434 75.7722 57.4907 76.9382 55.1584C78.1042 52.4377 77.3272 49.717 75.3835 47.7737L71.8855 44.664C70.7195 43.498 69.9422 41.9434 69.9422 40C69.9422 38.4454 70.7195 36.502 71.8855 35.336L75.3835 32.2265C77.3272 30.2831 78.1042 27.1737 76.9382 24.8416C75.7722 22.5095 73.4402 20.9548 70.7195 20.9548L66.0555 21.3435C64.1119 21.3435 62.1685 20.5662 61.0025 19.4001C59.8365 17.8454 59.0592 16.2907 59.0592 14.3473L59.4479 9.68321C59.8365 6.96248 57.8932 4.63038 55.5612 3.46434C52.8402 2.29832 50.1195 3.07571 48.1762 5.01911L45.0669 8.51718C43.9009 9.68321 42.3462 10.4606 40.4025 10.4606C38.4592 10.4606 36.9049 9.68321 35.7385 8.51718L32.6293 5.01911C30.6859 3.07571 27.9652 2.29832 25.2445 3.46434C22.9124 4.63038 20.969 6.96248 21.3577 9.68321L21.7464 14.3473C21.7464 16.2907 20.969 17.8454 19.803 19.4001C18.637 20.5662 16.6935 21.3435 14.7501 21.3435L10.0861 20.9548C7.3653 20.9548 5.03324 22.5095 3.8672 24.8416C2.70116 27.1737 3.47849 30.2831 5.42187 32.2265L8.91997 35.336C10.086 36.502 10.8633 38.4454 10.8633 40C10.8633 41.9434 10.086 43.498 8.91997 44.664L5.42187 47.7737C3.47849 49.717 2.70116 52.4377 3.8672 55.1584C5.03324 57.4907 7.3653 59.434 10.0861 59.0454L14.7501 58.6567C16.6935 58.6567 18.2483 59.434 19.803 60.6"
          stroke="#B20000"
          stroke-width="2.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Problem-Solving Consulting",
    paragraph: (
      <ListTextItems
        list={[
          {
            isDot: false,
            text: "We provide expert consulting to tackle IT challenges, ensuring team stability and conflict management. Our PMO services cover risk management, process optimization, deadline adherence, and project alignment.",
          },
        ]}
      />
    ),
    paragraphDetail: (
      <>
        <p className="mr-3 mt-5">
          We help solve problems in your IT company to keep things running
          smoothly. Our services make sure your IT team stays strong and happy,
          and we handle any conflicts that come up. Here&apos;s what we do:
        </p>
        <ListTextItems
          list={[
            {
              title: "IT Personnel Stability Solutions: ",
              text: "We create plans to keep your IT team stable and high-quality.",
            },
            {
              title: "Conflict Resolution: ",
              text: "We help sort out issues with work culture, benefits, and contracts, and can even provide legal advice if needed.",
            },
            {
              title: "HR and Operating Strategy: ",
              text: "We advise on the best ways to manage your team and design training to improve skills.",
            },
          ]}
        />
        <p className="mt-3">
          {`With our help, your IT company will have a stable, skilled team, handle conflicts easily, and use smart strategies for success.`}
        </p>
      </>
    ),
  },
];
export default featuresData;
