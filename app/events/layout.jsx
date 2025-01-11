import { Metadata } from "next";

export const metadata = {
  title:
    "Master | AK Tour & Travels | Reliable Car Rental Services for Every Journey",
  description:
    "AK Tour & Travels offers premium car rental services for business trips, family vacations, and local travel. Enjoy comfortable rides, professional drivers, and affordable pricing. Book your journey with us today!",
  keywords: [
    "car rental",
    "business travel",
    "AK Tour & Travels",
    "affordable car rentals",
    "local travel",
    "family vacations",
    "professional drivers",
    "premium car service",
    "travel solutions",
    "reliable car rentals",
  ],
  author: "AK Tour & Travels",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "utf-8",
};

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;