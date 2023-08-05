import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC } from "react";
import bookATableImg from "../../assets/book-a-table.jpg";

const BookATableSection: FC = () => {
  return (
    <section className="w-full flex h-full min-h-screen">
      <div
        style={{
          background: `url(${bookATableImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
      >
        <Link href="/" className="font-semibold cursor-pointer">
          Hukka Bukka
        </Link>
        <div className="text-center">
          <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
            Check Out
          </h2>
          <h1 className="font-medium text-[80px] leading-none">Our Menus</h1>
        </div>

        <NavigationFooter />
      </div>

      <div className="w-[50%] flex flex-col items-center h-screen">
        <h2>hello world</h2>
      </div>
    </section>
  );
};

export default BookATableSection;