import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  ShoppingBag,
  Music2,
  Film,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../componats/Button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
// import { Menus } from "../Context/SidebarContext";

export default function SideBar() {
  // const menus = useContext(Menus)?.isOpen
  // console.log(menus);
  
  
  {/* {menus ? "lg:hidden" : "lg:flex"} */}
  return (
    <>
        <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 ml-1 flex flex-col lg:hidden `}>
        
        <SmallSidebarItem IconOrImgUrl={Home} title="Home" Url="/" /> 
        <SmallSidebarItem IconOrImgUrl={Repeat} title="Shorts" Url="/shorts" />
        <SmallSidebarItem
          IconOrImgUrl={Clapperboard}
          title="Subscriptions"
          Url="/subscriptions"
          
          />
        <SmallSidebarItem IconOrImgUrl={Library} title="Library" Url="/library" />
      </aside>

        <aside
        className={`w-56 lg:sticky absolute top-0
        overflow-y-auto scrollbar-hidden pb-4 hidden lg:flex flex-col gap-2 px-2 `}>
      <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" Url="/" />
          <LargeSidebarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            Url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={Library}
            title="Library"
            Url="/library"
          />
          <LargeSidebarItem
            IconOrImgUrl={History}
            title="History"
            Url="/history"
          />
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            Url="/your-videos"
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            Url="/playlist?list=WL"
          />
          {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              Url={`/playlist?list=${playlist.id}`}
            />
          ))}
          </LargeSidebarSection>
          <hr/>
          <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" Url="/" />
            {
              subscriptions.map(sub=>(
                <LargeSidebarItem
                key={sub.id}
                IconOrImgUrl={sub.imgUrl}
                title={sub.channelName}
                Url={`/@${sub.id}`}
              />
              ))
            }
          </LargeSidebarSection>
          <hr/>
          <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImgUrl={Flame}
            title="Trending"
            Url="/trending"
          />
          <LargeSidebarItem
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            Url="/shopping"
          />
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" Url="/music" />
          <LargeSidebarItem
            IconOrImgUrl={Film}
            title="Movies & TV"
            Url="/movies-tv"
          />
          <LargeSidebarItem IconOrImgUrl={Radio} title="Live" Url="/live" />
          <LargeSidebarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            Url="/gaming"
          />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" Url="/news" />
          <LargeSidebarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            Url="/sports"
          />
          <LargeSidebarItem
            IconOrImgUrl={Lightbulb}
            title="Learning"
            Url="/learning"
          />
          <LargeSidebarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            Url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrImgUrl={Podcast}
            title="Podcasts"
            Url="/podcasts"
          />
        </LargeSidebarSection>
      </aside>
    </> 
  );
}
type typeSmallItem = {
  IconOrImgUrl: ElementType | string
  title: string;
  Url: string;
};

function SmallSidebarItem({ title, IconOrImgUrl, Url }: typeSmallItem) {
  return (
    <a
      href={Url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <IconOrImgUrl className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type typeLargeSection = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};
function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: typeLargeSection) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIconOrImgUrl = isExpanded ? ChevronUp : ChevronDown;
  
  
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIconOrImgUrl className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type typeLargeItem = {
  IconOrImgUrl: ElementType | string
  title: string;
  Url: string;
  isActive?: boolean;
};
function LargeSidebarItem({
  IconOrImgUrl,
  title,
  Url,
  isActive = false,
}: typeLargeItem) {
  return (
    <a
      href={Url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      
      {typeof IconOrImgUrl === "string" ? <img src={IconOrImgUrl} className=" w-6 h-6 rounded-full"/>  :<IconOrImgUrl className="w-6 h-6 " /> }
      <div className="whitespace-nowrap overflow-hidden text-ellipsis font-bold ">
        {title}
      </div>
    </a>
  );
}
