import { Blog, BlogSituation } from "@/types/blog";

export const BlogSectionOneData = [
  {
    id: 1,
    title: "Goal Target",
    icon: (
      <svg
        className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_615_4103)">
          <path
            d="M39.0565 15.7494L34.0659 20.74C35.427 23.0084 36.3343 25.7306 36.3343 28.4527C36.3343 36.6192 29.7558 43.1977 21.5893 43.1977C13.4229 43.1977 6.84443 36.6192 6.84443 28.4527C6.84443 20.2863 13.423 13.7077 21.5894 13.7077C24.3116 13.7077 27.0337 14.6151 29.3021 15.9761L34.2927 10.9856C30.6632 8.49023 26.3531 6.90234 21.5893 6.90234C9.79339 6.90245 0.0390625 16.6568 0.0390625 28.4527C0.0390625 40.2486 9.79339 50.0031 21.5894 50.0031C33.3855 50.0031 43.1398 40.2488 43.1398 28.4527C43.1397 23.689 41.5518 19.3789 39.0565 15.7494Z"
            fill="#B20000"
          />
          <path
            d="M32.4744 22.3204L27.257 27.7647C27.257 27.9915 27.257 28.2184 27.257 28.4452C27.257 31.6211 24.7616 34.1163 21.5858 34.1163C18.4101 34.1163 15.9147 31.621 15.9147 28.4452C15.9147 25.2695 18.4101 22.7741 21.5858 22.7741C21.8127 22.7741 22.0396 22.7741 22.2664 22.7741L27.4839 17.5566C25.896 16.6493 23.8544 15.9688 21.5858 15.9688C14.7805 15.9688 9.10938 21.6399 9.10938 28.4452C9.10938 35.2506 14.7805 40.9217 21.5858 40.9217C28.3912 40.9217 34.0623 35.2506 34.0623 28.4452C34.0623 26.1768 33.3818 24.1352 32.4744 22.3204Z"
            fill="#B20000"
          />
          <path
            d="M48.8052 4.62504H45.4025V1.22235C45.4025 0.768625 45.1757 0.315005 44.7219 0.0880885C44.2682 -0.138722 43.8146 0.0880885 43.5877 0.314899L39.0507 4.85185C38.8239 5.07866 38.597 5.53238 38.597 5.75919V9.84241L20.6762 27.7633C20.2225 28.217 20.2225 28.8975 20.6762 29.3512C20.903 29.578 21.13 29.578 21.5836 29.578C22.0372 29.578 22.2641 29.578 22.4909 29.3512L40.1849 11.4304H44.2681C44.4949 11.4304 44.9486 11.2036 45.1755 11.2036L49.7124 6.66665C49.9392 6.21292 49.9392 5.7593 49.9392 5.30557C49.7125 4.85195 49.2588 4.62504 48.8052 4.62504ZM43.8145 9.16198H40.8655V6.21303L43.1339 3.94461V5.75941C43.1339 6.43994 43.5877 6.89367 44.2682 6.89367H46.083L43.8145 9.16198Z"
            fill="#B20000"
          />
        </g>
        <defs>
          <clipPath id="clip0_615_4103">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    subTitle: (
      <p>
        Consult solution & technology suitable to each of project <br />
        Verify requiements for quality and quantity of team according to
        business plan of client.
      </p>
    ),
  },
  {
    id: 2,
    title: "Benefit",
    icon: (
      <svg
        className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8125 17.7734H17.6719V26.5625H11.8125V17.7734Z"
          fill="#B20000"
        />
        <path
          d="M20.6094 14.8438H26.4688V26.5625H20.6094V14.8438Z"
          fill="#B20000"
        />
        <path
          d="M12.4268 50L18.2862 44.1406H30.0164C33.8281 44.1406 37.325 42.0265 39.0962 38.6513L46.9766 23.6328H45.6685C42.3997 23.6328 39.401 25.4467 37.8839 28.3421L33.9089 35.9268C33.1502 37.3741 31.6506 38.2812 30.0164 38.2812H20.6094V35.3516H30.0164C30.5615 35.3516 31.0616 35.0491 31.3146 34.5661L33.9738 29.4922H17.1781C15.2348 29.4922 13.3717 30.2639 11.9977 31.638L3.03125 40.6044L12.4268 50Z"
          fill="#B20000"
        />
        <path
          d="M35.2578 26.5625V8.78906H38.1875L32.3281 0L26.4688 8.78906H29.3984V26.5625H35.2578Z"
          fill="#B20000"
        />
      </svg>
    ),
    subTitle:
      "Mapping working environment, remuneration policy base on client's requirement, suggest suitable data of personnel.",
  },
  {
    id: 3,
    title: "Recruiting",
    icon: (
      <svg
        className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.1763 45.6249H4.62944C1.98295 45.6249 0.0981875 43.0467 0.908734 40.5272L4.12162 30.4881C5.15678 27.2655 8.68217 25.5956 11.8267 26.8163C13.9165 27.6268 16.6021 28.2616 19.8931 28.2616C22.813 28.2616 25.2544 27.7635 27.2369 27.0799C27.5494 29.287 28.5552 31.4256 30.2544 33.1151C32.1978 35.0584 34.7662 36.162 37.5103 36.2401L38.8873 40.5272C39.6978 43.0467 37.8228 45.6249 35.1763 45.6249Z"
          fill="#B20000"
        />
        <path
          d="M19.9043 24.5117C25.4649 24.5117 29.9727 20.004 29.9727 14.4434C29.9727 8.88276 25.4649 4.375 19.9043 4.375C14.3437 4.375 9.83594 8.88276 9.83594 14.4434C9.83594 20.004 14.3437 24.5117 19.9043 24.5117Z"
          fill="#B20000"
        />
        <path
          d="M48.769 34.0522L45.0972 30.3804C47.3433 26.9917 46.9722 22.3726 43.9937 19.394C40.5854 15.9858 35.0483 15.9858 31.6499 19.394C28.2417 22.8022 28.2417 28.3394 31.6499 31.7378C34.6382 34.7261 39.2573 35.0874 42.646 32.8413L46.3179 36.5132C46.9917 37.187 48.0952 37.187 48.769 36.5132C49.4429 35.8394 49.4429 34.7358 48.769 34.0522ZM34.0913 29.2866C32.0405 27.2358 32.0405 23.9058 34.0913 21.8452C36.1421 19.7847 39.4722 19.7944 41.5327 21.8452C43.5933 23.896 43.5835 27.2261 41.5327 29.2769C39.4819 31.3374 36.1519 31.3374 34.0913 29.2866Z"
          fill="#B20000"
        />
      </svg>
    ),
    subTitle:
      "Right people in the right position. Make a recruit plan, prepare backup human resources.",
  },
  {
    id: 4,
    title: "Working culture",
    icon: (
      <svg
        className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.3438 19.4844C35.3438 25.7407 30.272 30.8125 24.0156 30.8125C17.7593 30.8125 12.6875 25.7407 12.6875 19.4844C12.6875 13.228 17.7593 8.15625 24.0156 8.15625C30.272 8.15625 35.3438 13.228 35.3438 19.4844ZM24.6953 13.5938C25.1958 13.5938 25.6016 13.9995 25.6016 14.5V20.1641C25.6016 20.9148 24.993 21.5234 24.2422 21.5234H19.0312C18.5307 21.5234 18.125 21.1177 18.125 20.6172C18.125 20.1167 18.5307 19.7109 19.0312 19.7109H23.7891V14.5C23.7891 13.9995 24.1948 13.5938 24.6953 13.5938Z"
          fill="#B20000"
        />
        <path
          d="M24.0156 32.625C31.273 32.625 37.1562 26.7418 37.1562 19.4844C37.1562 17.7201 36.8086 16.037 36.178 14.5H38.0625C40.5651 14.5 42.5938 16.5287 42.5938 19.0312V34.4375H6.34375V19.0312C6.34375 16.5287 8.37244 14.5 10.875 14.5H11.8533C11.2227 16.037 10.875 17.7201 10.875 19.4844C10.875 26.7418 16.7582 32.625 24.0156 32.625Z"
          fill="#B20000"
        />
        <path
          d="M10.875 41.6875C8.37244 41.6875 6.34375 39.6588 6.34375 37.1562V36.25H42.5938V37.1562C42.5938 39.6588 40.5651 41.6875 38.0625 41.6875H10.875Z"
          fill="#B20000"
        />
        <path
          d="M44.4062 27.6406V21.75H47.125C49.6276 21.75 51.6562 23.7787 51.6562 26.2812V27.6406H44.4062Z"
          fill="#B20000"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.4062 29.4531V37.1562C44.4062 40.6598 41.5661 43.5 38.0625 43.5H33.0781V47.125C33.0781 48.3761 34.0925 49.3906 35.3438 49.3906H49.3906C50.6417 49.3906 51.6562 48.3761 51.6562 47.125V29.4531H44.4062ZM42.5938 46.6719C43.5947 46.6719 44.4062 45.8603 44.4062 44.8594C44.4062 43.8584 43.5947 43.0469 42.5938 43.0469C41.5928 43.0469 40.7812 43.8584 40.7812 44.8594C40.7812 45.8603 41.5928 46.6719 42.5938 46.6719Z"
          fill="#B20000"
        />
        <path
          d="M30.6942 43.5H17.73L17.4159 46.9175C17.294 48.2451 18.3389 49.3906 19.6721 49.3906H28.7522C30.0854 49.3906 31.1303 48.2451 31.0083 46.9175L30.6942 43.5Z"
          fill="#B20000"
        />
      </svg>
    ),
    subTitle: "Target to attract and retain talents.",
  },
  {
    id: 5,
    title: "Operating processing",
    icon: (
      <svg
        className="h-[35px] w-[35px] md:h-[50px] md:w-[50px]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M48.2643 36.1451L46.5847 35.4986C46.5538 35.4867 46.5326 35.4626 46.5247 35.4305C46.3005 34.5107 45.9356 33.6314 45.4437 32.8227C45.4264 32.7943 45.4243 32.7623 45.4378 32.732L46.1688 31.0862C46.1855 31.0484 46.1777 31.0064 46.1485 30.9772L44.1754 29.0042C44.1462 28.975 44.1042 28.9673 44.0665 28.984L42.4201 29.7151C42.3898 29.7285 42.3578 29.7265 42.3296 29.7093C41.521 29.2175 40.642 28.8526 39.7225 28.6284C39.6903 28.6206 39.6662 28.5993 39.6543 28.5685L39.0077 26.8885C38.9929 26.8499 38.9576 26.8258 38.9163 26.8258H36.126C36.0847 26.8258 36.0495 26.85 36.0347 26.8885L35.388 28.5685C35.3761 28.5993 35.3521 28.6206 35.3198 28.6284C34.4004 28.8526 33.5213 29.2175 32.7127 29.7093C32.6844 29.7265 32.6523 29.7285 32.6221 29.7151L30.9757 28.984C30.9379 28.9672 30.8959 28.975 30.8667 29.0042L28.8936 30.9773C28.8644 31.0065 28.8565 31.0485 28.8733 31.0863L29.6045 32.7325C29.6179 32.7628 29.6158 32.7948 29.5986 32.8231C29.1068 33.6317 28.742 34.5109 28.5178 35.4305C28.51 35.4626 28.4887 35.4867 28.4578 35.4986L26.778 36.1452C26.7395 36.1601 26.7152 36.1953 26.7152 36.2366V39.027C26.7152 39.0683 26.7395 39.1035 26.778 39.1183L28.4575 39.7647C28.4884 39.7767 28.5097 39.8008 28.5175 39.8329C28.7418 40.7525 29.1066 41.6319 29.5985 42.4406C29.6157 42.4688 29.6178 42.501 29.6044 42.5312L28.8734 44.177C28.8567 44.2148 28.8645 44.2568 28.8937 44.286L30.8668 46.2592C30.896 46.2884 30.938 46.2962 30.9758 46.2794L32.6222 45.5482C32.6524 45.5348 32.6845 45.5368 32.7128 45.554C33.5214 46.0458 34.4004 46.4106 35.3199 46.6349C35.3521 46.6427 35.3762 46.664 35.3881 46.6948L36.0348 48.3748C36.0496 48.4134 36.0849 48.4375 36.1262 48.4375H38.9165C38.9578 48.4375 38.9931 48.4133 39.0079 48.3748L39.6544 46.6952C39.6663 46.6644 39.6904 46.6431 39.7226 46.6353C40.6422 46.411 41.5216 46.0461 42.3304 45.5542C42.3587 45.537 42.3908 45.5349 42.421 45.5483L44.0668 46.2793C44.1045 46.2961 44.1466 46.2883 44.1758 46.2591L46.1489 44.2859C46.1781 44.2567 46.1859 44.2147 46.1691 44.177L45.438 42.5306C45.4245 42.5003 45.4266 42.4683 45.4438 42.4399C45.9356 41.6313 46.3005 40.7523 46.5246 39.8328C46.5325 39.8007 46.5537 39.7766 46.5846 39.7646L48.2646 39.118C48.3031 39.1031 48.3272 39.0679 48.3272 39.0266V36.2363C48.3271 36.1952 48.3028 36.16 48.2643 36.1451ZM37.5211 42.7853C34.6746 42.7853 32.3675 40.4781 32.3675 37.6317C32.3675 34.7853 34.6746 32.4781 37.5211 32.4781C40.3676 32.4781 42.6747 34.7853 42.6747 37.6317C42.6747 40.4781 40.3677 42.7853 37.5211 42.7853ZM20.5344 12.9367C16.4411 12.9367 13.1228 16.255 13.1228 20.3483C13.1228 24.4416 16.441 27.76 20.5344 27.76C24.6277 27.76 27.946 24.4417 27.946 20.3483C27.9461 16.255 24.6277 12.9367 20.5344 12.9367ZM24.8383 19.0323L20.3547 23.5159C19.7064 24.1643 18.8393 23.9007 18.2644 23.3258L16.2307 21.2921C15.7221 20.7836 15.7222 19.9515 16.2307 19.443C16.7392 18.9345 17.5713 18.9344 18.0798 19.443L19.4046 20.7678L22.9892 17.1832C23.4977 16.6747 24.3298 16.6747 24.8383 17.1832C25.3469 17.6917 25.3469 18.5238 24.8383 19.0323ZM36.3213 16.6979C35.9242 15.0288 35.2627 13.4346 34.3631 11.9739L35.7257 8.90596L32.1087 5.28906L29.0398 6.65205C27.5794 5.75283 25.9856 5.09131 24.3172 4.69414L23.1117 1.5625H17.9967L16.7911 4.69414C15.1227 5.09121 13.5289 5.75273 12.0685 6.65205L8.99971 5.28916L5.38272 8.90615L6.74561 11.9747C5.84619 13.4352 5.18467 15.029 4.7876 16.6978L1.65625 17.9031V23.0182L4.78721 24.2233C5.18437 25.8922 5.8458 27.4866 6.74551 28.9473L5.38291 32.0151L8.9999 35.632L12.0688 34.269C13.5293 35.1683 15.1229 35.8298 16.7915 36.2269L17.997 39.3586H23.112L24.3171 36.2276C24.6037 36.1595 24.888 36.0835 25.1698 35.9998C25.2543 35.4107 25.6499 34.9051 26.2169 34.6869L27.2143 34.303C27.3925 33.7511 27.6151 33.2142 27.8797 32.6979L27.4456 31.7204C27.1679 31.095 27.3051 30.3563 27.789 29.8724L29.762 27.8992C30.2459 27.4153 30.9846 27.2781 31.6101 27.5559L32.5878 27.99C33.1039 27.7256 33.6408 27.5029 34.1927 27.3246L34.5767 26.327C34.8127 25.7139 35.385 25.3011 36.0354 25.2656C36.142 24.9219 36.2373 24.5742 36.3208 24.2233L39.4525 23.0179V17.9028L36.3213 16.6979ZM20.5542 31.9032C14.2346 31.9032 9.11152 26.7802 9.11152 20.4604C9.11152 14.1408 14.2346 9.01777 20.5542 9.01777C26.8738 9.01777 31.9969 14.1408 31.9969 20.4604C31.9969 26.7802 26.8738 31.9032 20.5542 31.9032Z"
          fill="#B20000"
        />
      </svg>
    ),
    subTitle: (
      <p>
        Operation and company rules.
        <br />
        Consult labor law. <br />
        Support to solve personal conflicts.
        <br />
      </p>
    ),
  },
];

export const BlogDataSituation: BlogSituation[] = [
  {
    rowOneValue: "15,000+",
    rowOneTitle: "Development Agencies",
    rowTwoInfo:
      "15,000+ development agencies in LatAm and European IT markets as of 2023.",
    rowThreeTitle: "YouTeam identifies top local development agencies.",
    rowThreeSubTitle:
      "Since 2017, YouTeam has been actively scanning the outsourcing market to identify reputable development agencies with in-demand talent, strong recruitment and retention processes. After handpicking these agencies, YouTeam invites them to undergo a vetting process before joining its network.",
  },
  {
    rowOneValue: "25%",
    rowOneTitle: "Development Agencies",
    rowTwoInfo:
      "15,000+ development agencies in LatAm and European IT markets as of 2023.",
    rowThreeTitle: "YouTeam identifies top local development agencies.",
    rowThreeSubTitle:
      "Since 2017, YouTeam has been actively scanning the outsourcing market to identify reputable development agencies with in-demand talent, strong recruitment and retention processes. After handpicking these agencies, YouTeam invites them to undergo a vetting process before joining its network.",
  },
  {
    rowOneValue: "500+",
    rowOneTitle: "agencies",
    rowTwoInfo:
      "15,000+ development agencies in LatAm and European IT markets as of 2023.",
    rowThreeTitle: "YouTeam identifies top local development agencies.",
    rowThreeSubTitle:
      "Since 2017, YouTeam has been actively scanning the outsourcing market to identify reputable development agencies with in-demand talent, strong recruitment and retention processes. After handpicking these agencies, YouTeam invites them to undergo a vetting process before joining its network.",
  },
  {
    rowOneValue: "100+",
    rowOneTitle: "Development Agencies",
    rowTwoInfo:
      "15,000+ development agencies in LatAm and European IT markets as of 2023.",
    rowThreeTitle: "YouTeam identifies top local development agencies.",
    rowThreeSubTitle:
      "Since 2017, YouTeam has been actively scanning the outsourcing market to identify reputable development agencies with in-demand talent, strong recruitment and retention processes. After handpicking these agencies, YouTeam invites them to undergo a vetting process before joining its network.",
  },
];
const blogData: Blog[] = [];
export default blogData;
