import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.css";

const Navbar: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <nav
      className={`w-64 h-screen absolute top-0 left-0 bg-white p-4 flex flex-col ${styles["navbar-open"]}`}
      onClick={onClose}
    >
      <span
        className="text-4xl absolute top-4 right-4 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      <ul className="flex flex-col items-center relative top-16 text-lg xl:text-2xl">
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/products">
          <a className="hover:underline mt-4">Products</a>
        </Link>
        <Link href="/contacts">
          <a className="hover:underline mt-4">Contacts</a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
