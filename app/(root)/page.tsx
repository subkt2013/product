import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeadLine from "@/components/HeadLine";

const Home = () => {
  const loggedIn = { firstName: "Adrian" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
        <HeadLine 
          title = "Index Page"
          text ="This is a practice text"
        />
      </div>
    </section>
  );
};

export default Home