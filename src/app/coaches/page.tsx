import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "For Coaches — ReadyAll",
  description: "Manage your team, track erg scores, create boatings, and assign workouts.",
};

export default function CoachesPage() {
  redirect('/');
}
