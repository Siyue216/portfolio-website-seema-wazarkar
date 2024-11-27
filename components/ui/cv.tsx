import Link from "next/link";
import React from "react";

export default function CV() {
  return (
    <Link
      href={"/SeemaWazarkarCV.pdf"}
      className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
    >
        CV
    </Link>
  );
}
