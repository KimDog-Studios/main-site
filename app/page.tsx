"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button, Box } from "@mui/material";
import LoadingScreen from "../components/LoadingScreen"; // Adjust the path if necessary
import RedirectBackdrop from "../components/RedirectBackdrop"; // Adjust the path if necessary

export default function Home() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(5); // Set the countdown time in seconds
  const redirectUrl = "https://example.com"; // Replace with your URL

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after 3 seconds
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleOpen = () => {
    setOpen(true);

    // Reset countdown and handle redirection
    setCountdown(5); // Reset countdown time to 5 seconds
    setTimeout(() => {
      setOpen(false); // Close the backdrop
      window.open(redirectUrl, "_blank"); // Redirect to new page
    }, 5 * 1000); // Set delay to countdown time in milliseconds
  };

  return (
    <main className="min-h-screen flex flex-col p-8">
      {/* Single Mod */}
      <Box className="flex flex-col items-start space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold">KimDog&apos;s LLCC Optional Mod Pack</h2>
        <Image
          src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
          alt="Mod Image"
          width={276}
          height={162}
          className="rounded"
        />
        <p>This pack contains Graphics and other Tweaks!</p>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="primary"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download
        </Button>
      </Box>

      {/* Sign-In Button */}
      <Box className="flex flex-col items-center space-y-4 mt-8">
        {!session ? (
          <Button
            onClick={() => signIn("google")} // Change 'google' to another provider if needed
            variant="contained"
            color="secondary"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign In with Google
          </Button>
        ) : (
          <>
            <p>Welcome, {session.user.name}!</p>
            <Button
              onClick={() => signOut()}
              variant="contained"
              color="secondary"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign Out
            </Button>
          </>
        )}
      </Box>

      {/* Loading Screen */}
      <LoadingScreen open={loading} />

      {/* Redirect Backdrop with Spinner and Countdown */}
      <RedirectBackdrop
        open={open}
        redirectUrl={redirectUrl}
        onClose={() => setOpen(false)}
        countdown={countdown}
      />
    </main>
  );
}
