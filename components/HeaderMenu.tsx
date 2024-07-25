import DarkModeButton from "./DarkModeButton";

const HeaderMenu = () => {
  return (
    <div className="flex justify-between p-8 shadow-lg dark:bg-black dark:text-white">
      <div>
        <h1 className="uppercase font-bold">Klinik Amethyst</h1>
      </div>
      <div>
        Menu
      </div>
      
      {/* <button className="btn">batan</button>
      <button className="btn btn-primary">batan</button>
      <button className="btn btn-secondary">batan</button>
      <button className="btn btn-accent">batan</button> */}
      
      <DarkModeButton />
    </div>
  )
};

export default HeaderMenu;