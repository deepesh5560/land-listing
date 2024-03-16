import HotelList from "@/components/hotelList/HotelList";
import { createQuery } from "@/lib/helpers";
import { networkInstance } from "@/lib/network-instance";
import { useParams, useRouter } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic";

const pageSize = 10;

// interface FilterParams {
//   categoryId: string;
//   isVerified: string;
//   rating: string;
// }

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | number };
}) => {
  let query = createQuery(searchParams);
  if (!query || !searchParams?.page) {
    query = `${createQuery({
      category: searchParams.category,
      page: 1,
      limit: pageSize,
    })}`;
  } else {
    query = `${query}&limit=${pageSize}`;
  }

  const { data, error, success } = await networkInstance(
    "GET",
    `home/businesses?${query}`
  );

  if (!success || !data.success) {
    return (
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>{data.message}</h2>
      </div>
    );
  }

  return (
    <div>
      <section className="breadcrumb_section">
        <div className="container">
          <nav className="--bs-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Prickly Pear island</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Hotels
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {!!data?.data.length && (
        <HotelList
          data={data.data}
          searchParams={searchParams}
          pageInfo={data.meta}
        />
      )}
    </div>
  );
};

export default Page;
