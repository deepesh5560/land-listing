import React from "react";
import RecentCard from "./RecentCard";

const RecentMain = () => {
  return (
    <section className="recent_activity">
      <div className="container px-0">
        <h3>Recent Activity</h3>
        <div className="row">
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />

          <div className="py-3 col-12 text-center">
            <button className="load_more">Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentMain;
