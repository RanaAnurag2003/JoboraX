import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      {/* Responsive Navbar */}
      <nav className="flex flex-col min-[560px]:flex-row min-[560px]:justify-between min-[560px]:items-center pt-10">
        {/* Logo */}
        <Link to="/" className="flex justify-center">
          <img
            src="/logo.png"
            className="h-30 w-auto md:h-30"
            alt="Joborax Logo"
          />
        </Link>

        {/* Actions (Login / Buttons / User Menu) */}
        <div className="flex gap-6 items-center justify-center md:pr-30">
          {/* Show login when signed out */}
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>

          {/* Show actions when signed in */}
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full flex items-center">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            {/* User Icon */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonBox: "w-12 h-12",
                  avatarBox: "w-12 h-12 rounded-full",
                },
                variables: {
                  avatarSize: "48px",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-job"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {/* Sliding Drawer for SignIn */}
      {showSignIn && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleOverlayClick}
        >
          <div className="w-full max-w-md bg-white shadow-xl py-12 p-6 relative animate-slideIn rounded-xl">
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
              afterSignInUrl="/"
              appearance={{
                elements: {
                  card: "shadow-none",
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
