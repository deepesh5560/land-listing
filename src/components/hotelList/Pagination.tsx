"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface PageInfo {
  current_page: number;
  total_records: number;
  total_pages: number;
}

const Pagination = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const searchParams = useSearchParams();
  const [arr, setArr] = useState<any[]>([]);
  const pathName = usePathname();
  const current = searchParams.get("page") ?? 1;
  const { replace } = useRouter();

  useEffect(() => {
    setArr([...new Array(pageInfo.total_pages)]);
  }, [current]);

  const onPageSelect = (index: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", index + "");
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <div className="pagination_custom">
        <nav aria-label="...">
          <ul className="pagination">
            {/* <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                ❮
              </a>
            </li> */}
            {arr.map((_, index) => {
              return (
                <li
                  className={`page-item  ${current == index + 1 && " active"}`}
                  key={index}
                >
                  <span
                    className={`page-link`}
                    onClick={() => onPageSelect(index + 1)}
                  >
                    {index + 1}
                  </span>
                </li>
              );
            })}
            {/* <li className="page-item">
              <a className="page-link" href="#">
                ❯
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
