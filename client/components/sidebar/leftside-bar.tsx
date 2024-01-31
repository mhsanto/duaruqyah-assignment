"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const LeftSidebar = () => {
  const NavContent = () => {
    const pathname = usePathname();
    return (
      <section className="flex flex-col h-full gap-4 w-full items-center">
        {sidebarLinks?.map((link: any) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.id}
              href={link.path}
              className={cn(
                " flex items-center w-fit shadow-none p-3 hover:ring-2  bg-primaryColor rounded-full cursor-pointer "
              )}
            >
              <Image
                src={`/assets/icons/${link.icon}`}
                width={16}
                height={16}
                alt={link.name}
              />
            </Link>
          );
        })}
      </section>
    );
  };
  return (
    <div className="sticky left-7 top-0 flex flex-col justify-between w-fit items-center   h-screen">
      <div className=" flex flex-col items-center w-full justify-between gap-4 py-4 relative top-5 bg-white h-[90vh] rounded-3xl">
        <Image
          src="/assets/icons/logo.svg"
          width={70}
          height={70}
          alt="logo"
          className="w-[4.5625rem]"
        />

        <div>
          <NavContent />
        </div>
        <div className="bg-secondary_green p-2 rounded-xl ">
          <Image
            src="/assets/icons/support.svg"
            width={25}
            height={25}
            alt="support"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
