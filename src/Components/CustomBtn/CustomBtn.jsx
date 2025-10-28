function CustomBtn(props) {
  return (
    <button className={`text-sm font-medium ${props.styling} py-3 px-6 rounded-3xl cursor-pointer`}>
      {props.label}
    </button>
  );
}

export default CustomBtn;
