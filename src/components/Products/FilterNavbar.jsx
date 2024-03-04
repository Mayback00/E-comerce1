import { menuItems } from "./MenuItems";
import FilterMenuItems from "./FilterMenuItems";

const FilterNavabar = () => {
    return(
        <nav className="dropdown-container">
            <ul className="menu-filters">
                {
                    menuItems.map((menu, index)=>{
                        const depthLevel = 0;
                        return <FilterMenuItems items={menu} key={index} depthLevel={depthLevel}/>
                    })
                }
            </ul>
        </nav>
    )
}

export default FilterNavabar;