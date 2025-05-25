import Goback from "@/components/Goback";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">users sayfasi</h1>
      <nav className="flex flex-col">
        {[1, 2, 3, 4].map((user) => (
          <Link className="underline" key={user} href={`/dashboard/users/${user}`}>
            Go user-{user}
          </Link>
        ))}
      </nav>
      <Goback></Goback>
    </div>
  );
};

export default page;
