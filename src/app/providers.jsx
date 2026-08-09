"use client";

import { RouterProvider } from "@heroui/react";

// HeroUI v3 is built on React Aria — RouterProvider provides the context.
// (Props are optional; we use Next.js Link directly elsewhere.)
export default function Providers({ children }) {
    return <RouterProvider>{children}</RouterProvider>;
}