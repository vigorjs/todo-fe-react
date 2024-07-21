import ApplicationLogo from "@/components/ApplicationLogo";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function GuestLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <div>
        <Link to={"/"}>
          <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
      </div>

      {children}

    </div>
  );
}
