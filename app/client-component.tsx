"use client";

export default function ClientComponent() {
  return <div>ClientComponent, secret is: {process.env.SECRET}</div>;
}