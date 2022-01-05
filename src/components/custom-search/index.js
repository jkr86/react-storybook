import React, { useEffect, useState } from "react";
import Background from "../../assets/search/Desktop.png";
import styles from "./custom-search.module.scss";
const CustomSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log("query is here", query);
    query ? setResults([query]) : setResults([]);
  }, [query]);
  return (
    <div className="relative h-screen flex justify-end w-full">
      <img className="brightness-50 absolute inset-0 object-cover object-top w-full h-full" src={Background} alt="Background for test purpose" />
      <div className="relative z-10 flex flex-col justify-start items-center mt-3 mr-40">
        <div className="relative">
          <svg className="m-auto ml-3 absolute inset-0" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.0917 15.9083L14 12.8417C15.2001 11.3454 15.7813 9.44609 15.624 7.53443C15.4668 5.62276 14.5831 3.844 13.1546 2.56388C11.7262 1.28377 9.86152 0.599604 7.94411 0.652071C6.02671 0.704538 4.20228 1.48965 2.84596 2.84596C1.48965 4.20228 0.704538 6.02671 0.652071 7.94411C0.599604 9.86152 1.28377 11.7262 2.56388 13.1546C3.844 14.5831 5.62276 15.4668 7.53443 15.624C9.44609 15.7813 11.3454 15.2001 12.8417 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.2811 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0917 17.0667C17.2419 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2419 16.0637 17.0917 15.9083ZM8.16668 14C7.01295 14 5.88514 13.6579 4.92585 13.0169C3.96657 12.3759 3.21889 11.4649 2.77738 10.399C2.33587 9.3331 2.22035 8.16021 2.44543 7.02865C2.67051 5.8971 3.22608 4.8577 4.04189 4.04189C4.8577 3.22608 5.8971 2.67051 7.02865 2.44543C8.16021 2.22035 9.3331 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71377 13.3854 11.1975 12.2915 12.2915C11.1975 13.3854 9.71377 14 8.16668 14Z"
              fill="#5B6072"
            />
          </svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="py-2.5 px-10 border border-gray-300 bg-gray-200 rounded-full" placeholder="Search" />
          {query.length > 0 && (
            <svg onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 cursor-pointer m-auto mr-3 absolute inset-0" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2_1232)">
                <path
                  d="M16 8C16 6.41775 15.5308 4.87104 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346629 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346629 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87104 15.5308 6.41775 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8ZM11.14 10.1867C11.2642 10.3116 11.3339 10.4805 11.3339 10.6567C11.3339 10.8328 11.2642 11.0018 11.14 11.1267C11.078 11.1892 11.0043 11.2388 10.9231 11.2726C10.8418 11.3064 10.7547 11.3239 10.6667 11.3239C10.5787 11.3239 10.4915 11.3064 10.4103 11.2726C10.329 11.2388 10.2553 11.1892 10.1933 11.1267L8.12 9.05334C8.08809 9.02429 8.04649 9.0082 8.00334 9.0082C7.96019 9.0082 7.91858 9.02429 7.88667 9.05334L5.81334 11.1267C5.6858 11.2359 5.52175 11.293 5.35397 11.2865C5.18618 11.28 5.02702 11.2104 4.90829 11.0917C4.78957 10.973 4.72001 10.8138 4.71353 10.646C4.70705 10.4783 4.76412 10.3142 4.87334 10.1867L6.94667 8.11334C6.97572 8.08142 6.99181 8.03982 6.99181 7.99667C6.99181 7.95352 6.97572 7.91192 6.94667 7.88L4.87334 5.80667C4.81085 5.7447 4.76126 5.67096 4.72741 5.58972C4.69356 5.50848 4.67614 5.42135 4.67614 5.33334C4.67614 5.24533 4.69356 5.15819 4.72741 5.07695C4.76126 4.99571 4.81085 4.92198 4.87334 4.86C4.99825 4.73584 5.16721 4.66614 5.34334 4.66614C5.51946 4.66614 5.68843 4.73584 5.81334 4.86L7.88667 6.93334C7.90163 6.94928 7.91971 6.96199 7.93977 6.97068C7.95984 6.97936 7.98147 6.98384 8.00334 6.98384C8.0252 6.98384 8.04684 6.97936 8.0669 6.97068C8.08697 6.96199 8.10504 6.94928 8.12 6.93334L10.1933 4.86C10.2555 4.79784 10.3293 4.74854 10.4105 4.7149C10.4917 4.68126 10.5788 4.66394 10.6667 4.66394C10.7546 4.66394 10.8416 4.68126 10.9228 4.7149C11.0041 4.74854 11.0778 4.79784 11.14 4.86C11.2022 4.92216 11.2515 4.99596 11.2851 5.07717C11.3188 5.15839 11.3361 5.24543 11.3361 5.33334C11.3361 5.42124 11.3188 5.50829 11.2851 5.5895C11.2515 5.67072 11.2022 5.74451 11.14 5.80667L9.06667 7.88C9.05073 7.89497 9.03802 7.91304 9.02933 7.93311C9.02065 7.95317 9.01616 7.97481 9.01616 7.99667C9.01616 8.01854 9.02065 8.04017 9.02933 8.06024C9.03802 8.0803 9.05073 8.09837 9.06667 8.11334L11.14 10.1867Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1232">
                  <rect width={16} height={16} fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <div className={`${styles.searchResults} ${results.length > 0 ? styles.expand : styles.collapse} mt-2.5 overflow-y-scroll py-4 px-3 rounded-xl bg-white shadow-md`}>
          <div className="flex items-center">
            <div className="w-6 h-6 mr-5">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width={24} height={24} rx={4} fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                    <use xlinkHref="#image0_6_1759" transform="scale(0.015625)" />
                  </pattern>
                  <image
                    id="image0_6_1759"
                    width={64}
                    height={64}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA40lEQVR4Xu3bQQ6EQAhEUbj/oXsO8Sdh4XOvJAi/qkF3Zt6E6710++xuiD6T40uACtACqYlzD2IACFKBkoHcgmSQDJJBMngKIT6ADygF6DSYfcCLTzg/z0eGrASogDbT0gKxB2MB5pkiBoBgrEEMwIBjLx9fAAiCIAhygmkkRgYjhWMHditsL2AvYC+QIHjdwzk+BmAABmBAWc1kCF0bKRAEQRAEQRAMGaACbaCUz/P5BRiKxhQaiV07uRjfYgQDMKDpGAhGCMUCzD4CBEEw1iAGYIBPZMJh+g8/P8cKpAJfV4EfMee/sLtaEFIAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
            <p className="text-sm font-book leading-tight">Label</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomSearch;
