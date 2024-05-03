import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const HeaderNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="hero"
      className="fixed top-0 w-full flex justify-between p-6 lg:p-10 bg-white drop-shadow-md max-h-[76px] z-20"
    >
      {/* Left Side */}
      <Button
        asChild
        variant="ghost"
        className="self-center ml-[-10px]"
        onClick={() => scrollToSection("hero")}
      >
        <p className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0">
          Dentaleaf
        </p>
      </Button>

      {/* Right Side - Desktop */}
      <div className="hidden lg:block flex flex flex-col space-x-4 self-center">
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Home</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("location")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Location</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("reviews")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Reviews</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("about")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>About</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("services")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Services</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("teammembers")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Team Members</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("ourpriority")}
          className="cursor-pointer ease-in-out transition active:scale-95"
        >
          <p>Our Priority</p>
        </Button>
      </div>

      {/* Right Side - Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="text-3xl self-center mt-[-7px]">
            ☰
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="self-center ml-[-10px]"
                    onClick={() => scrollToSection("hero")}
                  >
                    <p className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0">
                      Dentaleaf
                    </p>
                  </Button>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-6 pt-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("hero")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Home</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("location")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Location</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("reviews")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Reviews</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("about")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>About</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("services")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Services</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("teammembers")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Team Members</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("ourpriority")}
                    className="py-7 shadow ease-in-out transition active:scale-95"
                  >
                    <p>Our Priority</p>
                  </Button>
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderNavbar;