import Image from "next/image";
import Link from "next/link";

const UserMenuButton = () => {
  return (
    <div className="dropdown dropdown-end absolute top-6 right-32 lg:right-40 -mr-1 lg:mr-2">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <Image
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            width="100"
            height="100"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link href="/user" className="justify-between">
            Profile<span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link href="/user">Settings</Link>
        </li>
        <li>
          <Link href="/user">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButton;
