"use client";

import { secret } from "@/lib/env";

export default function ClientComponent() {
  return <>ClientComponent, secret is: <>{secret}</></>;
}