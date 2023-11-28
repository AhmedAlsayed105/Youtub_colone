import { useState } from "react";
import "./App.css";
import "./index.css";
import { categories, videos } from "./data/home";
import HeaderPage from "./layout/HeaderPage";
import Category from "./layout/Category";
import VideoGrid from "./layout/VideoGrid";
import SideBar from "./layout/SideBar";
// import MenuProvider from "./Context/SidebarContext";

export default function App() {
  const [selectCategories, setSelectCategories] = useState(categories[0]);
  return (
    // <MenuProvider>
      <div className="max-h-screen flex flex-col">
        <HeaderPage />
        <div className="grid grid-cols-[auto,1fr] overflow-auto flex-grow">
          <SideBar  />
          <div className="overflow-x-hidden pb-4 px-8">
            <div className="sticky top-0 z-10">
              <Category
                onSelect={setSelectCategories}
                selectedCategory={selectCategories}
                categories={categories}
              />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGrid key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
      // </MenuProvider>
  );
}
