import React from 'react';
import { Link } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";

function HomePage() {
    return (
        <PageWrapper>
            <h2>Home Page</h2>
            <p>
                This page demonstrate the page transition animation done on react router
                URLs with styled components and react-transition-group.{" "}
            </p>
            <p>To view the page transition, click on below link.</p>
            <Link to="/example">Go to Page Two →</Link>
        </PageWrapper>
    );
}

export default HomePage;
