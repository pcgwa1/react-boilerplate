import React from 'react';
import { Link } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";

function ContactPage() {
    return (
        <PageWrapper>
            <h2>Contact Page</h2>
            <p>Demo page. Click below to go back to previous page.</p>
            <Link to="/">← Back to Home</Link>
        </PageWrapper>
    );
}

export default ContactPage;
