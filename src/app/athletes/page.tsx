import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "For Athletes — ReadyAll",
  description: "Track every meter, sync with Concept2, and see your progress.",
};

export default function AthletesPage() {
  redirect('/');
}
