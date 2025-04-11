import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute, Link } from "@tanstack/react-router";
import TopNav from "../components/Common/TopNav";
import CookieConsent from "react-cookie-consent";
import { TrackPageViews } from "../components/TrackPageViews";
import theme from "../theme";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  const [consentGiven, setConsentGiven] = useState(
    document.cookie.includes("roamingproxy-consent=true")
  );

  // Sync consent state with cookie
  useEffect(() => {
    const handleConsentChange = () => {
      const granted = document.cookie.includes("roamingproxy-consent=true");
      if (granted !== consentGiven) {
        setConsentGiven(granted);
      }
    };
    // Use an event listener or lightweight check instead of polling
    window.addEventListener("storage", handleConsentChange); // For cross-tab updates
    const interval = setInterval(handleConsentChange, 500); // Lightweight polling for same-tab
    handleConsentChange(); // Initial check
    return () => {
      window.removeEventListener("storage", handleConsentChange);
      clearInterval(interval);
    };
  }, [consentGiven]);

  return (
    <Flex direction="column" minH="100vh" w="100%">
      <TopNav />
      <TrackPageViews consentGiven={consentGiven} /> {/* Pass consent state */}
      <Flex flex="1" direction="column" maxW="1200px" mx="auto" w="100%">
        <Outlet />
      </Flex>
      {!consentGiven && (
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Decline"
          cookieName="roamingproxy-consent"
          enableDeclineButton
          style={{
            background: theme.colors.gray[800] || "#1F2937",
            color: theme.colors.white || "#FFFFFF",
            padding: "16px",
            fontSize: "14px",
            zIndex: 9999,
          }}
          buttonStyle={{
            background: theme.colors.red[500] || "#EF4444",
            color: theme.colors.white || "#FFFFFF",
            borderRadius: theme.radii.md || "4px",
            padding: "8px 16px",
            fontWeight: "medium",
          }}
          declineButtonStyle={{
            background: theme.colors.gray[500] || "#6B7280",
            color: theme.colors.white || "#FFFFFF",
            borderRadius: theme.radii.md || "4px",
            padding: "8px 16px",
            fontWeight: "medium",
          }}
          expires={150}
          onAccept={() => {
            console.log("Accept clicked");
            if (window.gtag) {
              window.gtag("consent", "update", {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted",
                analytics_storage: "granted",
                functionality_storage: "granted",
                security_storage: "granted",
              });
              console.log("Consent updated, sending page view");
              window.gtag("event", "page_view", {
                page_path: window.location.pathname,
                send_to: "G-X7X57Z2WXP",
              });
            } else {
              console.error("gtag not loaded");
            }
            setConsentGiven(true); // Update state immediately
          }}
          onDecline={() => {
            console.log("Cookies declined");
            window.gtag?.("consent", "update", {
              analytics_storage: "denied",
              ad_storage: "denied",
            });
            setConsentGiven(false); // Ensure state reflects decline
          }}
        >
          We use cookies to enhance your experience, analyze usage, and deliver ads. Learn more in our{" "}
          <Link to="/cookie" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Cookie Policy
          </Link>
          ,{" "}
          <Link to="/privacy" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          , or{" "}
          <Link to="/terms" style={{ color: theme.colors.red[500] || "#EF4444", textDecoration: "underline" }}>
            Terms
          </Link>
          .
        </CookieConsent>
      )}
    </Flex>
  );
}