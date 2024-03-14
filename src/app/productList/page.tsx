import HotelList from "@/components/hotelList/HotelList";
import { networkInstance } from "@/lib/network-instance";
import { useParams, useRouter } from "next/navigation";
import React from "react";
export const dynamic = "force-dynamic";

const Page = async ({
  searchParams,
}: {
  searchParams: { categoryId: string };
}) => {
  const { data, error, success } = await networkInstance(
    "GET",
    `home/businesses?limit=10&page=1&category=${searchParams.categoryId}`
  );

  if (!success) {
    return (
      <div>
        <h2>Retry</h2>
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

      {!!data?.data.length && <HotelList data={data.data} />}
    </div>
  );
};

export default Page;
