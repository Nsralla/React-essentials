function TabButton({ children, onSelect, isSelected }) {
  // props is passed  as an object

  //use onClick prop
  // onClick={put a function}
  //
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
export default TabButton;
//  ctrl + space for suggestions
