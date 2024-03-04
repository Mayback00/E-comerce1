import FilterMenuItems from "./FilterMenuItems";
import "./FilterDropdown.css"

const FilterDropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={'dropdown ${dropdownClass} ${dropdown ? "show" : ""}'}>
            {
                submenus.map((submenu, index) => (
                    <FilterMenuItems items={submenus} key={index} depthLevel={depthLevel} />
                    ))
                }
        </ul>

    );
};

export default FilterDropdown;
